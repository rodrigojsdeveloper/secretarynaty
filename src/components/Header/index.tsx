import { HeaderMobile } from "../HeaderMobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import { inter } from "@/app/font";
import x from "../../assets/x.png";
import Image from "next/image";
import {
  Container,
  Content,
  Link,
  ContainerImage,
  SubContainer,
} from "./style";

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
    <Container className={inter.className}>
      <SubContainer>
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
                : { color: "#545454" }
            }
          >
            Cliente
          </Link>
          <Link
            href="/conductor"
            style={
              newLastParameter == "conductor"
                ? { color: "#000", textDecoration: "underline" }
                : { color: "#545454" }
            }
          >
            Condutor
          </Link>
          <Link
            href="/vehicle"
            style={
              newLastParameter == "vehicle"
                ? { color: "#000", textDecoration: "underline" }
                : { color: "#545454" }
            }
          >
            Veículo
          </Link>
          <Link
            href="/displacement"
            style={
              newLastParameter == "displacement"
                ? { color: "#000", textDecoration: "underline" }
                : { color: "#545454" }
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
      </SubContainer>
    </Container>
  );
};

export { Header };
