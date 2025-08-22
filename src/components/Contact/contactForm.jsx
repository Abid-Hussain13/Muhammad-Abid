import React from "react";

function contactForm() {
  return (
    <form action="#" className="col-span-3 w-full space-y-6">
      <div>
        <input
          className="font-momo w-full max-w-md rounded-lg border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
      </div>

      <div>
        <input
          className="font-momo w-full max-w-md rounded-lg border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
      </div>

      <div>
        <textarea
          className="font-momo h-32 w-full max-w-md rounded-lg border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="message"
          id="message"
          placeholder="Your Message"
        ></textarea>
      </div>

      <div>
        <button className="w-full max-w-md rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default contactForm;
