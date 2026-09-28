"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuX } from "react-icons/lu";
import Avaliability from "@/app/UI/Avaliability/page";

function NavPage() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Work",
      href: "#work",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  function handleClick() {
    setOpen(false);
  }

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-border
        bg-background/90
        backdrop-blur-md
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-16
          w-full
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={handleClick}
          className="
            font-mono
            text-lg
            font-bold
            text-primary
            transition-opacity
            hover:opacity-80
          "
        >
          AD_
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                font-mono
                text-xs
                text-muted
                transition-colors
                hover:text-primary
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Availability */}
        <Avaliability />
        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="
            flex
            size-9
            items-center
            justify-center
            rounded-md
            border
            border-border
            text-muted
            transition-colors
            hover:border-primary
            hover:text-primary
            md:hidden
          "
        >
          {open ? (
            <LuX className="size-5" />
          ) : (
            <RxHamburgerMenu className="size-5" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div
          className="
            border-t
            border-border
            bg-background
            md:hidden
          "
        >
          <div className="px-5 py-4">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleClick}
                  className="
                    border-b
                    border-border
                    py-3
                    font-mono
                    text-xs
                    text-muted
                    transition-colors
                    last:border-b-0
                    hover:text-primary
                  "
                >
                  <span className="mr-2 text-primary">$</span>

                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavPage;
