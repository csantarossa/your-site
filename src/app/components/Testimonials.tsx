import React from "react";

export const Testimonials = () => {
  const TESTIMONIALS = [
    {
      heading: "Up and Running in No Time",
      review:
        "My site was live within an hour. No confusing plugins or setup like WordPress. Just fast, simple, done. ✅",
      author: "Lisa M.",
    },
    {
      heading: "No Tech Headaches",
      review:
        "Way easier than hiring a developer. I just filled out a form and the site looked great instantly.",
      author: "Darren P.",
    },
    {
      heading: "Affordablility = A+",
      review:
        "Quotes from freelancers were over $1,000. UrSite did it for $500 and looks better than freelanced alternatives.",
      author: "Kylie J.",
    },
  ];

  return (
    <div
      id="testimonials"
      className="w-full h-screen flex flex-col justify-center items-center pt-40 pb-30 gap-15 px-32"
    >
      <h1 className="text-3xl font-bold">What Our Customers Say</h1>
      <div className="lg:max-w-[900px] h-full grid grid-cols-1 grid-rows-3 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 w-full h-full rounded-xl"></div>
        <div className="bg-gray-800 w-full h-full rounded-xl"></div>
        <div className="bg-gray-800 w-full h-full rounded-xl"></div>
        {TESTIMONIALS.map((review, index) => (
          <div
            key={index}
            className="w-full h-full rounded-xl flex flex-col p-5 border shadow justify-between bg-card"
          >
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg leading-tight">
                {review.heading}
              </h1>

              <p className="text-gray-700 text-sm">{review.review}</p>
            </div>

            <p className="text-sm w-full text-end">- {review.author}</p>
          </div>
        ))}
        <div className="bg-gray-800 w-full h-full rounded-xl"></div>
        <div className="bg-gray-800 w-full h-full rounded-xl"></div>
        <div className="bg-gray-800 w-full h-full rounded-xl"></div>
      </div>
    </div>
  );
};
