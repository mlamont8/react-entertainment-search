
export default function exploreData(state={}, action){
  switch(action.type) {
    case 'ITEMS_FETCH_EXPLORE_SUCCESS':
      return Object.assign({}, state, {
        exploreData: action.items
      })
      default:
        return state;
  }
}
