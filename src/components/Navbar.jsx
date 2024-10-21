"use client";

import { navLinks } from "@/data";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  const handleScroll = useCallback(() => {
    const navbarHeight = navbarRef.current?.offsetHeight || 0;
    const scrollPosition = window.scrollY + navbarHeight;

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          active !== link.id
        ) {
          setActive(link.id);
        }
      }
    });

    const hasScrolled = window.scrollY > 50;
    if (scrolled !== hasScrolled) {
      setScrolled(hasScrolled);
    }
  }, [active, scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const memoizedNavLinks = useMemo(
    () =>
      navLinks.map((link) => {
        const isExternal = link.link && !link.id;

        return (
          <a
            key={link.title}
            href={isExternal ? link.link : `#${link.id}`}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`${active === link.id
              ? "text-white"
              : "text-slate-500 hover:text-white/50"
              } text-sm font-medium ml-6 transition-colors duration-300 inline-flex items-center gap-1 relative group`}
            aria-current={active === link.id ? "page" : undefined}
          >
            {link.title} {isExternal && <LuExternalLink />}
            <span
              className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </a>
        );
      }),
    [active]
  );

  return (
    <nav
      ref={navbarRef}
      className={`w-full fixed z-40 p-4 px-6 transition-all duration-300 ${scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
        } pointer-events-auto`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <h1 className="text-white text-lg sm:text-xl font-bold ml-2 sm:ml-3">
            Aziz Khasyi
          </h1>
        </div>

        <div className="hidden sm:flex">{memoizedNavLinks}</div>

        <button
          className="sm:hidden text-white focus:outline-none ml-auto"
          onClick={() => setToggle((prev) => !prev)}
          aria-expanded={toggle}
          aria-label="Toggle navigation"
        >
          {toggle ? (
            <FaTimes className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <FaBars className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>
      </div>

      {toggle && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setToggle(false)}
          aria-hidden={!toggle}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-black text-white p-6 z-40 transform transition-transform duration-300 ease-in-out ${toggle ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center gap-4 mt-6">
          {navLinks.map((link) => {
            const isExternal = link.link && !link.id;

            return (
              <a
                key={link.title}
                href={isExternal ? link.link : `#${link.id}`}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`${active === link.id ? "text-white" : "text-slate-500"
                  } text-lg font-medium inline-flex items-center gap-2 relative group`}
                onClick={() => setToggle(false)}
              >
                {link.title} {isExternal && <LuExternalLink />}
                <span
                  className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
