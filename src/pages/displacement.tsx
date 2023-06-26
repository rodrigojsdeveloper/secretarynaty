import { ListDisplacements } from "@/components/Lists/ListDisplacements";
import { FormDisplacement } from "@/components/Forms/FormDisplacement";
import { Container } from "../app/stylePages";
import { Header } from "@/components/Header";
import { Metadata } from "@/app/metadata";
import { inter } from "@/app/font";

const Displacement = () => {
  return (
    <>
      <Metadata />
      <Header />
      <Container className={inter.className}>
        <FormDisplacement />
        <ListDisplacements />
      </Container>
    </>
  );
};

export default Displacement;
