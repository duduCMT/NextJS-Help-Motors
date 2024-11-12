import { ReactNode } from "react";

type DefaultContainerProps = {
  children: ReactNode;  
  className?: string;
  contentClassName?: string;
  withoutHorizontalPadding?: boolean;
};

export default DefaultContainerProps;
