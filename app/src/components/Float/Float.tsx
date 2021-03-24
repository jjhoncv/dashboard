import * as React from "react";
import "./style.scss";

interface Props {
  handleClick?: Function;
  children: any;
}

export const Float: React.FC<Props> = ({ handleClick, children }) => {
  return (
    <div onClick={() => handleClick()} className="float">
      {children}
    </div>
  );
};
