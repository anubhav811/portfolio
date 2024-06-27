'use client';
import React from 'react';

const ContactMe = () => {
  return (
    <section className="p-8">
      <h2 className="text-4xl font-bold text-center text-secondary-white mb-8 my-10">
        Contact Me
      </h2>
      <div className="max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-black text-white py-2 px-4 rounded-full font-bold shadow-md hover:bg-secondary-dark-blue focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
