import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function NavPage() {
  return (
    <>
      <div className="flex ml-auto justify-end items-center p-4">
        <RxHamburgerMenu className="flex text-black text-2xl md:hidden" />
        <nav className=" border-2 border-amber-400 items-center text-black p-4 pr-8 md:flex hidden">
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

        <div className="flex items-center justify-center ml-4 ">
          <p className="text-blue-500 hidden md:flex ">Availiable</p>
        </div>
      </div>
    </>
  );
}

export default NavPage;
