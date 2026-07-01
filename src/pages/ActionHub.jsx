import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { ACTION_PAGE } from "../data/pagesContent";

function PageImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => { e.currentTarget.src = ACTION_PAGE.header; }}
    />
  );
}

export default function ActionHub() {
  const { header, initiatives, species, events, steps, magazines } = ACTION_PAGE;

  return (
    <>
      <Navbar />
      <PageHeader
        title="Action Hub"
        subtitle="Your one-stop centre for sapling claims, plant care resources, cleanliness protocols, and upcoming field events."
        image={header}
      />

      {/* Initiatives */}
      <section className="py-16 bg-[#f0f2f0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#013220] font-serif mb-10 text-center">
            Community Utility Menu
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="tgm-card-light overflow-hidden hover:shadow-lg transition scroll-mt-24"
              >
                <PageImage src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-xl font-bold text-[#013220]">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600 leading-7">{item.description}</p>
                  <Link
                    to={item.link}
                    className="inline-block mt-4 text-[#D4AF37] font-semibold text-sm hover:underline"
                  >
                    {item.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Native Species */}
      <section id="species" className="py-16 bg-[#013220] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#D4AF37] font-serif text-center mb-3">
            Native Species Spotlight
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-xl mx-auto">
            Three fruit-bearing natives chosen for South Indian soils — high survival, community nutrition, and biodiversity value.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {species.map((sp) => (
              <div key={sp.name} className="tgm-card overflow-hidden">
                <PageImage src={sp.image} alt={sp.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-[#D4AF37] font-bold text-lg">{sp.name}</h3>
                  <p className="text-white/60 text-sm mt-2">{sp.season}</p>
                  <p className="text-white/80 text-sm mt-3 leading-6">{sp.care}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#013220] font-serif mb-10">
            How to Participate
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative tgm-card-light p-6 pt-10 text-center">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#013220] text-[#D4AF37] font-bold flex items-center justify-center text-sm border-2 border-[#D4AF37]">
                  {s.step}
                </span>
                <h3 className="font-bold text-[#013220]">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 bg-[#f0f2f0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#013220] font-serif mb-10 text-center">
            Upcoming Field Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((ev) => (
              <div key={ev.title} className="tgm-card-light overflow-hidden hover:shadow-lg transition">
                <PageImage src={ev.image} alt={ev.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <p className="text-[#D4AF37] text-sm font-semibold">{ev.date}</p>
                  <h3 className="font-bold text-[#013220] mt-1">{ev.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">📍 {ev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine */}
      <section id="magazine" className="py-16 bg-[#013220] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#D4AF37] font-serif mb-3">
            TGM Magazine — PDFs & Posters
          </h2>
          <p className="text-white/70 max-w-2xl mb-8">
            Download resources for your campus, village, or household. All materials are free for registered TGM members.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {magazines.map((doc) => (
              <div key={doc.title} className="tgm-card p-6 hover:bg-[#0a4d2e] transition">
                <span className="text-3xl">📄</span>
                <h3 className="text-[#D4AF37] font-semibold mt-3">{doc.title}</h3>
                <p className="text-white/60 text-sm mt-2 leading-6">{doc.desc}</p>
                <button type="button" className="mt-4 tgm-btn-gold px-4 py-2 text-xs font-semibold">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
