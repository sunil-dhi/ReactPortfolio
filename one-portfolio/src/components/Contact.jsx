import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 p-4 wi-full h-screen"
    >
      <div className="flex flex-col text-white max-w-screen-lg justify-center mx-auto p-4 h-full ">
        <div className="pb-8">
          <p className="text-4xl border-b-4 border-gray-500 inline font-bold">
            Contact
          </p>
          <p className="py-8">Submit the form below to get in touch</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/7870f71e-6fd1-4b20-a952-1d6a00d4bc53" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-transparent border-2 text-white rounded-md p-2 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent border-2 text-white my-4 rounded-md p-2 focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Type your message"
              className="bg-transparent border-2 text-white rounded-md p-2 focus:outline-none"
            ></textarea>
            <button className="px-6 py-3 bg-gradient-to-b from-cyan-500 to-blue-500 text-white flex items-center rounded-md hover:scale-105 my-8 mx-auto duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
