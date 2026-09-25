import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Skills,
  SEO,
} from "../components";
import { SEOdata } from "../constants/seo";

function Home() {
  return (
    <>
      <SEO title={SEOdata.homePage.title} noIndex={false} />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
