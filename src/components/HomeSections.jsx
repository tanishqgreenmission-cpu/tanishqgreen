import { Link } from "react-router-dom";
import { IMAGES, PLEDGE_ITEMS } from "../data/content";

export function MissionBanner() {
  return (
    <section className="bg-[#013220] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/40 h-72 md:h-96">
          <img
            src={IMAGES.sapling}
            alt="Hand watering a sapling"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = IMAGES.heroFamily; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#013220]/60 to-transparent" />
        </div>

        <div>
          <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            #OneHouseOnePlant
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-serif leading-tight">
            Today We Plant,
            <br />
            <span className="text-[#D4AF37]">Tomorrow We Live.</span>
          </h2>
          <p className="mt-5 text-white/75 leading-7">
            Together let&apos;s make every house green. Every village green.
            Every future green. Small step today, big change tomorrow.
          </p>
          <Link
            to="/contact#join"
            className="inline-block mt-6 tgm-btn-gold px-8 py-3 font-semibold"
          >
            Take the Pledge
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="py-16 bg-[#f0f2f0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-[#013220] font-serif mb-2">
          The Choice Is Ours. The Future Is Ours.
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          See the difference trees make — from barren landscapes to thriving green communities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden border-2 border-gray-300 h-64 md:h-80">
            <img
              src="/images/hero1.jpg"
              alt="Without trees"
              className="w-full h-full object-cover grayscale brightness-75"
              onError={(e) => { e.currentTarget.src = IMAGES.heroFamily; }}
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <span className="text-white font-bold text-xl uppercase tracking-wider">
                Without Trees
              </span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border-2 border-[#D4AF37] h-64 md:h-80">
            <img
              src={IMAGES.forest}
              alt="With trees"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = IMAGES.heroCommunity; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#013220]/50 to-transparent flex items-end p-6">
              <span className="text-[#D4AF37] font-bold text-xl uppercase tracking-wider">
                With Trees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PledgeSection() {
  return (
    <section className="py-16 bg-[#013220]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-[#D4AF37] font-serif mb-2">
          Take the Pledge
        </h2>
        <p className="text-center text-white/70 mb-10">
          Be a part of Tanishq Green Mission
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {PLEDGE_ITEMS.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="tgm-card p-8 text-center hover:bg-[#0a4d2e] transition group"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-[#D4AF37] font-bold text-lg group-hover:text-[#e8c84a]">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm mt-3 leading-6">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PurposeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#013220] font-serif">
            Our Purpose
          </h2>
          <p className="mt-4 text-gray-600 leading-8">
            Discover and scale solutions to combat climate change and enhance
            human and planetary well-being — one sapling, one household, one
            village at a time.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: "🌳", label: "One House One Plant" },
              { icon: "🏫", label: "Green Campus" },
              { icon: "🏘️", label: "Green Village" },
              { icon: "🌿", label: "Better Future" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-[#f0f2f0]">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold text-[#013220]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/40 h-80">
          <img
            src={IMAGES.pledge}
            alt="Planting trees"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = IMAGES.heroPlanting; }}
          />
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="py-14 bg-gradient-to-r from-[#0a4d2e] to-[#013220] border-y border-[#D4AF37]/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <img src="/logo.svg" alt="TGM" className="h-14 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] font-serif">
          Let&apos;s Build a Greener Tomorrow
        </h2>
        <p className="mt-3 text-white/75 italic">
          Tanishq Green Mission — Creating Green Leaders for a Better Tomorrow.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/contact#join" className="tgm-btn-gold px-8 py-3 font-semibold">
            Join the Movement
          </Link>
          <Link to="/action-hub#sapling" className="px-8 py-3 font-semibold text-white border border-white/40 rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition">
            Claim Your Sapling
          </Link>
        </div>
      </div>
    </section>
  );
}
