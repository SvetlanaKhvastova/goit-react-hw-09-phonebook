import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

export default function PublicRoute({ component: Component, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isLoggedIn && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
