// import NavPage from "./nav/page";

import AboutPage from "./components/About/page";
import Header from "./components/Header/page";
import Skill from "./components/Skills/page";

function page({}) {
  return (
    <main className="flex flex-col">
      <Header />
      <AboutPage />
      <Skill />
    </main>
  );
}

export default page;
