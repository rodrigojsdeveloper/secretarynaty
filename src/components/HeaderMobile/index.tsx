import { useEffect, useState } from "react";
import { Link } from "../Header/style";
import { inter } from "@/app/font";
import { Container } from "./style";

const HeaderMobile = () => {
  const [newLastParameter, setNewLastParameter] = useState<string>("");

  useEffect(() => {
    const lastParameter = window.location.href.split("/");
    const newLastParameter = lastParameter[lastParameter.length - 1];
    setNewLastParameter(newLastParameter);
  }, []);

  return (
    <Container className={inter.className}>
      <Link
        href="/client"
        style={
          newLastParameter == "client"
            ? { color: "#000", textDecoration: "underline" }
            : { color: "gray" }
        }
      >
        Cliente
      </Link>
      <Link
        href="/conductor"
        style={
          newLastParameter == "conductor"
            ? { color: "#000", textDecoration: "underline" }
            : { color: "gray" }
        }
      >
        Condutor
      </Link>
      <Link
        href="/vehicle"
        style={
          newLastParameter == "vehicle"
            ? { color: "#000", textDecoration: "underline" }
            : { color: "gray" }
        }
      >
        Veículo
      </Link>
      <Link
        href="/displacement"
        style={
          newLastParameter == "displacement"
            ? { color: "#000", textDecoration: "underline" }
            : { color: "gray" }
        }
      >
        Deslocamento
      </Link>
    </Container>
  );
};

export { HeaderMobile };
