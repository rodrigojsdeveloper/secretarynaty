import { ListDisplacements } from "@/components/Lists/ListDisplacements";
import { FormDisplacement } from "@/components/Forms/FormDisplacement";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Container } from "./style";

const Displacement = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Teste Secretária Naty" />
      </HelmetProvider>
      <Header />
      <Container>
        <FormDisplacement />
        <ListDisplacements />
      </Container>
    </>
  );
};

export default Displacement;
