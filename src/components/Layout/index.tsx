import { Container } from "@mui/material";
import Navbar from "../Navbar";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
