import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ari.
            <br className="hidden lg:inline-block" /> <br/>Seattle based Full Stack Engineer.
          </h1>
          <p className="mb-8 leading-relaxed">
            With a background in music and audio, my love for the evolution of technology is the driving force in everything I build. I strive for bridging the gap between complex applications and the end-user, seeking to turn their expectations into real-world, programmable interfaces. Specializing in full stack development with JavaScript, React, Rails, and SQL, my focus is an emphasis on intelligent component and database design. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full h-100 w-100 flex items-center justify-center..."
            alt="hero"
            src="./ari.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
