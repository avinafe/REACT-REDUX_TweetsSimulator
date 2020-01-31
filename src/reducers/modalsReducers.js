const initialsProps = {
  stateModalAddTweet: false
};

export default function(state = initialsProps, action) {
  switch (action.type) {
    case "STATE_ADD_TWEET_MODAL":
      return {
        ...state,
        stateModalAddTweet: action.payload
      };

    default:
      return state;
  }
}
