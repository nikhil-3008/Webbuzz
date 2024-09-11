import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-50 dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        {/* Background Image */}
        <img 
          src="imag.jpeg" 
          alt="Cricket Hero"
          className="w-full h-5/6 object-cover mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 flex justify-between items-center max-w-screen-xl mx-20 px-4 py-16 md:py-32">
        {/* Left Section */}
        <div className="max-w-lg text-left">
          <h1 className="text-2xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
            The One <br /> And Only
          </h1>
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-300">
            Be one of us
          </p>
          <a
            href="#"
            className="inline-block mt-6 text-lg font-semibold text-red-600 border-b-2 border-red-600 hover:text-red-800"
          >
            Join Us
          </a>
        </div>

        {/* Center Image Section */}
        <div className="flex justify-center items-center">
          <img 
            src="image.png" // Use the correct path for your uploaded image
            alt="Cricket Player"
            className="w-80 mx-auto" // Adjust size as needed
          />
        </div>

        {/* Right Section */}
        <div className="text-right">
          <h3 className="text-gray-900 dark:text-white font-bold text-lg">What we have</h3>
          <ul className="mt-8 space-y-4">
            <li className="text-gray-900 dark:text-white text-4xl font-bold">
              Cricket Cup
              <span className="text-red-600"> 3,</span>
            </li>
            <li className="text-gray-900 dark:text-white text-4xl font-bold">
              Leaderboard
              <span className="text-red-600"> 12,</span>
            </li>
            <li className="text-gray-900 dark:text-white text-4xl font-bold">
              Best Players
              <span className="text-red-600"> 5,</span>
            </li>
            <li className="text-gray-900 dark:text-white text-4xl font-bold">
              Fans
              <span className="text-red-600"> 30,000+,</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
