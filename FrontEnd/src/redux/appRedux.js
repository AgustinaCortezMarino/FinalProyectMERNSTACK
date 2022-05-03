//constants

const LUGARES_RIOJANOS = "LUGARES_RIOJANOS";

const stateInitial = {
  title: "Home",
};

//reducers
export const appReducer = (state = stateInitial, action) => {
  console.log("action", action);
  switch (action.type) {
    case LUGARES_RIOJANOS:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

//actions
export const setTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: LUGARES_RIOJANOS,
      payload: title,
    });
  };
};
