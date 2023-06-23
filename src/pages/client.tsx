import { ListClients } from "@/components/Lists/ListClients";
import { FormClient } from "@/components/Forms/FormClient";
import { Container } from "./style";

const Client = () => {
  return (
    <Container>
      <FormClient />
      <ListClients />
    </Container>
  );
};

export default Client;
