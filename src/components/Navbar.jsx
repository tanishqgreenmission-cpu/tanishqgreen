import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { imageUrl } from "../lib/imageUrl";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/our-pillars", label: "Our Pillars" },
  { to: "/action-hub", label: "Action Hub" },
  { to: "/impact", label: "Our Impact" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#013220] sticky top-0 z-50 shadow-lg border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link to="/" className="shrink-0 flex items-center gap-3">
          <img
            src={imageUrl("logo.png")}
            alt="Tanishq Green Mission"
            className="h-11 w-auto"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = imageUrl("logo.svg"); }}
          />
        </Link>

        <ul className="hidden lg:flex gap-8 items-center">
          {NAV_LINKS.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-sm font-medium transition-colors pb-1 ${
                    active
                      ? "text-white border-b-2 border-[#D4AF37]"
                      : "text-white/85 hover:text-[#D4AF37]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/contact#join"
          className="hidden lg:inline-block tgm-btn-gold px-5 py-2 text-sm font-semibold"
        >
          Join the Movement
        </Link>

        <button
          type="button"
          className="lg:hidden text-[#D4AF37] text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a4d2e] px-4 pb-4">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block py-3 text-white border-b border-[#D4AF37]/20"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact#join"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center tgm-btn-gold px-5 py-2 text-sm font-semibold"
          >
            Join the Movement
          </Link>
        </div>
      )}
    </nav>
  );
}
