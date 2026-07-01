export default function RegisterMission() {
  return (
    <section
  id="register"
  className="bg-[#f8fff8] py-20 scroll-mt-24"
>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div className="bg-[#dcfce7] p-10 rounded-3xl shadow-lg">

            <h2 className="text-5xl font-bold text-[#14532d]">
              Join The Green Mission
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-8">
              Become a volunteer and help us create a greener future.
              Every tree planted today contributes to a healthier
              environment tomorrow.
            </p>

            <ul className="mt-8 space-y-4 text-[#14532d] font-medium">
              <li>✓ Participate in plantation drives</li>
              <li>✓ Support environmental awareness</li>
              <li>✓ Become a Green Champion</li>
              <li>✓ Help build sustainable communities</li>
            </ul>

          </div>

          {/* Right Form */}

          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md mx-auto w-full">

            <h3 className="text-2xl font-bold text-[#15803d] mb-6 text-center">
              Register Now
            </h3>

            <form className="space-y-4">

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

             <a
  href="/join-us#joinForm"
  className="block w-full text-center bg-[#15803d] text-white py-3 rounded-xl font-semibold hover:bg-[#14532d] transition duration-300"
>
  Register
</a>

<a
  href="/join-us#donateForm"
  className="block w-full text-center border-2 border-[#15803d] text-[#15803d] py-3 rounded-xl font-semibold hover:bg-[#15803d] hover:text-white transition duration-300"
>
  Donate
</a>
            </form>

          </div>

        </div>

      </div>

    </section>
  );
}