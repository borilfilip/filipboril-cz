import * as actionTypes from "../actions/actionTypes";

const initialState = {
  showDemoAlert: true,
};

const demosHeader = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLOSE_DEMO_ALERT:
      return {
        ...state,
        showDemoAlert: false,
      };
    default:
      return state;
  }
};

export default demosHeader;
