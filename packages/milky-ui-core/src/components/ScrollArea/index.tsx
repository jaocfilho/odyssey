import { ReactNode } from "react";

import { Corner, Root, Scrollbar, Thumb, Viewport } from "./styles";

type ScrollAreaProps = {
  children: ReactNode;
};

export const ScrollArea = ({ children }: ScrollAreaProps) => {
  return (
    <Root>
      <Viewport>
        {children}
      </Viewport>
      <Scrollbar orientation="horizontal">
        <Thumb />
      </Scrollbar>
      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>
      <Corner />
    </Root>
  );
};
