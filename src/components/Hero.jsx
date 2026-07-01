import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HERO_SLIDES, IMAGES } from "../data/content";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const slide = HERO_SLIDES[current];

  useEffect(() => {
    HERO_SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
      img.onload = () => setLoaded((prev) => ({ ...prev, [s.image]: true }));
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative w-full overflow-hidden bg-[#013220]">
      {/* Full-bleed carousel */}
      <div className="relative w-full min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px]">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={s.image}
              alt={s.highlight}
              onError={(e) => { e.currentTarget.src = IMAGES.heroFamily; }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Left-to-right gradient so text stays readable on full image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#013220]/95 via-[#013220]/75 to-[#013220]/15 md:via-[#013220]/65 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#013220]/60 via-transparent to-[#013220]/20" />
          </div>
        ))}

        {!loaded[slide.image] && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#013220]">
            <div className="w-12 h-12 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Content overlay — left aligned on full image */}
        <div className="relative z-20 h-full min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20">
            <div
              key={current}
              className="max-w-xl lg:max-w-2xl animate-[fadeIn_0.7s_ease-out]"
            >
              <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium tracking-wide">
                {slide.title}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mt-3 leading-[1.15] font-serif">
                {slide.highlight}
              </h1>
              <p className="text-white/85 mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link || "/contact#join"}
                className="mt-6 inline-flex items-center gap-2 text-[#D4AF37] italic font-semibold text-sm sm:text-base hover:text-[#e8c84a] transition group"
              >
                <span className="border-b border-[#D4AF37]/60 group-hover:border-[#e8c84a] pb-0.5">
                  {slide.cta}
                </span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel dots — centered */}
        <div className="absolute bottom-0 left-0 right-0 z-30 px-6 sm:px-10 pb-6 md:pb-8">
          <div className="flex items-center justify-center gap-2.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[#D4AF37]"
                    : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
