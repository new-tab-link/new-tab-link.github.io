import Link from "next/link";
import 'next'
import ClippedDrawer from "./components/doc-content";
import { Container } from "@mui/material";
const Home = () => {
  return (
    <Container>
      <ClippedDrawer />
    </Container>
  );
};

export default Home;
