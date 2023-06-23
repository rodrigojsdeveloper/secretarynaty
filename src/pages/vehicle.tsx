import { ListVehicles } from "@/components/Lists/ListVehicles";
import { FormVehicle } from "@/components/Forms/FormVehicle";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Container } from "./style";

const Vehicle = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Teste Secretária Naty" />
      </HelmetProvider>
      <Header />
      <Container>
        <FormVehicle />
        <ListVehicles />
      </Container>
    </>
  );
};

export default Vehicle;
