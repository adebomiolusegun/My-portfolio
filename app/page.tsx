// import NavPage from "./nav/page";

import AboutPage from "./components/About/page";
import Experience from "./components/Experience/page";
import Header from "./components/Header/page";
import Skill from "./components/Skills/page";
import Work from "./components/Work/page";

function page({}) {
  return (
    <main className="flex flex-col">
      <Header />
      <AboutPage />
      <Skill />
      <Work />
      <Experience />
    </main>
  );
}

export default page;
