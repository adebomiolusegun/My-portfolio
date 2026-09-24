import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function NavPage() {
  return (
    <>
      <div className="flex ml-auto justify-end items-center p-4">
        <p className="text-primary mr-auto">AD_</p>
        <div className="flex items-center justify-center ml-4 md:hidden gap-8">
          <div className="flex gap-2 items-center justify-center ml-4 ">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary md:hidden " />
            <p className="text-primary md:hidden flex ">Availiable</p>
          </div>
          <RxHamburgerMenu className="flex  text-2xl md:hidden" />
        </div>
        <nav className=" items-center  p-4 pr-8 md:flex hidden">
          <ul className="flex space-x-4">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-2 items-center justify-center ml-4 ">
          <span className="h-2.5 w-2.5 rounded-full bg-primary md:flex hidden" />
          <p className="text-primary hidden md:flex ">Availiable</p>
        </div>
      </div>
    </>
  );
}

export default NavPage;
