import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="lg:px-[240px] bg-blue-400">
      <Navbar />
      <Navigation />
    </div>
  );
}
