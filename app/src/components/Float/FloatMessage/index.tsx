import * as React from "react";
import { Box } from "../../Box";
import { Button } from "../../Form/Input";
import { Float } from "../Float";
import "./style.scss";
import * as messageActions from "../../../stores/message/actions";
import { useDispatch } from "react-redux";

interface Props {
  show?: boolean;
  handleClick?: Function;
  title?: string;
  children?: any;
  hide?:Function;
}

export const FloatMessageBody = ({ children }) => {
  return <div className="float-message-body">{children}</div>;
};

export const FloatMessageOptions = ({ children }) => {
  return <div className="float-message-foot">{children}</div>;
};

export const FloatMessage: React.FC<Props> = ({
  show: _show,
  children,
  hide,
  title,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(_show);
  const handleHideClick = () => {
    setShow(false);
    dispatch(messageActions.hideAlert());
    hide && hide()
  };

  React.useEffect(()=>{
    _show && setShow(_show)
  },[_show])

  return (
    <>
      {show && (
        <Float handleClick={() => handleHideClick()}>
          <div className="float-message">
            <Box type="box-middle" scope="box-float-message">
              <div className="float-message-head">
                {title ? title : "Dashboard"}
              </div>
              <>
                <>
                  {React.Children.map(children, (child) => {
                    if (child.type === FloatMessageOptions) {
                      return React.cloneElement(child, { ...child.props });
                    }
                    if (child.type === FloatMessageBody) {
                      return React.cloneElement(child, { ...child.props });
                    }
                    return (
                      <>
                        <FloatMessageBody>{children}</FloatMessageBody>
                        <FloatMessageOptions>
                          <Button handleClick={() => handleHideClick()}>
                            Aceptar
                          </Button>
                        </FloatMessageOptions>
                      </>
                    );
                  })}
                </>
              </>
            </Box>
          </div>
        </Float>
      )}
    </>
  );
};
