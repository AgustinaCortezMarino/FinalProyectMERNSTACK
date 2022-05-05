const BASEURL = "http://localhost:3000";
const lugaresUrl = `${BASEURL}/lugares`;

const routes = {
  allLugares: () => lugaresUrl,
  lugar: (id) => `${lugaresUrl}/${id}`,
};
export default routes;
