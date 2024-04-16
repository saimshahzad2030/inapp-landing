import Brands from "@/components/Brands/Brands";
import Expertise from "@/components/Expertise/Expertise";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Expertise />
      <Brands />
    </>
  );
}
