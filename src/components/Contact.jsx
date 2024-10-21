"use client";

const Contact = () => {

  const formAction = (data) => {
    const formValue = Object.fromEntries(data);

    console.log(formValue, "Form Value", formValue.name);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black py-16 px-4 md:px-8 text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Contact Form */}
          <form
            className="w-full bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-md"
            action={formAction}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>

              {/* Optional Form Validation/Error Placeholder */}
              <p className="text-center text-red-500 font-semibold mt-4 hidden">
                Please fill in all fields correctly.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
