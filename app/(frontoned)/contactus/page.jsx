import ContactForm from "@/components/ContactUs/contactform";
import { MapPin, Phone, Mail } from "lucide-react";
;

export default function ContactUs() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-22">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-lg mb-8">
        {/* Call Us */}
        <div className="bg-[var(--primary)] text-white p-8 flex flex-col items-center justify-center text-center border-r border-[#0a5a8a]">
          <Phone className="mb-2" size={24} />
          <h3 className="text-lg font-medium mb-2">Call Us</h3>
          <p className="text-sm">998033730</p>
        </div>

        {/* Mail Us */}
        <div className="bg-[var(--primary)] text-white p-8 flex flex-col items-center justify-center text-center border-r border-[#0a5a8a]">
          <Mail className="mb-2" size={24} />
          <h3 className="text-lg font-medium mb-2">Mail Us</h3>
          <p className="text-sm break-all">alpha72wealth@outlook.com</p>
        </div>

        {/* Reach Us */}
        <div className="bg-[var(--primary)] text-white p-8 flex flex-col items-center justify-center text-center">
          <MapPin className="mb-2" size={24} />
          <h3 className="text-lg font-medium mb-2">Reach Us</h3>
          <p className="text-sm">
          NN 302, Shriram Spandhana, Near Embassy Golf Link Business Park, 
            <br />
            Challagatta, Domlur, 
            <br />
            Bangalore 560037, Karnataka
          </p>
        </div>
      </div>

      {/* Map and Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map */}
        <div className="w-full h-[500px] relative border border-gray-200 rounded">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.434440136037!2d77.6501201740501!3d12.944029115484236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1475b6555555%3A0xff4272e5bc0dfbe3!2sShriram%20Spandhana%20Apartments!5e0!3m2!1sen!2sin!4v1742558871182!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
