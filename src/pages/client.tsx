import { ListClients } from "@/components/Lists/ListClients";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormClient } from "@/components/Forms/FormClient";
import { Header } from "@/components/Header";
import { Container } from "./style";

const Client = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Teste Secretária Naty" />
      </HelmetProvider>
      <Header />
      <Container>
        <FormClient />
        <ListClients />
      </Container>
    </>
  );
};

export default Client;
