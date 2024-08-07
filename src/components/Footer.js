const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h5 className="font-bold mb-3">About Us</h5>
              <p className="text-sm">
                The Flavours is the best way to get food delivered to your doorstep.
                We offer a wide variety of cuisines from top-rated restaurants.
              </p>
            </div>
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h5 className="font-bold mb-3">Quick Links</h5>
              <ul className="text-sm">
                <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Cart</a></li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <h5 className="font-bold mb-3">Contact Us</h5>
              <p className="text-sm">Email: <a href="mailto:support@theflavours.com" className="hover:underline">support@theflavours.com</a></p>
              <p className="text-sm">Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm">&copy; 2024 Flavours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  