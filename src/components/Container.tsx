import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = (props: Props) => {
  return <div className="Container">{props.children}</div>;
};

export default Container;
