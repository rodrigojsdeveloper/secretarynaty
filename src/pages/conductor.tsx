import { ListConductors } from "@/components/Lists/ListConductors";
import { FormConductor } from "@/components/Forms/FormConductor";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Container } from "./style";

const Conductor = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Teste Secretária Naty" />
      </HelmetProvider>
      <Header />
      <Container>
        <FormConductor />
        <ListConductors />
      </Container>
    </>
  );
};

export default Conductor;
