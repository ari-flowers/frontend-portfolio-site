import React from "react";
import githubIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedin.svg"
import emailIcon from "../assets/email.svg"

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Contact Me
        </h2>
      
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4">
          Have questions, freelance inquiries, or simply want to connect? Send me an email at ari.flowers.media@gmail.com or fill out the form below! I also encourage you to reach out on LinkedIn where you can find all of my latest activites.
        </p>
        <div className="flex justify-center items-center">
          <a href="https://github.com/ari-flowers" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Icon" className="w-12 h-12 mx-2" />
          </a>
          <a href="https://www.linkedin.com/in/ari-codes" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Icon" className="w-12 h-12 mx-2" />
          </a>
          <a href="mailto:ari.flowers.media@gmail.com">
            <img src={emailIcon} alt="Email Icon" className="w-12 h-12 mx-2" />
          </a>
        </div>

      </div>
      <div className="container px-5 mx-auto ">
        <form 
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
          <input type="hidden" name="redirect" value="/" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-lg text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-lg text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-lg text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
