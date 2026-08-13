import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTwitch,
} from "react-icons/fa6";

import { FaChartBar } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Left */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <FaChartBar className="text-2xl text-slate-900" />
              <h2 className="text-3xl font-semibold text-slate-900">
                Rank Pilot
              </h2>
            </div>

            <p className="mt-6 text-gray-500 leading-8 max-w-sm">
              Optimize your website for search engines with AI-powered
              insights and real-time tracking.
            </p>

            <div className="flex items-center gap-5 mt-8">

              <FaXTwitter className="text-2xl text-gray-600 hover:text-black cursor-pointer transition" />

              <FaInstagram className="text-2xl text-gray-600 hover:text-pink-500 cursor-pointer transition" />

              <FaFacebook className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer transition" />

              <FaTwitch className="text-2xl text-gray-600 hover:text-purple-600 cursor-pointer transition" />

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-xl text-slate-900 mb-6">
              Product
            </h3>

            <ul className="space-y-4 text-gray-500">

              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Browser Extension</a></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-xl text-slate-900 mb-6">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-500">

              <li><a href="#">Documentation</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">SEO Guide</a></li>
              <li><a href="#">Support</a></li>

            </ul>

          </div>

          {/* Company + Legal */}

          <div className="space-y-10">

            <div>

              <h3 className="font-semibold text-xl text-slate-900 mb-6">
                Company
              </h3>

              <ul className="space-y-4 text-gray-500">

                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Press</a></li>

              </ul>

            </div>

            <div>

              <h3 className="font-semibold text-xl text-slate-900 mb-6">
                Legal
              </h3>

              <ul className="space-y-4 text-gray-500">

                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>

              </ul>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 RankPilot. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Status:
            <span className="text-green-600 font-medium ml-1">
              All Systems Operational
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;