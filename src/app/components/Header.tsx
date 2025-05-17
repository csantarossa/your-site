"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [topOfWindow, setTopOfWindow] = useState(true); // assume top initially

  useEffect(() => {
    const handleScroll = () => {
      setTopOfWindow(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LOGO = false;
  const BRAND_NAME = "UrSite";

  return (
    <div className="w-full flex justify-center items-center h-fit z-50">
      <div
        className={`flex justify-between px-20 items-center fixed top-0 transition-all duration-300 ${
          !topOfWindow
            ? "rounded-2xl shadow w-[80%] opacity-95 bg-header-background text-header-text backdrop-blur-2xl h-20 mt-5 "
            : "h-32 w-full"
        }`}
      >
        {LOGO ? (
          <Link href={"/"}>
            <Image src={LOGO} alt="Logo" />
          </Link>
        ) : (
          <Link href={"/"}>
            <h1 className="font-semibold text-lg">{BRAND_NAME}</h1>
          </Link>
        )}
        <Navbar />
      </div>
    </div>
  );
};
