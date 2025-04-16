"use client";

import { useState } from "react";


export default function ContactForm() {
  const [captcha, setCaptcha] = useState("a3Qw90");
  const [formStatus, setFormStatus] = useState({});

  const refreshCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomString);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // const result = await submitContactForm(formData);
    // setFormStatus(result);

    if (result.success) {
      event.currentTarget.reset();
      refreshCaptcha();
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {formStatus.message && (
        <div className={`p-3 rounded ${formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {formStatus.message}
        </div>
      )}

      <div>
        <input name="name" type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div>
        <input name="mobile" type="tel" placeholder="Mobile" className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div>
        <input name="email" type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      {/* <div>
        <select name="service" className="w-full p-2 border border-gray-300 rounded" required>
          <option value="">Select Service</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
        </select>
      </div> */}
      <div>
        <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-300 rounded h-32" required></textarea>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#f8d7c3] text-[#a30a00] px-2 py-1 rounded">{captcha}</div>
        <input name="captcha" type="text" placeholder="Enter Captcha" className="flex-1 p-2 border border-gray-300 rounded" required />
        <button type="button" className="bg-gray-800 text-white px-3 py-2 rounded text-sm" onClick={refreshCaptcha}>
          Refresh
        </button>
      </div>
      <div>
        <button type="submit" className="bg-[#0a6396] text-white px-8 py-2 rounded hover:bg-[#085380] transition-colors">
          Submit
        </button>
      </div>
    </form>
  );
}
