import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { IMPACT_PAGE } from "../data/pagesContent";

function PageImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => { e.currentTarget.src = IMPACT_PAGE.header; }}
    />
  );
}

export default function Impact() {
  const { header, stats, districts, champions, benefits, milestones } = IMPACT_PAGE;

  return (
    <>
      <Navbar />
      <PageHeader
        title="Our Impact"
        subtitle="See how far we've come — saplings planted, communities reached, and the Green Champions leading change across Bengaluru and Chittoor."
        image={header}
      />

      {/* Live Stats */}
      <section className="py-16 bg-[#013220]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-8">
            Live Impact Metrics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="tgm-card p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">{stat.value}</p>
                <p className="text-white font-medium text-sm mt-2">{stat.label}</p>
                <p className="text-white/50 text-xs mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex justify-between text-white/70 text-sm mb-2">
              <span>District Green Cover Goal</span>
              <span className="text-[#D4AF37] font-bold">68%</span>
            </div>
            <div className="h-4 bg-[#0a4d2e] rounded-full overflow-hidden border border-[#D4AF37]/30">
              <div className="h-full w-[68%] bg-gradient-to-r from-[#D4AF37] to-[#e8c84a] rounded-full transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* District Breakdown */}
      <section className="py-16 bg-[#f0f2f0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#013220] font-serif mb-10">
            Zone-wise Performance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {districts.map((d) => (
              <div key={d.name} className="tgm-card-light overflow-hidden">
                <PageImage src={d.image} alt={d.name} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#013220]">{d.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#f0f2f0] rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-[#D4AF37]">{d.saplings}</p>
                      <p className="text-xs text-gray-500 mt-1">Saplings</p>
                    </div>
                    <div className="bg-[#f0f2f0] rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-[#013220]">{d.campuses}</p>
                      <p className="text-xs text-gray-500 mt-1">Active Sites</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 border-l-4 border-[#D4AF37] pl-3">
                    🏆 {d.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Champions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#013220] font-serif mb-3">
            Hall of Fame — Green Champions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Individuals driving measurable change in their campuses, villages, and communities.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {champions.map((c) => (
              <div key={c.name} className="tgm-card-light p-6 text-center hover:shadow-lg transition">
                <PageImage
                  src={c.image}
                  alt={c.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[#D4AF37]"
                />
                <h3 className="mt-4 text-lg font-bold text-[#013220]">{c.name}</h3>
                <p className="text-[#D4AF37] text-sm font-medium">{c.role}</p>
                <p className="mt-3 text-gray-600 text-sm leading-6">{c.bio}</p>
                <p className="mt-3 text-xs font-semibold text-[#013220] bg-[#f0f2f0] rounded-full px-3 py-1 inline-block">
                  🌳 {c.planted}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 bg-[#f0f2f0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#013220] font-serif mb-10">
            Environmental Outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="tgm-card-light overflow-hidden">
                <PageImage src={b.image} alt={b.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="font-bold text-[#013220] mt-2">{b.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-7">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-[#013220]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#D4AF37] font-serif mb-10">
            2026 Milestones
          </h2>
          <div className="space-y-4">
            {milestones.map((m) => (
              <div key={m.month} className="flex gap-4 items-start tgm-card p-5">
                <span className="text-[#D4AF37] font-bold text-sm shrink-0 w-20">{m.month}</span>
                <p className="text-white/80 text-sm leading-6">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <h2 className="text-2xl font-bold text-[#013220] font-serif">
          Want to see your name on this dashboard?
        </h2>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          Register as a Green Champion and start logging your plantation impact today.
        </p>
        <Link to="/contact#join" className="inline-block mt-6 tgm-btn-gold px-10 py-3 font-semibold">
          Become a Champion
        </Link>
      </section>

      <Footer />
    </>
  );
}
