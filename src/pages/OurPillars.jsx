import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { PILLARS_PAGE } from "../data/pagesContent";

function PageImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => { e.currentTarget.src = PILLARS_PAGE.header; }}
    />
  );
}

export default function OurPillars() {
  const { header, story, pillars, framework, timeline, values } = PILLARS_PAGE;

  return (
    <>
      <Navbar />
      <PageHeader
        title="Our Pillars"
        subtitle="The four foundations of Tanishq Green Mission — structured programmes that turn every household, campus, and village into a green leader."
        image={header}
      />

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <PageImage
            src={story.image}
            alt="Our story"
            className="rounded-2xl w-full h-96 object-cover border border-[#D4AF37]/40 shadow-lg"
          />
          <div>
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">Our Story</p>
            <h2 className="text-3xl font-bold text-[#013220] font-serif mt-2">{story.title}</h2>
            <p className="mt-5 text-gray-600 leading-8">{story.text}</p>
            <Link to="/contact#join" className="inline-block mt-6 tgm-btn-gold px-8 py-3 font-semibold">
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      {/* Four Pillars with images */}
      <section className="py-16 bg-[#f0f2f0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#013220] font-serif mb-3">
            The Four Pillars
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Each pillar is a standalone programme with dedicated teams, resources, and measurable outcomes.
          </p>

          <div className="space-y-10">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.id}
                id={pillar.id === "basket" ? "basket" : undefined}
                className={`grid md:grid-cols-2 gap-8 items-center tgm-card-light overflow-hidden scroll-mt-24 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <PageImage
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div className={`p-8 md:p-10 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                  <span className="text-4xl">{pillar.icon}</span>
                  <h3 className="text-2xl font-bold text-[#013220] mt-3">{pillar.title}</h3>
                  <p className="mt-4 text-gray-600 leading-7">{pillar.description}</p>
                  <ul className="mt-5 space-y-2">
                    {pillar.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-[#013220]">
                        <span className="text-[#D4AF37]">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4E Framework */}
      <section className="py-16 bg-[#013220]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#D4AF37] font-serif mb-3">
            The 4E Framework
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-xl mx-auto">
            Environment · Empowerment · Education · Employment — the principles behind every TGM programme.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {framework.map((item) => (
              <div key={item.title} className="tgm-card p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-2xl font-bold text-[#D4AF37]">
                  {item.letter}
                </div>
                <h3 className="text-[#D4AF37] font-bold mt-4">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#013220] font-serif mb-10">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-[#D4AF37] ml-4 space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-8">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-white" />
                <p className="text-[#D4AF37] font-bold text-lg">{item.year}</p>
                <p className="text-gray-600 mt-1 leading-7">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f0f2f0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#013220] font-serif mb-10">
            What Guides Us
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="tgm-card-light p-6 text-center hover:shadow-md transition">
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-3 font-bold text-[#013220]">{v.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
