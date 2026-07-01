import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CONTACT_PAGE } from "../data/pagesContent";
import { submitToGoogleSheet } from "../lib/googleSheets";

const DONATE_TIERS = [
  { amount: "500", label: "₹500", trees: "2" },
  { amount: "1000", label: "₹1,000", trees: "5" },
  { amount: "5000", label: "₹5,000", trees: "25+" },
];

const EMPTY_REGISTER = {
  name: "",
  email: "",
  phone: "",
  city: "",
  category: "",
  message: "",
};

const EMPTY_DONATE = {
  name: "",
  email: "",
  phone: "",
  customAmount: "",
};

function StatusBanner({ type, message }) {
  if (!message) return null;
  const isSuccess = type === "success";
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
        isSuccess
          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
          : "bg-red-50 text-red-800 border border-red-200"
      }`}
    >
      {isSuccess ? <FaCheckCircle className="shrink-0 mt-0.5" /> : <FaExclamationCircle className="shrink-0 mt-0.5" />}
      <span>{message}</span>
    </div>
  );
}

export default function Contact() {
  const [activeForm, setActiveForm] = useState("register");
  const [selectedAmount, setSelectedAmount] = useState("1000");
  const [showCustom, setShowCustom] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [registerForm, setRegisterForm] = useState(EMPTY_REGISTER);
  const [donateForm, setDonateForm] = useState(EMPTY_DONATE);
  const [registerStatus, setRegisterStatus] = useState({ loading: false, message: "", type: "" });
  const [donateStatus, setDonateStatus] = useState({ loading: false, message: "", type: "" });

  const { channels, faqs, offices, social } = CONTACT_PAGE;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "donate" || hash === "join" || hash === "register") {
      setActiveForm(hash === "donate" ? "donate" : "register");
    }
  }, []);

  const switchForm = (form) => {
    setActiveForm(form);
    window.history.replaceState(null, "", `#${form === "donate" ? "donate" : "register"}`);
  };

  const handleRegisterChange = (e) => {
    setRegisterForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDonateChange = (e) => {
    setDonateForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegisterStatus({ loading: true, message: "", type: "" });

    if (!registerForm.name || !registerForm.email || !registerForm.phone) {
      setRegisterStatus({ loading: false, message: "Please fill in name, email, and phone.", type: "error" });
      return;
    }

    try {
      await submitToGoogleSheet({
        type: "register",
        ...registerForm,
      });
      setRegisterStatus({
        loading: false,
        message: "Registration saved successfully! Our team will contact you soon.",
        type: "success",
      });
      setRegisterForm(EMPTY_REGISTER);
    } catch (err) {
      setRegisterStatus({
        loading: false,
        message: err.message || "Could not save registration.",
        type: "error",
      });
    }
  };

  const handleDonateSubmit = async (e) => {
    e.preventDefault();
    setDonateStatus({ loading: true, message: "", type: "" });

    const amount = showCustom ? donateForm.customAmount : selectedAmount;
    if (!donateForm.name || !donateForm.email || !amount) {
      setDonateStatus({ loading: false, message: "Please fill all fields and select an amount.", type: "error" });
      return;
    }

    try {
      await submitToGoogleSheet({
        type: "donate",
        name: donateForm.name,
        email: donateForm.email,
        phone: donateForm.phone,
        amount: `₹${amount}`,
        category: "Donation",
        city: "",
        message: "",
      });
      setDonateStatus({
        loading: false,
        message: "Thank you! Your donation request is recorded. We will share payment details shortly.",
        type: "success",
      });
      setDonateForm(EMPTY_DONATE);
    } catch (err) {
      setDonateStatus({
        loading: false,
        message: err.message || "Could not save donation request.",
        type: "error",
      });
    }
  };

  const inputLight =
    "w-full px-4 py-3.5 rounded-xl border border-[#013220]/15 bg-white text-[#013220] placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm";

  const inputDark =
    "w-full px-4 py-3.5 rounded-xl border border-[#D4AF37]/25 bg-[#0a4d2e]/50 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm";

  return (
    <>
      <Navbar />

      {/* Warm cream hero — different from rest of site */}
      <section className="bg-[#F7F3E9] border-b border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="text-[#8B7355] text-xs font-bold uppercase tracking-[0.25em] mb-4">Get Involved</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#013220] font-serif">
            Register or Donate
          </h1>
          <p className="mt-4 text-[#5C5346] max-w-xl mx-auto leading-relaxed">
            Join the One House One Plant movement or support saplings across Bengaluru and Chittoor.
          </p>

          <div className="mt-10 inline-flex p-1.5 bg-white rounded-2xl shadow-md border border-[#D4AF37]/20">
            <button
              type="button"
              onClick={() => switchForm("register")}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeForm === "register"
                  ? "bg-[#013220] text-[#D4AF37] shadow"
                  : "text-[#5C5346] hover:text-[#013220]"
              }`}
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => switchForm("donate")}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeForm === "donate"
                  ? "bg-[#D4AF37] text-[#013220] shadow"
                  : "text-[#5C5346] hover:text-[#013220]"
              }`}
            >
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* Form area */}
      <section className="py-16 bg-[#EDE8DC]">
        <div className="max-w-xl mx-auto px-6">
          {activeForm === "register" ? (
            <div id="register" className="scroll-mt-24">
              <div className="bg-white rounded-3xl shadow-xl border border-[#D4AF37]/25 overflow-hidden">
                <div className="bg-[#013220] px-8 py-6">
                  <h2 className="text-2xl font-bold text-[#D4AF37] font-serif">Mission Registration</h2>
                  <p className="text-white/60 text-sm mt-1">Saplings · Volunteering · Campus programmes</p>
                </div>
                <form onSubmit={handleRegisterSubmit} className="p-8 space-y-4">
                  <StatusBanner type={registerStatus.type} message={registerStatus.message} />
                  <input name="name" value={registerForm.name} onChange={handleRegisterChange} placeholder="Full Name *" className={inputLight} required />
                  <input name="email" type="email" value={registerForm.email} onChange={handleRegisterChange} placeholder="Email Address *" className={inputLight} required />
                  <input name="phone" type="tel" value={registerForm.phone} onChange={handleRegisterChange} placeholder="Phone Number *" className={inputLight} required />
                  <input name="city" value={registerForm.city} onChange={handleRegisterChange} placeholder="City — Bengaluru or Chittoor" className={inputLight} />
                  <select name="category" value={registerForm.category} onChange={handleRegisterChange} className={inputLight}>
                    <option value="">I want to join as…</option>
                    <option value="Household — Claim Sapling">Household — Claim Sapling</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Green Champion">Green Champion</option>
                    <option value="College / School">College / School</option>
                    <option value="Corporate Partner">Corporate Partner</option>
                    <option value="Gram Panchayat">Gram Panchayat</option>
                  </select>
                  <textarea name="message" value={registerForm.message} onChange={handleRegisterChange} rows="3" placeholder="Message (optional)" className={`${inputLight} resize-none`} />
                  <button
                    type="submit"
                    disabled={registerStatus.loading}
                    className="w-full bg-[#013220] hover:bg-[#0a4d2e] disabled:opacity-60 text-[#D4AF37] py-4 rounded-xl font-bold transition"
                  >
                    {registerStatus.loading ? "Saving…" : "Submit Registration"}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div id="donate" className="scroll-mt-24">
              <div className="rounded-3xl shadow-xl border border-[#D4AF37]/40 overflow-hidden">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8962E] px-8 py-6">
                  <h2 className="text-2xl font-bold text-[#013220] font-serif">Support Green Mission</h2>
                  <p className="text-[#013220]/70 text-sm mt-1">Every rupee plants native saplings</p>
                </div>
                <form onSubmit={handleDonateSubmit} className="p-8 space-y-4 bg-[#013220]">
                  <StatusBanner type={donateStatus.type} message={donateStatus.message} />
                  <div className="grid grid-cols-3 gap-2">
                    {DONATE_TIERS.map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => { setSelectedAmount(tier.amount); setShowCustom(false); }}
                        className={`py-3 rounded-xl text-center transition ${
                          selectedAmount === tier.amount && !showCustom
                            ? "bg-[#D4AF37] text-[#013220] font-bold"
                            : "bg-[#0a4d2e] text-white/80 hover:bg-[#0a4d2e]/80"
                        }`}
                      >
                        <p className="text-sm font-bold">{tier.label}</p>
                        <p className="text-xs mt-0.5 opacity-80">{tier.trees} trees</p>
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCustom(true)}
                    className={`w-full py-2 text-xs rounded-lg border ${
                      showCustom ? "border-[#D4AF37] text-[#D4AF37]" : "border-white/20 text-white/50"
                    }`}
                  >
                    Custom amount
                  </button>
                  {showCustom && (
                    <input
                      name="customAmount"
                      type="number"
                      value={donateForm.customAmount}
                      onChange={handleDonateChange}
                      placeholder="Enter amount ₹"
                      className={inputDark}
                    />
                  )}
                  <input name="name" value={donateForm.name} onChange={handleDonateChange} placeholder="Full Name *" className={inputDark} required />
                  <input name="email" type="email" value={donateForm.email} onChange={handleDonateChange} placeholder="Email *" className={inputDark} required />
                  <input name="phone" type="tel" value={donateForm.phone} onChange={handleDonateChange} placeholder="Phone" className={inputDark} />
                  <button
                    type="submit"
                    disabled={donateStatus.loading}
                    className="w-full bg-[#D4AF37] hover:bg-[#e8c84a] disabled:opacity-60 text-[#013220] py-4 rounded-xl font-bold transition"
                  >
                    {donateStatus.loading ? "Saving…" : `Donate ${showCustom ? "" : `₹${selectedAmount}`}`}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-6 text-center">
          {channels.map((ch) => (
            <div key={ch.title}>
              <span className="text-2xl">{ch.icon}</span>
              <p className="mt-2 text-xs text-[#8B7355] uppercase tracking-wide font-semibold">{ch.title}</p>
              <p className="mt-1 text-[#013220] text-sm font-medium">{ch.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-center text-[#013220] font-serif mb-8">Field Offices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="p-6 rounded-2xl bg-[#F7F3E9] border-l-4 border-[#D4AF37]">
                <div className="flex items-center gap-2 text-[#013220] font-bold">
                  <FaMapMarkerAlt className="text-[#D4AF37]" /> {o.city}
                </div>
                <p className="mt-2 text-sm text-[#5C5346] leading-6">{o.address}</p>
                <p className="mt-2 text-xs text-[#D4AF37]">{o.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-[#EDE8DC]">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="text-xl font-bold text-center text-[#013220] font-serif mb-6">FAQ</h2>
          <div className="space-y-2">
            {faqs.slice(0, 4).map((faq, i) => (
              <div key={faq.q} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between p-4 text-left text-sm font-semibold text-[#013220]"
                >
                  {faq.q}
                  <span className="text-[#D4AF37]">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="px-4 pb-4 text-sm text-[#5C5346] leading-6">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-10 bg-[#013220] text-center">
        <p className="text-[#D4AF37] text-sm font-semibold">@TanishQGreenMission</p>
        <div className="flex justify-center gap-6 mt-4">
          {social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37] transition">
              {s.label === "Instagram" && <FaInstagram size={20} />}
              {s.label === "YouTube" && <FaYoutube size={20} />}
              {s.label === "Facebook" && <FaFacebookF size={20} />}
            </a>
          ))}
        </div>
        <Link to="/" className="inline-block mt-5 text-xs text-white/40 hover:text-[#D4AF37]">← Back to Home</Link>
      </section>

      <Footer />
    </>
  );
}
