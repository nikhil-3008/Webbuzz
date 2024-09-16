import React, { useState } from "react";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/path-to-image1.jpg", alt: "Player 1" },
    { src: "/path-to-image2.jpg", alt: "Player 2" },
    { src: "/path-to-image3.jpg", alt: "Player 3" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center py-16 px-8 bg-gray-100">
      {/* Card Wrapper */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-3/4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">We Help You Grow As A Team</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {/* Horizontally aligned buttons */}
              <button className="bg-gray-800 text-white px-6 py-2 rounded transition hover:bg-gray-700">
                Start Grow
              </button>
              <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded transition hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="lg:w-1/3 relative">
            <h3 className="text-2xl font-semibold mb-4 text-center">Meet Our Pro Team</h3>
            <p className="text-gray-600 mb-6 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Image Carousel */}
            <div className="relative w-full">
              <img
                className="w-full h-auto rounded-lg"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
              />

              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 p-2 rounded-full hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1 0 .708l4.5 4.5a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 p-2 rounded-full hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.646 14.854a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 0-.708l-5-5a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
