import { Star } from "lucide-react";
import React from "react";

const Services = () => {
  const SERVICES = [
    {
      icon: <Star />,
      heading: "Websites",
      description:
        "Launch-ready website with all the essentials—no coding, no hassle.",
      price: 500,
      image: "https://via.placeholder.com/300x200?text=Boilerplate+Website",
    },
    {
      heading: "SEO",
      description:
        "We’ll match your site’s colors and fonts to your existing brand.",
      price: 49,
    },
    {
      heading: "Maintenance",
      description:
        "Struggling with words? We'll help write your homepage content.",
      price: 39,
      image: "https://via.placeholder.com/300x200?text=Copywriting+Help",
    },
    {
      heading: "Domain & Hosting Setup",
      description:
        "We’ll connect your domain and handle hosting so you're live fast.",
      price: 59,
      image: "https://via.placeholder.com/300x200?text=Domain+%26+Hosting",
    },
  ];

  return (
    <div
      id="services"
      className="h-fit w-full flex flex-col justify-start py-40 items-center gap-15"
    >
      <h1 className="font-bold text-3xl">Our Services</h1>
      <div className="w-fit grid grid-cols-1 lg:grid-cols-2 autofill justify-between items-center gap-10">
        {SERVICES.map((service, index) =>
          service.image ? (
            <div
              key={index}
              className="grid grid-cols-2 grid-rows-1 w-[500px] h-52 justify-between items-center gap-10"
            >
              <div className="h-full w-full">
                <div className="flex flex-col bg-card justify-between p-5 border rounded-xl shadow h-full items-center">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold">{service.heading}</h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                  <p className="font-semibold text-xl">
                    ${service.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="h-full w-full bg-black rounded-xl"></div>
            </div>
          ) : (
            <div
              key={index}
              className="grid grid-cols-1 grid-rows-1 w-[500px] h-52 justify-between items-center gap-10 "
            >
              <div className="h-full w-full">
                <div className="flex flex-col justify-between p-5 border rounded-xl shadow h-full items-center bg-card">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold">{service.heading}</h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                  <p className="font-semibold text-xl">
                    ${service.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
