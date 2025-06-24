import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
