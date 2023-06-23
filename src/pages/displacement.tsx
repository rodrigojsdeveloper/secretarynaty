import { ListDisplacements } from "@/components/Lists/ListDisplacements";
import { FormDisplacement } from "@/components/Forms/FormDisplacement";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header";
import { Container } from "./style";

const Displacement = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HelmetProvider>
        <Helmet title="Teste Secretária Naty" />
      </HelmetProvider>
      <Header />
      <Container>
        <FormDisplacement />
        <ListDisplacements />
      </Container>
    </>
  );
};

export default Displacement;
