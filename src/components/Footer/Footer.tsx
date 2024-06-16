import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
              <img src="" alt="Bulkpe" className="w-6 h-6" />
            </div>
            <span className="text-2xl font-semibold">Bulkpe</span>
          </div>
          <address className="text-center not-italic mb-4">
            PayBolt Technologies Private Limited
            <br />
            Corporation Gymnastics Training Centre,
            <br />
            No.3, 89th Street, Ashok Nagar, Chennai,
            <br />
            Tamil Nadu, India - 600083
          </address>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <FaSquareXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center">
          <a href="/" className="mb-2 hover:text-gray-700">
            Home
          </a>
          <a href="/products" className="mb-2 hover:text-gray-700">
            Products
          </a>
          <a href="/pricing" className="mb-2 hover:text-gray-700">
            Pricing
          </a>
          <a href="/contact" className="mb-2 hover:text-gray-700">
            Contact Us
          </a>
        </div>

        <div className="flex flex-col ">
          <a href="/terms-of-service" className="mb-2 hover:text-gray-700">
            Terms of Service
          </a>
          <a href="/privacy-policy" className="mb-2 hover:text-gray-700">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="text-center mt-6">
        Copyright 2024 Company Name
      </div>
    </footer>
  );
};

export default Footer;
