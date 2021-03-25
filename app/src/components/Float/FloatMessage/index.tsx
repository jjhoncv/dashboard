import * as React from "react";
import { Box } from "../../Box";
import { Button } from "../../Form/Input";
import { Float } from "../Float";
import "./style.scss";

interface Props {
  show?: boolean;
  handleClick?: Function;
}

export const FloatMessage: React.FC<Props> = ({ handleClick, show: _show, children }) => {
  const [show, setShow] = React.useState(_show);
  const handleHideClick = () => {
    setShow(false);
    handleClick && handleClick();
  }; 
  return (
    <>
      {show && (
        <Float handleClick={() => handleHideClick()}>
          <div className="float-message">
            <Box type="box-middle" scope="box-float-message">
              <div className="float-message-head">Dashboard Auth</div>
              <div className="float-message-body">{children}</div>
              <div className="float-message-foot">
                <Button handleClick={() => handleClick()}>Aceptar</Button>
              </div>
            </Box>
          </div>
        </Float>
      )}
    </>
  );
};
