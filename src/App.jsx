import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import Showcase from "./components/ShowCase";
import TestimonialCard from "./components/Testimonial";
import MuiltiCardTestimonials from "./components/MultiCardTestimonial";
import PricingHero from "./components/PricingHero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <TopSection />
      </section>

      <section id="showcase">
        <Showcase />
      </section>

      <section id="testimonial">
        <TestimonialCard />
      </section>

      <section id="reviews">
        <MuiltiCardTestimonials />
      </section>

      <section id="pricing">
        <PricingHero />
      </section>

      <Footer />
    </>
  );
}

export default App;
