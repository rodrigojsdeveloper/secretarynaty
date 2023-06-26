import { ListVehicles } from "@/components/Lists/ListVehicles";
import { FormVehicle } from "@/components/Forms/FormVehicle";
import { Container } from "../app/stylePages";
import { Header } from "@/components/Header";
import { Metadata } from "@/app/metadata";
import { inter } from "@/app/font";

const Vehicle = () => {
  return (
    <>
      <Metadata />
      <Header />
      <Container className={inter.className}>
        <FormVehicle />
        <ListVehicles />
      </Container>
    </>
  );
};

export default Vehicle;
