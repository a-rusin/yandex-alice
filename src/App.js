import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import Design from "./Components/Design/design";
import Audio from "./Components/Audio/audio";
import Features from "./Components/Features/features";
import Alice from "./Components/Alice/alice";
import SmartHome from "./Components/SmartHome/smart-home";
import Light from "./Components/Light/light";
import Sale from "./Components/Sale/sale";
import Footer from "./Components/Footer/footer";

import navItems from "./const/navItems";
import featuresItems from "./const/featuresItems";

function App() {
  return (
    <>
      <header>
        <Header navItems={navItems} />
      </header>
      <main>
        <Hero />
        <Design />
        <Audio />
        <Features featuresItems={featuresItems} />
        <Alice />
        <SmartHome />
        <Light />
        <Sale />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
