import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuickLinks from "../components/QuickLinks";
import ActiveFeed from "../components/ActiveFeed";
import EngagementHub from "../components/EngagementHub";
import Footer from "../components/Footer";
import {
  MissionBanner,
  BeforeAfterSection,
  PledgeSection,
  PurposeSection,
  CtaBanner,
} from "../components/HomeSections";
import { IMPACT_STATS } from "../data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="bg-[#f0f2f0] py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <QuickLinks />
            </div>
            <div className="lg:col-span-6">
              <ActiveFeed />
            </div>
            <div className="lg:col-span-3">
              <EngagementHub />
            </div>
          </div>
        </div>
      </section>

      <MissionBanner />
      <PurposeSection />
      <BeforeAfterSection />
      <PledgeSection />

      <section className="bg-[#013220] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-[#D4AF37] text-2xl font-bold font-serif mb-2">
            Our Impact So Far
          </h2>
          <p className="text-center text-white/60 text-sm mb-8">
            District Green Cover Goal — tracking progress across Bengaluru & Chittoor
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="text-center tgm-card p-6">
                <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">{stat.value}</p>
                <p className="text-white/70 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex justify-between text-white/70 text-xs mb-2">
              <span>District Green Cover Goal</span>
              <span className="text-[#D4AF37] font-semibold">68%</span>
            </div>
            <div className="h-3 bg-[#0a4d2e] rounded-full overflow-hidden border border-[#D4AF37]/30">
              <div className="h-full w-[68%] bg-gradient-to-r from-[#D4AF37] to-[#e8c84a] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
