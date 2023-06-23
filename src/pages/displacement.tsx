import { ListDisplacements } from "@/components/Lists/ListDisplacements";
import { FormDisplacement } from "@/components/Forms/FormDisplacement";
import { Container } from "./style";

const Displacement = () => {
  return (
    <Container>
      <FormDisplacement />
      <ListDisplacements />
    </Container>
  );
};

export default Displacement;
