// Components
import Nav from "@/components/organisms/Nav";
import Container from "@/components/templates/container";

const Home = () => {
  return (
    <Container className="bg-white dark:bg-black font-sans text-black dark:text-white">
      <Nav />
    </Container>
  );
}

export default Home;