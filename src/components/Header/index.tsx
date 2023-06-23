import { Container, Content, Link, ContainerImage } from "./style";
import { HeaderMobile } from "../HeaderMobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import x from "../../assets/x.png";
import Image from "next/image";

const Header = () => {
  const [newLastParameter, setNewLastParameter] = useState<string>("");

  const [showHeaderMobile, setShowHeaderMobile] = useState<boolean>(false);

  const [showX, setShowX] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = () => {
    setShowHeaderMobile(true);
    setShowX(true);

    if (showHeaderMobile) {
      setShowHeaderMobile(false);
      setShowX(false);
    }
  };

  useEffect(() => {
    const lastParameter = window.location.href.split("/");
    const newLastParameter = lastParameter[lastParameter.length - 1];
    setNewLastParameter(newLastParameter);
  }, []);

  return (
    <Container>
      <Image
        src={logo}
        alt="Secretaria Naty"
        width={50}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      />
      <Content>
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
      </Content>
      <ContainerImage>
        <Image
          src={showX ? x : menu}
          alt="Secretaria Naty"
          width={30}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </ContainerImage>
      {showHeaderMobile ? <HeaderMobile /> : null}
    </Container>
  );
};

export { Header };
