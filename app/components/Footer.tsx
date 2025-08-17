import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-200 py-16 px-5 md:px-20 mt-auto">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/footer.jpg" // Replace with your architectural/real estate background image
          alt="BIOBUILD Footer Background"
          height={500}
          width={500}
          className="h-full w-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800 opacity-90"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* Company Info */}
        <div className="space-y-4">
          <Image
            className="h-auto w-48 pb-3"
            src="/img/logo.png" // Use a white version of your logo
            alt="BIOBUILD Development Ltd. Logo"
            height={150}
            width={150}
          />
          <p className="text-gray-300 text-lg leading-relaxed">
            Pioneering sustainable and innovative real estate development in Bangladesh. We build communities, not just structures.
          </p>
          {/* <div className="pt-4">
            <h3 className="text-gray-100 text-lg font-medium mb-3">Subscribe to Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r transition-colors">
                Join
              </button>
            </div>
          </div> */}
        </div>

        {/* Services */}
        <div>
          <h3 className="text-gray-100 text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Our Projects</h3>
          <ul className="space-y-3">
            {[
              { href: "/residential", label: "Residential Communities" },
              { href: "/commercial", label: "Commercial Complexes" },
              { href: "/mixed-use", label: "Mixed-Use Developments" },
              { href: "/sustainable", label: "Sustainable Buildings" },
              { href: "/ongoing", label: "Ongoing Projects" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className="text-gray-300 hover:text-[#7AA859] transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#7AA859] rounded-full mr-3"></span>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-100 text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { href: "/about", label: "About Us" },
              { href: "/projects", label: "Our Portfolio" },
              { href: "/investors", label: "Investor Relations" },
              { href: "/contact", label: "Contact Us" },
              { href: "/careers", label: "Careers" },
              { href: "/blog", label: "Blog & News" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className="text-gray-300 hover:text-[#7AA859] transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#7AA859] rounded-full mr-3"></span>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-gray-100 text-xl font-semibold mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-800 rounded-full">
                <FaMapMarkerAlt className="text-[#7AA859]" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                House: 05, Road 20, Sector 13, Uttara, Dhaka-1230, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-800 rounded-full">
                <FaPhoneAlt className="text-[#7AA859]" />
              </div>
              <p className="text-gray-300 text-lg">+880 1751511212</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-800 rounded-full">
                <FaEnvelope className="text-[#7AA859]" />
              </div>
              <p className="text-gray-300 text-lg">info@biobuildbd.com</p>
            </div>

            <div className="pt-4">
              <h3 className="text-gray-100 text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { icon: <FaFacebookF size={18} />, href: "https://facebook.com/biobuild" },
                  { icon: <FaTwitter size={18} />, href: "https://twitter.com/biobuild" },
                  { icon: <FaInstagram size={18} />, href: "https://instagram.com/biobuild" },
                  { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com/company/biobuild" },
                ].map((social, index) => (
                  <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                    <span className="bg-gray-800 hover:bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} BIOBUILD Development Ltd. All rights reserved. |
          <Link href="/privacy" className="hover:text-[#7AA859] ml-2 transition-colors">Privacy Policy</Link> |
          <Link href="/terms" className="hover:text-[#7AA859] ml-2 transition-colors">Terms of Service</Link>
        </p>
        <p className="mt-2 text-gray-400 text-xs">Building the future, sustainably.</p>
      </div>
    </footer>
  );
};

export default Footer;