import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="lg:px-[240px]">
      <div className="bg-[#003b95]">
      <Navbar />
      <Navigation />
      </div>
    </div>
  );
}
