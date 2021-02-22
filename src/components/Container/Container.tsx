import React, {FunctionComponent} from 'react';

interface ContainerProps {};

const Container: FunctionComponent<ContainerProps> = ({children}) => {
    return <div className="container">{children}</div>
}

export default Container;