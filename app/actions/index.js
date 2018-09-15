import fetchJsonp from "fetch-jsonp";

// Fetching Front Page Data

export function fetchFrontData() {
  return dispatch => {
    dispatch(frontIsLoading(true));
    fetchJsonp(
      "https://api.themoviedb.org/3/movie/upcoming/?api_key=21b0daca9dad79653c91d176b7930bee"
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(frontIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(json => dispatch(frontFetchDataSuccess(json.results)))
      .catch(() => dispatch(frontHasErrored(true)));
  };
}

export function frontFetchDataSuccess(items) {
  // get random number for random front page background
  const randomNum = Math.floor(Math.random() * Math.floor(19));
  return {
    type: "FRONT_FETCH_DATA_SUCCESS",
    url: items[randomNum].backdrop_path,
    title: items[randomNum].title,
    overview: items[randomNum].overview,
    id: items[randomNum].id
  };
}

export function frontHasErrored(bool) {
  console.log("front has errored");
  return {
    type: "FRONT_HAS_ERRORED",
    hasErrored: bool
  };
}

export function frontIsLoading(bool) {
  return {
    type: "FRONT_IS_LOADING",
    isLoading: bool
  };
}

// Fetching Search Term

export function searchTerm(term) {
  return {
    type: "SEARCH_TERM_ENTERED",
    term
  };
}

export function fetchExploreData(type, page) {
  console.log(type, page);
  return dispatch => {
    dispatch(exploreRequest());
    fetchJsonp(
      "https://api.themoviedb.org/3/" +
        type +
        "/popular?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=" +
        page
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        //   dispatch(exploreIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(json => dispatch(exploreFetchSuccess(json)))
      .catch(() => dispatch(exploreHasErrored(true)));
  };
}

export function exploreFetchSuccess(items) {
  console.log(items);
  return {
    type: "EXPLORE_FETCH_SUCCESS",
    items
  };
}

export function exploreHasErrored(bool) {
  console.log("explore has errored");
  return {
    type: "EXPLORE_HAS_ERRORED",
    hasErrored: bool
  };
}

export function exploreRequest() {
  return {
    type: "EXPLORE_REQUEST"
  };
}
