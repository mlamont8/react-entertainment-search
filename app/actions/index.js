import fetchJsonp from 'fetch-jsonp';

// Fetching Front Page Data

  export function fetchFrontData(){
return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetchJsonp('https://api.themoviedb.org/3/movie/upcoming/?api_key=21b0daca9dad79653c91d176b7930bee')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemsIsLoading(false));
            return response;
        })
        .then((response) => response.json())
        .then((json) =>
            dispatch(itemsFetchDataSuccess(json.results)))
        .catch(() => dispatch(itemsHasErrored(true)));

      }
    }

    export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        url: items[4].backdrop_path
    };
}

export function itemsHasErrored(bool) {
  console.log('item has errored')
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

// Fetching Search Term

export function searchTerm(term) {
  return {
    type: 'SEARCH_TERM_ENTERED',
    term
  }
}

export function fetchExploreData(type, page){
  console.log(type, page)
return (dispatch) => {
  dispatch(itemsIsLoading(true));
  fetchJsonp('https://api.themoviedb.org/3/'+type+'/popular?api_key=21b0daca9dad79653c91d176b7930bee&language=en-US&page=' + page)
      .then((response) => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          dispatch(itemsIsLoading(false));
          return response;
      })
      .then((response) => response.json())
      .then((json) =>
           
          dispatch(itemsFetchExploreSuccess(json)))
      .catch(() => dispatch(itemsHasErrored(true)));

    }
  }


  export function itemsFetchExploreSuccess(items) {
      console.log(items)
  return {
      type: 'ITEMS_FETCH_EXPLORE_SUCCESS',
      items
  };
}
