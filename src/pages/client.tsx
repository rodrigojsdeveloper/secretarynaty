import { ListClients } from "@/components/Lists/ListClients";
import { FormClient } from "@/components/Forms/FormClient";
import { Container } from "../app/stylePages";
import { Header } from "@/components/Header";
import { Metadata } from "@/app/metadata";
import { inter } from "@/app/font";

const Client = () => {
  return (
    <>
      <Metadata />
      <Header />
      <Container className={inter.className}>
        <FormClient />
        <ListClients />
      </Container>
    </>
  );
};

export default Client;
