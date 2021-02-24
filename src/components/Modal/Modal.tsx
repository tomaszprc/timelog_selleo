import { FunctionComponent } from "react";

interface ModalProps {}

const Modal: FunctionComponent<ModalProps> = ({ children }) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
