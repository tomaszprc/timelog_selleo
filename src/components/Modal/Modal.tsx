import { FunctionComponent } from "react";
import { ModalTypeProps } from "../../types";

const Modal: FunctionComponent<ModalTypeProps> = ({ children }) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
