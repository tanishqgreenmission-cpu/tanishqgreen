import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { CHAMPIONS, NOTIFICATIONS } from "../data/content";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const JULY_2026 = Array.from({ length: 31 }, (_, i) => i + 1);
const START_OFFSET = 3;

export default function EngagementHub() {
  return (
    <aside>
      <h2 className="text-[#013220] font-bold text-sm uppercase tracking-wider mb-4">
        Engagement Hub
      </h2>

      <div className="tgm-card p-4 mb-4">
        <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3">
          Resources & Downloads
        </h3>
        <Link
          to="/action-hub#magazine"
          className="flex items-center gap-3 text-white/90 text-sm hover:text-[#D4AF37] transition"
        >
          <FaFilePdf className="text-[#D4AF37]" size={18} />
          TGM Magazine (PDFs & Posters)
        </Link>
      </div>

      <div className="tgm-card p-4 mb-4">
        <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3">
          Event Calendar — July 2026
        </h3>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {DAYS.map((d, i) => (
            <span key={i} className="text-[#D4AF37]/70 font-semibold py-1">
              {d}
            </span>
          ))}
          {Array.from({ length: START_OFFSET }).map((_, i) => (
            <span key={`e-${i}`} />
          ))}
          {JULY_2026.map((day) => (
            <span
              key={day}
              className={`py-1 rounded-full ${
                day === 5
                  ? "bg-[#D4AF37] text-[#013220] font-bold"
                  : "text-white/80"
              }`}
            >
              {day}
            </span>
          ))}
        </div>
        <p className="text-white/60 text-xs mt-2 text-center">
          July 5 — One House One Plant Launch
        </p>
      </div>

      <div className="tgm-card p-4 mb-4">
        <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3">
          Hall of Fame — Green Champions
        </h3>
        <ul className="space-y-3">
          {CHAMPIONS.map((c) => (
            <li key={c.name} className="flex items-center gap-3">
              <img
                src={c.image}
                alt={c.name}
                className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]"
                onError={(e) => { e.currentTarget.src = "/images/champion1.jpg"; }}
              />
              <div>
                <p className="text-[#D4AF37] text-sm font-semibold leading-tight">
                  {c.name}
                </p>
                <p className="text-white/70 text-xs">{c.role}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/impact"
          className="block text-center text-[#D4AF37] text-xs mt-3 hover:underline"
        >
          View all champions →
        </Link>
      </div>

      <div className="tgm-card p-4 overflow-hidden h-28">
        <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
          Live Notifications
        </h3>
        <div className="overflow-hidden h-16">
          <div className="ticker-animate">
            {[...NOTIFICATIONS, ...NOTIFICATIONS].map((note, i) => (
              <p key={i} className="text-white/75 text-xs py-1.5 border-b border-[#D4AF37]/10">
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
