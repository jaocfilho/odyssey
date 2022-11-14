import { ReactNode } from "react";

import { Flex } from "milky-ui";

type ContainerProps = {
  children: ReactNode;
};

/**
 * The external container of a roadmap cell.
 */
export const Container = ({ children }: ContainerProps) => {
  return (
    <Flex noShrink css={{ width: "$space$10", height: "$space$8" }}>
      {children}
    </Flex>
  );
};
