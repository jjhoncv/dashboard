import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export const PrivateRoute = ({ component: Component,  ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLogged() === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: `/login`, state: { from: props.location } }}
          />
        )
      }
    />
  );
};
