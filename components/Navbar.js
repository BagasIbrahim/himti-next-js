import Link from "next/link";
import { useEffect } from "react";
import header from "../public/images/logo_himti.jpeg";
import Image from "next/image";

export const Navbar = () => {
  const navbarOnScroll = () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("bg-secondary");
      navbar.classList.add("shadow-2xl");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-secondary");
      navbar.classList.remove("shadow-2xl");
      navbar.classList.add("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarOnScroll);
  }, []);

  return (
    <nav className="bg-transparent flex justify-center w-full fixed z-50 top-0">
      <div className="container justify-between flex h-20">
        <a href="index.html" className="flex items-center">
          {/* <h4 className="text-xl text-white font-bold">HIMTI</h4> */}
          <div className="order-first md:order-last py-10">
          <Image className="w-1/4	" src={header} alt="" />
        </div>
        </a>
        <ul className="flex items-center gap-16">
          <li>
            <Link
              className="text-base text-white hover:text-secondary transition-all delay-150 ease-linear"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-base text-white hover:text-secondary transition-all delay-150 ease-linear"
              href="/anggota"
            >
              Event
            </Link>
          </li>
          <li>
            <a
              className="text-base text-white hover:text-secondary transition-all delay-150 ease-linear"
              href="course.html"
            >
              Dr.IT
            </a>
          </li>
          <li>
            <a
              className="text-base text-white hover:text-secondary transition-all delay-150 ease-linear"
              href="contact.html"
            >
              News
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
