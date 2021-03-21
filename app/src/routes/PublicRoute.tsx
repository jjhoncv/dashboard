import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLogged() === true ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
