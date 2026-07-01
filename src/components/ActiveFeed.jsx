import { useState } from "react";
import { FEED_ITEMS, IMAGES } from "../data/content";

const FILTERS = ["All", "Bengaluru Campus", "Chittoor District", "Announcements"];

export default function ActiveFeed() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? FEED_ITEMS
      : FEED_ITEMS.filter((item) => item.category === active);

  return (
    <section>
      <div className="flex flex-wrap gap-2 mb-5">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
              active === filter
                ? "bg-[#013220] text-white border border-[#D4AF37]"
                : "bg-[#013220]/80 text-white/80 border border-transparent hover:border-[#D4AF37]/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <article key={item.id} className="tgm-card-light overflow-hidden hover:shadow-md transition">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
              onError={(e) => { e.currentTarget.src = IMAGES.heroFamily; }}
            />
            <div className="p-4">
              <h3 className="text-[#013220] font-bold text-sm leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs mt-2">{item.time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
