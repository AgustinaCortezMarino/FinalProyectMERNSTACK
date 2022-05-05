import { getLugares } from "../services/api.services";

const APP_TITLE = "APP_TITLE";

const stateInitial = {
  title: "Panel",
};

export const appReducer = (state = stateInitial, action) => {
  console.log("action", action);
  switch (action.type) {
    case APP_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export const setTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: APP_TITLE,
      payload: title,
    });
  };
};

//reducers
const initialState = {
  lugares: [],
  lugar: {},
};
export const lugaresReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_LUGARES:
      return { ...state, lugares: payload };
    case SET_LUGAR:
      return { ...state, lugar: payload };

    default:
      return state;
  }
};

//actions
export const GET_ALL_LUGARES = "GET_ALL_LUGARES";
export const SET_LUGAR = "SET_LUGAR";

const getAllLugaresAction = (lugares) => ({
  type: GET_ALL_LUGARES,
  payload: lugares,
});

export const allLugares = () => {
  return async (dispatch) => {
    try {
      const lugares = await getLugares();
      dispatch(getAllLugaresAction(lugares));
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
};

export const setLugar = (lugar) => ({
  type: SET_LUGAR,
  payload: lugar,
});
