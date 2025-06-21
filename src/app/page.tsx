import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TrendingDestinations from "./components/TrendingDestinations";
import TopProperties from "./components/TopProperties";

export default function Home() {
  return (
    <div className="lg:px-[240px]">
      <div className="bg-[#003b95]">
        <Navbar />
        <Navigation />
      </div>
      <TrendingDestinations />
      <TopProperties />
      <Footer />
    </div>
  );
}
