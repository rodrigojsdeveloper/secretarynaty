import { ListVehicles } from "@/components/Lists/ListVehicles";
import { FormVehicle } from "@/components/Forms/FormVehicle";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "../app/stylePages";
import { Header } from "@/components/Header";

const Vehicle = () => {
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
        <FormVehicle />
        <ListVehicles />
      </Container>
    </>
  );
};

export default Vehicle;
