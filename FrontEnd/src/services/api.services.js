import api from "../client/api";
import routes from "../routes/BEroutes";

export const getLugares = async () => api.get(routes.allLugares());
export const getLugaresById = async (id) => api.get(routes.lugar(id));
export const NewLugar = async (sec) => api.post(routes.allLugares(), sec);
export const editLugar = async (id, sec) => api.patch(routes.lugar(id), sec);
export const deleteLugar = async (id) => api.delete(routes.lugar(id));
