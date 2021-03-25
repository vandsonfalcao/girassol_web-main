import React from "react";
import { Route as ReactDomRoute } from "react-router-dom";

const Route = ({ component: Component, ...rest }) => {
  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};
export default Route;
