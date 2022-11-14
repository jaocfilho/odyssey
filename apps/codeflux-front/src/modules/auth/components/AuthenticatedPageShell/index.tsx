import { ReactNode } from "react";

import { Flex } from "milky-ui";

import { AuthenticatedPageHeader } from "../AuthenticatedPageHeader";

type AuthenticatedPageShellProps = {
  children: ReactNode;
};

export const AuthenticatedPageShell = ({
  children,
}: AuthenticatedPageShellProps) => {
  return (
    <Flex direction="column" fullHeight>
      <AuthenticatedPageHeader />
      {children}
    </Flex>
  );
};
