import * as React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Container: React.FunctionComponent<ContainerProps> = ({ className, children }) => {
  return <div className={`ui-container ui-p-8 ui-mx-auto xl:ui-px-0 ${className ? className : ""
  }`}>{children}</div>;
};
