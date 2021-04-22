import { lazy } from "react";
import links from "./nav.json";

const routes = links.map((link) => {
  const { id, component, exact, path, restricted, privated } = link;
  return {
    exact: exact,
    path: path,
    component: lazy(() => import(`${component}`)),
    key: id,
    restricted,
    privated,
  };
});

export default routes;
