
export default function exploreData(state={}, action){
  switch(action.type) {
    case 'ITEMS_FETCH_EXPLORE_SUCCESS':
      return Object.assign({}, state, {
        exploreResults: action.items
      })
      default:
        return state;
  }
}
