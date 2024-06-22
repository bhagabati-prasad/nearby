import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...rest} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export const ReverseProtectedRoute = ({
  isAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        } else {
          return <Component />;
        }
      }}
    />
  );
};
