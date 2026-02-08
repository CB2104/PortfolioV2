import NavBar from "./bar/NavBar";
import BottomNav from "./bar/BottomNav";
import Hero from "./Hero";
import MyPortfolio from "./MyPortfolio";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        <Hero />
        <MyPortfolio />
        <Skills/>
        <AboutMe/>
        <ContactForm/>
      </main>

      <BottomNav />
    </div>
  );
};

export default Layout;
