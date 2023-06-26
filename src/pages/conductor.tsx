import { ListConductors } from "@/components/Lists/ListConductors";
import { FormConductor } from "@/components/Forms/FormConductor";
import { Container } from "../app/stylePages";
import { Header } from "@/components/Header";
import { Metadata } from "@/app/metadata";
import { inter } from "@/app/font";

const Conductor = () => {
  return (
    <>
      <Metadata />
      <Header />
      <Container className={inter.className}>
        <FormConductor />
        <ListConductors />
      </Container>
    </>
  );
};

export default Conductor;
