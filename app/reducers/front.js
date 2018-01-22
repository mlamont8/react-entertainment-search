// To get Front Page Url data

export default function front(state={}, action){
  switch(action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return Object.assign({}, state, {
        url: action.url
      })
      case 'ITEMS_IS_LOADING':
        return Object.assign({}, state, {
          isLoading: action.isLoading
        })
      default:
        return state;
  }

}
