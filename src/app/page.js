import About from "@/components/About/About";
import Brands from "@/components/Brands/Brands";
import Careers from "@/components/Careers/Careers";
import ChatIcon from "@/components/ChatIcon/Chat-Icon";
import Copyright from "@/components/Copyright/Copyright";
import Expertise from "@/components/Expertise/Expertise";
import Footer from "@/components/Footer/Footer";
import MoveToTop from "@/components/MoveToTop/Move-To-Top";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Projects />
      <ChatIcon />
      <Expertise />
      <Brands />
      <Technologies />
      <Careers />
      <About />
      <MoveToTop />
      <Footer />
      <Copyright />
    </>
  );
}
