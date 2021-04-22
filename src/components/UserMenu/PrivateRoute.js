import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

export default function PrivateRoute({ component: Component, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
