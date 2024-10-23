"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import React, { useRef } from "react";

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const formRef = useRef(null); // Create a ref for view tracking
  const isInView = useInView(formRef, { once: true }); // Trigger animation only once

  const formAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.message) {
      setError("Message is required.");
      return;
    }

    console.log(formData, "Form Value");

    // Simulate a successful submission
    setSubmissionStatus("success");
    setError("");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative bg-black py-16 px-4 md:px-8 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-gray-900 to-black opacity-80"></div>

        {/* Glowing circles */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-blue-600 opacity-30 blur-xl sm:blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-pink-500 opacity-30 blur-xl sm:blur-2xl"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="w-2 h-2 bg-white opacity-20 rounded-full absolute animate-pulse"
            style={{ bottom: "15%", left: "15%" }}
          ></div>
          <div
            className="w-3 h-3 bg-white opacity-10 rounded-full absolute animate-ping"
            style={{ bottom: "25%", left: "35%" }}
          ></div>
          <div
            className="w-1 h-1 bg-white opacity-25 rounded-full absolute animate-pulse"
            style={{ bottom: "10%", left: "70%" }}
          ></div>
          <div
            className="w-2 h-2 bg-white opacity-10 rounded-full absolute animate-ping"
            style={{ bottom: "30%", right: "20%" }}
          ></div>
        </div>
      </div>

      {/* Content Overlay */}
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Contact Form */}
          <form
            className="w-full bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-md"
            onSubmit={formAction}
          >
            <div className="space-y-6">
              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="name"
                >
                  Name <span className="text-gray-500 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="email"
                >
                  Email{" "}
                  <span className="text-gray-500 text-sm">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-lg font-semibold mb-2"
                  htmlFor="message"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-blue-500"
              >
                Send Message
              </button>

              {error && (
                <p className="text-center text-red-500 font-semibold mt-4">
                  {error}
                </p>
              )}

              {submissionStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-green-500 font-semibold mt-4"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
