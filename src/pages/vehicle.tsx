import { ListVehicles } from "@/components/Lists/ListVehicles";
import { FormVehicle } from "@/components/Forms/FormVehicle";
import { Container } from "./style";

const Vehicle = () => {
  return (
    <Container>
      <FormVehicle />
      <ListVehicles />
    </Container>
  );
};

export default Vehicle;
