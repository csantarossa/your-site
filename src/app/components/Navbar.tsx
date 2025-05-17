import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const LINKS = [
    { title: "Our Services", href: "/#services" },
    { title: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <div className="flex gap-8">
      {LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex flex-col justify-center items-center group cursor-pointer hover:text-header-text"
        >
          <Button
            variant={"ghost"}
            className="cursor-pointer hover:text-header-text"
          >
            {link.title}
          </Button>
          <div className="w-[0%] group-hover:w-[80%] h-[1.5px] bg-primary opacity-40 duration-200"></div>
        </Link>
      ))}
      <Link href={"/contact"} className="cursor-pointer">
        {/* Make it "Book Now" if users add a booking link */}
        <Button className="cursor-pointer">Contact Us</Button>
      </Link>
    </div>
  );
};
