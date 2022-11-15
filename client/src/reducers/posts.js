// our state in this app is going to be posts, so we'll rename state to post here
const reducers = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;

    default:
      return posts;
  }
};

export default reducers;
