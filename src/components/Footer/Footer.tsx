import { RoutePath } from '@/routes';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row items-center justify-between md:space-y-0 mx-4 cardTheme rounded-lg px-10 py-10">
        <div className="flex flex-col">
          <div className="flex mb-6 gap-x-4 justify-center md:justify-start">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
              <img
                src="/assets/images/CompanyLogo.jpeg"
                alt="Bulkpe"
                className="w-6 h-6"
                defaultChecked
              />
            </div>
            <div className="text-2xl font-semibold">PayBolt</div>
          </div>
          <div className="flex flex-col items-center">
            <address className="not-italic mb-6 text-center md:text-start">
              PayBolt Technologies Private Limited <br /> 504, 1st floor, Sector
              3, HSR Layout, <br /> Bengaluru, Karnataka 560102.
            </address>
            <div className="flex space-x-4 mb-10 justify-center md:self-start">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaSquareXTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        {/* Middle Column */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-2">
          <Link to={RoutePath.HOME} className="mb-2 hover:text-gray-700">
            Home
          </Link>
          <Link
            to={RoutePath.SUB_PRODUCTS[0].path}
            className="mb-2 hover:text-gray-700"
          >
            Products
          </Link>
          <Link to={RoutePath.PRICING} className="mb-2 hover:text-gray-700">
            Pricing
          </Link>
          <Link to={RoutePath.CONTACT} className="mb-2 hover:text-gray-700">
            Contact Us
          </Link>
          <Link to="/t&c" className="mb-2 hover:text-gray-700">
            Terms of Service
          </Link>
          <Link to="/privacy" className="mb-2 hover:text-gray-700">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="text-center mt-6 mb-10">
        @ Copyright 2024 PayBolt Technologies Private Limited
      </div>
    </footer>
  );
};
export default Footer;
