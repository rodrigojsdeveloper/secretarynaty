import { ListConductors } from "@/components/Lists/ListConductors";
import { FormConductor } from "@/components/Forms/FormConductor";
import { Container } from "./style";

const Conductor = () => {
  return (
    <Container>
      <FormConductor />
      <ListConductors />
    </Container>
  );
};

export default Conductor;
