// To get Front Page Url data

export default function front(state = {}, action) {
  switch (action.type) {
    case "FRONT_FETCH_DATA_SUCCESS":
      return Object.assign({}, state, {
        url: action.url,
        title: action.title,
        overview: action.overview,
        id: action.id
      });
    case "FRONT_IS_LOADING":
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    default:
      return state;
  }
}
