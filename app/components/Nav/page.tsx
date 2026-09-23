import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function NavPage() {
  return (
    <>
      <div className="flex ml-auto justify-end items-center p-4">
        <p className="text-primary mr-auto">OA_</p>
        <RxHamburgerMenu className="flex text-black text-2xl md:hidden" />
        <nav className="  items-center  p-4 pr-8   md:flex hidden">
          <ul className="flex space-x-4 ">
            <li>
              <Link href="#home" className="hover-effect">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover-effect">
                About
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover-effect">
                Work
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover-effect">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover-effect">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center ml-4 ">
          <p className="text-primary  hidden md:flex ">Availiable</p>
        </div>
      </div>
    </>
  );
}

export default NavPage;
