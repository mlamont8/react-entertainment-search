
export function ItemFetchSuccess(data, media){
  return{
    type: 'MOVIE_FETCH_SUCCESS',
    data
  }
}
export function singleFetchSuccess(data,){
  return{
    type: 'SINGLE_FETCH_SUCCESS',
    data
  }
}

// Action Creators

export function itemsFetchData(url,type)
