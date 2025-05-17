import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const HERO_CONTENT = {
    heading: "Make a Statement.",
    subheading:
      "UrSite gives small businesses a ready-made site. Easier than WordPress, cheaper than agencies.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8579780918476!2d144.9953576372284!3d-37.84021057195063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642831870aba5%3A0x501f26fcaf8ec0bb!2s50-Toorak%20Rd%2FChapel%20St!5e0!3m2!1sen!2sau!4v1747464087819!5m2!1sen!2sau",
    image: true,
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex gap-16 justify-center items-center flex-wrap">
        <div className="max-w-96 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">{HERO_CONTENT.heading}</h1>
          <p className="text-gray-500">{HERO_CONTENT.subheading}</p>
          <div className="flex gap-2 pt-6">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
            <Link href="#services">
              <Button variant={"outline"}>Our Services</Button>
            </Link>
          </div>
        </div>
        {HERO_CONTENT.image || HERO_CONTENT.location ? (
          <div className="w-96 h-96 bg-gray-800 rounded-3xl">
            {HERO_CONTENT.location ||
            (HERO_CONTENT.location && HERO_CONTENT.image) ? (
              <iframe
                src={HERO_CONTENT.location}
                className="w-full h-full rounded-xl"
                loading="lazy"
              ></iframe>
            ) : (
              <div>IMAGE</div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
