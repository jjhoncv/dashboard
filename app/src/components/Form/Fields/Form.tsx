import * as React from "react";
import "./style.scss";

interface Props {
  children: any;
  onSubmit?: Function;
}

export const Form: React.FC<Props> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)} className="form">
      {children}
    </form>
  );
};
