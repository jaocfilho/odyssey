import { Box } from "milky-ui";
import Image from "next/image";

import logo from "../../../public/logo.svg";

export const Logo = () => {
  return (
    <Box cursorPointer css={{ "&:hover": { opacity: .8 } }}>
      <Image src={logo} height={32} alt="Logo" />
    </Box>
  );
};
