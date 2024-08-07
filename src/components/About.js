import React from "react";
import { FaUsers, FaStar, FaMapMarkedAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to Swiggy, your go-to platform for convenient and quick food
            delivery. Our mission is to connect you with the best restaurants
            and deliver delicious meals right to your doorstep.
          </p>
        </section>

        <section className="flex flex-col md:flex-row justify-around mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <FaUsers className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
            <p className="text-gray-600">
              Our dedicated team of professionals works around the clock to
              ensure you receive the best service and quality. From our drivers
              to our support team, we are here to make your experience
              exceptional.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <FaStar className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Quality</h2>
            <p className="text-gray-600">
              We partner with top-rated restaurants to bring you a diverse range
              of cuisines. Our quality standards ensure that every meal you
              order is fresh, delicious, and up to your expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <FaMapMarkedAlt className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Reach</h2>
            <p className="text-gray-600">
              With coverage across multiple cities, our network of delivery
              partners ensures that you can enjoy your favorite meals no matter
              where you are. We are expanding constantly to serve you better.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At Swiggy, we are committed to improving your dining experience.
            Whether you're a customer or a restaurant partner, join us and be
            part of a community that loves great food.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
