import { Link } from "react-router-dom";
import {
  FaSeedling,
  FaHandsHelping,
  FaShoppingBasket,
  FaBook,
  FaBroom,
  FaMapMarkedAlt,
  FaHeadset,
} from "react-icons/fa";

const UTILITY_LINKS = [
  { icon: FaSeedling, label: "Claim Your Sapling", to: "/action-hub#sapling" },
  { icon: FaHandsHelping, label: "Register as a Volunteer", to: "/contact#join" },
  { icon: FaShoppingBasket, label: "Mana Inti Basket Subscription", to: "/our-pillars#basket" },
];

const RESOURCE_LINKS = [
  { icon: FaBook, label: "Plant Care Guide (Lemon, Guava, Amla)", to: "/action-hub#guides" },
  { icon: FaBroom, label: "Village Cleanliness Protocols", to: "/action-hub#cleanliness" },
  { icon: FaMapMarkedAlt, label: "Broom Map & Cleanliness Zones", to: "/action-hub#map" },
  { icon: FaHeadset, label: "Mission Helpdesk", to: "/contact" },
];

function LinkGroup({ title, links }) {
  return (
    <div className="tgm-card p-4 mb-4">
      <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map(({ icon: Icon, label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="flex items-center gap-3 text-white/90 text-sm hover:text-[#D4AF37] transition"
            >
              <Icon className="text-[#D4AF37] shrink-0" size={16} />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function QuickLinks() {
  return (
    <aside>
      <h2 className="text-[#013220] font-bold text-sm uppercase tracking-wider mb-4">
        Quick Links
      </h2>
      <LinkGroup title="Community Utility Menu" links={UTILITY_LINKS} />
      <LinkGroup title="Resources" links={RESOURCE_LINKS} />
    </aside>
  );
}
