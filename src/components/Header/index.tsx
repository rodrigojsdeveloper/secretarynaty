import { Container, Content, Link } from "./style";
import { useRouter } from "next/navigation";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Container>
      <Image
        src={logo}
        alt="Secretaria Naty"
        width={50}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <Content>
        <Link href="/client">Cliente</Link>
        <Link href="/conductor">Condutor</Link>
        <Link href="vehicle">Veículo</Link>
        <Link href="/displacement">Deslocamento</Link>
      </Content>
    </Container>
  );
};

export { Header };
