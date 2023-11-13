import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="mx-auto flex justify-center items-center h-screen px-4">{children}</div>;
}

export default Container;
