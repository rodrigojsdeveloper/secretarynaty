import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Metadata = () => {
  return (
    <>
      <Head>
        <title>Teste Secretária Naty</title>
        <style>
          {`
            body {
              margin: 0;
            }
            `}
        </style>
        <meta
          name="description"
          content="Esse é um teste da empresa Secretária Naty"
        />
      </Head>
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
    </>
  );
};

export { Metadata };
