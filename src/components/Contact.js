import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We're here to help! Reach out to us through any of the following methods:
          </p>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Contact Details */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-2xl text-yellow-500 mr-3" />
                <p className="text-gray-700">+123 456 7890</p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl text-yellow-500 mr-3" />
                <p className="text-gray-700">support@theflavours.com</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-yellow-500 mr-3" />
                <p className="text-gray-700">123 Food Street, Nawabganj, Kanpur</p>
              </div>
            </div>
          </div>
    
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
