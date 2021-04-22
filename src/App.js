import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Switch } from "react-router";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import routesPage from "./routes";
import Header from "./components/Header/Header";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import PublicRoute from "./components/UserMenu/PublicRoute";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Switch>
          {routesPage.map((route) => {
            return route.privated ? (
              <PrivateRoute key={route.id} {...route} />
            ) : (
              <PublicRoute key={route.id} restricted {...route} />
            );
          })}
          <Redirect to={"/home"} />
        </Switch>
      </Suspense>
    </>
  );
}
