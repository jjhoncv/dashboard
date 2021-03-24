import * as React from "react";
import "./style.scss";

export const Input: any = ({ fullWidth, ...props }) => {
  return (
    <input
      className={`input ${fullWidth ? "fullwidth" : ""}`}
      {...props}
    ></input>
  );
};

export const Button: any = ({ handleClick, fullWidth, ...props }) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`button ${fullWidth ? "fullwidth" : ""}`}
      {...props}
    />
  );
};
