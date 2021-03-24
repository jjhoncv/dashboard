import * as React from "react";
import { Float } from "../Float";
import "./style.scss";

export const FloatLoading = ({ children }) => {
  return (
    <Float>
      <div className="float-loading">{children}</div>
    </Float>
  );
};
