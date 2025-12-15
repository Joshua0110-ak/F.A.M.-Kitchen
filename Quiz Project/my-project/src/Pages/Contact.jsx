import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-6 text-center max-w-lg">
        Have questions or want to book a table? Reach out to us using the form below.
      </p>

      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c8a97e]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c8a97e]"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c8a97e]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#c8a97e] to-[#b8976e] py-2 rounded-full text-white font-semibold hover:shadow-xl transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
