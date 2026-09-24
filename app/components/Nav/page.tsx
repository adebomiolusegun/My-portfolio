import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function NavPage() {
  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 md:px-8 lg:px-10">
        <Link href="#home" className="text-primary font-semibold">
          AD_
        </Link>

        <nav className="ml-auto hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="#home" className="transition-colors hover-effect">
                Home
              </Link>
            </li>

            <li>
              <Link href="#about" className="transition-colors  hover-effect">
                About
              </Link>
            </li>

            <li>
              <Link href="#work" className="transition-colors hover-effect">
                Work
              </Link>
            </li>

            <li>
              <Link
                href="#experience"
                className="transition-colors hover-effect"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link href="#contact" className="transition-colors hover-effect">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Availability */}
        <div className="ml-6 hidden items-center gap-2 md:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <p className="text-primary text-sm">Available</p>
        </div>

        {/* Mobile Menu */}
        <div className="ml-auto flex items-center gap-6 md:hidden">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <p className="text-primary text-sm">Available</p>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="text-2xl"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavPage;
