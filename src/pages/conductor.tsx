import { ListConductors } from "@/components/Lists/ListConductors";
import { FormConductor } from "@/components/Forms/FormConductor";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header";
import { Container } from "./style";

const Conductor = () => {
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
        <FormConductor />
        <ListConductors />
      </Container>
    </>
  );
};

export default Conductor;
