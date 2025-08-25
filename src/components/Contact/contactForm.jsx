import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    if (!email || !email.includes("@")) {
      setValidation(true);
      return;
    } else {
      setValidation(false);
      setLoading(true);
      setStatus("Sending...");
      const response = await fetch("https://formspree.io/f/xkgzdznz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Oops! There was a problem sending your message.");
      }
      setTimeout(() => {
        setStatus("");
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 md:col-span-3">
      <div className="text-center">
        <input
          className="font-momo w-full max-w-md rounded-lg border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
      </div>

      <div className="text-center">
        <input
          className="font-momo w-full max-w-md rounded-lg border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="text"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        {validation && (
          <p className="mt-2 -mb-3 text-xs text-red-500">
            Please enter a valid email address.
          </p>
        )}
      </div>

      <div className="text-center">
        <textarea
          className="font-momo h-32 w-full max-w-md rounded-lg border border-blue-900 bg-white px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="message"
          id="message"
          placeholder="Your Message"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          disabled={loading}
          className={`w-full max-w-md rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 active:scale-95 ${loading ? "cursor-not-allowed bg-gray-400" : "bg-blue-900 hover:bg-blue-700 hover:shadow-lg"} `}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {status && (
        <div className="animate-fade fixed top-8 left-1/2 mt-3 -translate-x-1/2 rounded-lg px-4 py-2 text-white shadow-md outline-2 outline-blue-950">
          {status}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
