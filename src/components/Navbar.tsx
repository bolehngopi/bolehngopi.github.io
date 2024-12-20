"use client";

import { navLinks } from "@/data";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

// Debounce function for performance optimization
const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("hero");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(
    debounce(() => {
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
    }, 100),
    [active, scrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle scroll lock when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  const memoizedNavLinks = useMemo(
    () =>
      navLinks.map((link) => {
        const isExternal = link.link && !link.id;

        return (
          <a
            key={link.title}
            href={isExternal ? link.link : `#${link.id}`} // Corrected template literal
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`${
              active === link.id
                ? "text-white"
                : "text-slate-500 hover:text-white/50"
            } text-sm font-medium ml-6 transition-colors duration-300 inline-flex items-center gap-1 relative group`}
            aria-current={active === link.id ? "page" : undefined}
          >
            {link.title} {isExternal && <LuExternalLink />}
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        );
      }),
    [active]
  );

  const handleOutsideClick = (e: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    if (toggle) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [toggle]);

  return (
    <nav
      ref={navbarRef}
      className={`w-full fixed z-40 p-4 px-6 transition-all duration-300 ${
        scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
      } pointer-events-auto`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <h1 className="text-white text-lg sm:text-xl font-bold ml-2 sm:ml-3">
            Aziz Khasyi
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex">{memoizedNavLinks}</div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white focus:outline-none ml-auto"
          onClick={() => setToggle((prev) => !prev)}
          aria-expanded={toggle ? "true" : "false"} // Corrected to return strings
          aria-label="Toggle navigation"
        >
          {toggle ? (
            <FaTimes className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <FaBars className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {toggle && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setToggle(false)}
          aria-hidden={!toggle}
        />
      )}

      {/* Mobile Navigation Links */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-black text-white p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!toggle}
      >
        <div className="flex flex-col items-center gap-4 mt-6">
          {navLinks.map((link) => {
            const isExternal = link.link && !link.id;

            return (
              <a
                key={link.title}
                href={isExternal ? link.link : `#${link.id}`} // Corrected template literal
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`${
                  active === link.id ? "text-white" : "text-slate-500"
                } text-lg font-medium inline-flex items-center gap-2 relative group`}
                onClick={() => setToggle(false)}
              >
                {link.title} {isExternal && <LuExternalLink />}
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
