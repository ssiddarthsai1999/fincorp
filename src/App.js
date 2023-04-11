import "./App.css";

import Home from "./components/Home/Home";



import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/FeaturesCard";
import FeatureData from "./components/Features/FeatureData";
import Nav from "./components/Navbar/Nav";
import Services from "./components/Services/Services";
import Integrations from "./components/Integrations/Integrations";
import Information from "./components/Information/Information";


function App() {
  return (
      <div className=" antialiased">
          <div className=" ">
              <div className="md:mb-[80px] ">
                  <Nav />
              </div>
              <div className="md:mb-[200px]">
                  <Home />
              </div>
              <div>
                  <Information />
              </div>

              <div className="md:mt-[200px]">
                  <Services />
              </div>
              <div>
                  <Integrations />
              </div>

              <Testimonials />

              <div>
                  <Contact />
              </div>

              <Footer />
          </div>
      </div>
  );
}

export default App;
