import Link from "next/link";
import React from "react";

export const Footer = () => {
  const footerContent = {
    logo: "LogoHere",
    services: ["Service 1", "Service 2", "Service 3"],
    contact: {
      contactPage: "/contact",
      phone: "Phone Number",
      email: "example@gmail.com",
      location: "Your location",
    },
    business: "",
    abn: "",
  };

  return (
    <div className="w-full h-fit p-10 flex flex-col gap-2 justify-center items-center">
      <h1 className="text-lg font-semibold">{footerContent.logo}</h1>
      <div className="grid grid-cols-2 text-center gap-3 justify-center items-center">
        <div className="flex flex-col justify-start">
          <Link href={"/#services"} className="font-medium">
            Our Services
          </Link>
          {footerContent.services.map((service, index) => (
            <Link key={index} href={"/#services"}>
              {service}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start">
          <Link href={"/contact"} className="font-medium">
            Contact Us
          </Link>
          <p>{footerContent.contact.email}</p>
          <p>{footerContent.contact.phone}</p>
          <p>{footerContent.contact.location}</p>
        </div>
      </div>
    </div>
  );
};
