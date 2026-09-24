// import NavPage from "./nav/page";

import AboutPage from "./components/About/page";
import Header from "./components/Header/page";

function page({}) {
  return (
    <main className="flex flex-col">
      <Header />
      <AboutPage />
    </main>
  );
}

export default page;
