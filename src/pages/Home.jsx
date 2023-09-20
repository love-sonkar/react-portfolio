import HeroSectionContainer from "../components/HeroSectionContainer";
import Skills from "../components/Skills";
import ImageProfile from "/images/profile.webp";
import { Container } from "../components/utility";
import LatestProductSection from "../components/LatestProductSection";
const Home = () => {
  return (
    <Container>
      <div className="py-8">
        <HeroSectionContainer
          title="Hii i'm"
          name="Love Sonkar"
          image={ImageProfile}
        />
      </div>
      <Skills />
      <LatestProductSection />
    </Container>
  );
};

export default Home;
