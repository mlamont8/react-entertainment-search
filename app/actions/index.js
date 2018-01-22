import fetchJsonp from 'fetch-jsonp';



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
