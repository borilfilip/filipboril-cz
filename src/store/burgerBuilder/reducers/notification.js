import * as actionTypes from "../actions/actionTypes";

const initialState = {
  title: null,
  message: null,
  type: "success",
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NOTIFY:
      return {
        ...state,
        title: action.title,
        message: action.message,
        type: action.notificationType,
      };
    default:
      return state;
  }
};

export default notification;
