import { Link } from "react-router-dom";
import { imageUrl } from "../lib/imageUrl";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#013220] text-white pt-12 pb-6 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img
              src={imageUrl("logo.svg")}
              alt="Tanishq Green Mission"
              className="h-12 w-auto"
            />
            <p className="mt-4 text-white/70 text-sm leading-7">
              Tanishq Green Mission — planting trees, empowering communities,
              and building a greener India through the One House One Plant movement.
            </p>
            <p className="mt-3 text-[#D4AF37]/80 text-xs italic">
              @TanishQGreenMission
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/our-pillars" className="hover:text-[#D4AF37]">Our Pillars</Link></li>
              <li><Link to="/action-hub" className="hover:text-[#D4AF37]">Action Hub</Link></li>
              <li><Link to="/impact" className="hover:text-[#D4AF37]">Our Impact</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/contact#join" className="hover:text-[#D4AF37]">Volunteer</Link></li>
              <li><Link to="/action-hub#sapling" className="hover:text-[#D4AF37]">Claim Sapling</Link></li>
              <li><Link to="/contact#donate" className="hover:text-[#D4AF37]">Donate</Link></li>
              <li><Link to="/our-pillars#basket" className="hover:text-[#D4AF37]">Mana Inti Basket</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-white/70">
              <p>📧 Tanishqgreenmission@gmail.com</p>
              <p>📞 +91 7483703173</p>
              <p>📍 Andhra Pradesh & Karnataka, India</p>
            </div>

            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/tanishqgreenmission" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@TanishQGreenMission" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 mt-10 pt-6 text-center text-white/50 text-sm">
          <p>One House One Plant | Green Campus | Green Village | Better Future</p>
          <p className="mt-2">
            © 2026 <span className="font-semibold text-white/70">Tanishq Green Mission</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
