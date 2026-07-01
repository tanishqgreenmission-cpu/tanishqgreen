import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function JoinUs() {
  const [selectedAmount, setSelectedAmount] = useState("");
const [showCustom, setShowCustom] = useState(false);
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8fff8] py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h1 className="text-6xl font-bold text-[#15803d] leading-tight">
                Join Our <br /> Green Mission
              </h1>

             <p className="mt-6 text-lg text-gray-600 leading-8">
  Every tree planted brings hope to future generations.
  Join Tanishq Green Mission by participating in plantation
  drives, supporting environmental awareness, or contributing
  towards creating a cleaner and greener India.
</p>

<div className="mt-8 flex gap-4">
  <a
    href="#joinForm"
    className="bg-[#15803d] hover:bg-[#14532d] text-white px-8 py-4 rounded-full font-semibold transition"
  >
    Join Mission
  </a>

  <a
    href="#DonateForm"
    className="border-2 border-[#15803d] text-[#15803d] hover:bg-[#15803d] hover:text-white px-8 py-4 rounded-full font-semibold transition"
  >
    Donate
  </a>
</div>

            </div>

            <div>

              <img
                src="/join.jpg"
                alt="Join Us"
                className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
              />

            </div>

          </div>

          {/* Why Join Us */}

          <div className="mt-24">

            <h2 className="text-5xl font-bold text-center text-[#15803d]">
              Why Join Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

                <div className="text-6xl">🌳</div>

                <h3 className="text-2xl font-bold text-[#15803d] mt-5">
                  Plant Trees
                </h3>

                <p className="mt-4 text-gray-600">
                  Participate in plantation drives and restore green spaces.
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

                <div className="text-6xl">🤝</div>

                <h3 className="text-2xl font-bold text-[#15803d] mt-5">
                  Volunteer Together
                </h3>

                <p className="mt-4 text-gray-600">
                  Meet passionate volunteers working to protect nature.
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

                <div className="text-6xl">🌎</div>

                <h3 className="text-2xl font-bold text-[#15803d] mt-5">
                  Make an Impact
                </h3>

                <p className="mt-4 text-gray-600">
                  Help build greener communities for future generations.
                </p>

              </div>

            </div>

          </div>

          

{/* Donation + Join Section */}

<div className="grid lg:grid-cols-2 gap-10 mt-24">

  {/* Donation Form */}

<div
  id="DonateForm"
  className="bg-white rounded-3xl shadow-2xl border border-[#dcfce7] p-10 h-fit scroll-mt-28"
>
    <h2 className="text-4xl font-bold text-[#15803d]">
      Support Our Green Mission
    </h2>

    <p className="mt-4 text-gray-700 leading-8">
      Your contribution helps us plant more trees, organize awareness
      campaigns, and create greener communities. Every donation,
      regardless of size, makes a meaningful impact.
    </p>

    <form className="mt-8 space-y-5">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#15803d]"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#15803d]"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#15803d]"
      />

      <h3 className="text-xl font-semibold text-[#15803d]">
        Choose Donation Amount
      </h3>

      <div className="grid grid-cols-3 gap-3">

  {["100", "300", "500", "700", "1000"].map((amount) => (
    <button
      key={amount}
      type="button"
      onClick={() => {
        setSelectedAmount(amount);
        setShowCustom(false);
      }}
      className={`py-3 rounded-xl border transition font-semibold ${
        selectedAmount === amount
          ? "bg-[#15803d] text-white border-[#15803d]"
          : "border-[#15803d] text-[#15803d] hover:bg-[#dcfce7]"
      }`}
    >
      ₹{amount}
    </button>
  ))}

  <button
    type="button"
    onClick={() => {
      setSelectedAmount("custom");
      setShowCustom(true);
    }}
    className={`py-3 rounded-xl border transition font-semibold ${
      selectedAmount === "custom"
        ? "bg-[#15803d] text-white border-[#15803d]"
        : "border-[#15803d] text-[#15803d] hover:bg-[#dcfce7]"
    }`}
  >
    Custom
  </button>

</div>

{/* Show only when Custom is clicked */}

{showCustom && (
  <input
    type="number"
    placeholder="Enter Amount"
    className="w-full mt-5 p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#15803d]"
  />
)}

<button
  className="w-full bg-[#15803d] hover:bg-[#14532d] text-white py-4 rounded-xl font-semibold text-lg transition mt-5"
>
  Donate Now 💚
</button>

    </form>

  </div>

  {/* Join Form */}

  <div
  id="joinForm"
  className="bg-white rounded-3xl shadow-2xl border border-[#dcfce7] p-8 h-fit scroll-mt-28"
>

    <h2 className="text-3xl font-bold text-center text-[#15803d]">
      Join Our Mission
    </h2>

    <p className="text-center text-gray-600 mt-3 mb-8">
      Become a part of the movement for a greener tomorrow.
    </p>

    <form className="space-y-5">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#15803d]"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#15803d]"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#15803d]"
      />

      <input
        type="text"
        placeholder="City"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#15803d]"
      />

      <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#15803d]">

        <option>Select Category</option>
        <option>Volunteer</option>
        <option>Green Champion</option>
        <option>Community Partner</option>
        <option>Student</option>
        <option>Corporate</option>

      </select>

      <textarea
        rows="4"
        placeholder="Your Message"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#15803d]"
      />

      <button
        className="w-full bg-[#15803d] hover:bg-[#14532d] text-white py-3 rounded-xl font-semibold transition"
      >
        Register
      </button>

    </form>

  </div>

</div>
  


          {/* Volunteer Benefits */}

          <div className="mt-24">

            <h2 className="text-5xl font-bold text-center text-[#15803d]">
              Volunteer Benefits
            </h2>

            <div className="grid md:gridS-cols-4 gap-6 mt-12">

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                <div className="text-5xl">🏅</div>

                <h3 className="mt-5 text-xl font-bold text-[#15803d]">
                  Certificate
                </h3>

                <p className="mt-3 text-gray-600">
                  Receive recognition for your contribution.
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                <div className="text-5xl">🌱</div>

                <h3 className="mt-5 text-xl font-bold text-[#15803d]">
                  Real Experience
                </h3>

                <p className="mt-3 text-gray-600">
                  Participate in real environmental projects.
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                <div className="text-5xl">🤝</div>

                <h3 className="mt-5 text-xl font-bold text-[#15803d]">
                  Networking
                </h3>

                <p className="mt-3 text-gray-600">
                  Connect with volunteers and organizations.
                </p>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                <div className="text-5xl">💚</div>

                <h3 className="mt-5 text-xl font-bold text-[#15803d]">
                  Social Impact
                </h3>

                <p className="mt-3 text-gray-600">
                  Create positive change for society and nature.
                </p>

              </div>

            </div>

          </div>

          {/* Call to Action */}

          <div className="bg-[#dcfce7] rounded-3xl p-14 mt-24 text-center">

            <h2 className="text-5xl font-bold text-[#14532d]">
              Together We Can Make a Difference
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
              Every tree planted, every volunteer engaged, and every
              awareness campaign brings us one step closer to a healthier
              planet. Join today and become part of the green revolution.
            </p>

 <a href="/#register"
className="inline-block mt-10 bg-[#15803d] hover:bg-[#14532d] text-white px-10 py-4 rounded-full font-semibold transition">
  Start Your Journey
</a>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}