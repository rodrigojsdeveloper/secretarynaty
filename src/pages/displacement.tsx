import { ListDisplacements } from "@/components/Lists/ListDisplacements";
import { FormDisplacement } from "@/components/Forms/FormDisplacement";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "../app/stylePages";
import { Header } from "@/components/Header";
import { inter } from "@/app/layout";

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
        <style>
          {`
            body {
              margin: 0;
            }
            `}
        </style>
      </HelmetProvider>
      <Header />
      <Container className={inter.className}>
        <FormDisplacement />
        <ListDisplacements />
      </Container>
    </>
  );
};

export default Displacement;
