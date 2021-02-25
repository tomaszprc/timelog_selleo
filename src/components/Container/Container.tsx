import React, { FunctionComponent } from "react";
import { ContainerTypeProps } from "../../types";

const Container: FunctionComponent<ContainerTypeProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
