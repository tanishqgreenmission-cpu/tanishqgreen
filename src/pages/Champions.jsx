import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Champions() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8fff8] py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <h1 className="text-6xl font-bold text-center text-[#15803d]">
            Green Champions
          </h1>

          <p className="text-center text-gray-600 mt-6 text-xl max-w-3xl mx-auto">
            Our Green Champions are passionate volunteers, students,
            organizations, and community leaders working together to
            build a cleaner and greener future.
          </p>

          {/* Champion Cards */}

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

              <img
                src="/champions1.jpg"
                alt="Volunteer Leader"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#dcfce7]"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#15803d]">
                Volunteer Leader
              </h3>

              <p className="text-gray-500 mt-2">
                Community Volunteer
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                Organizes plantation drives and motivates people
                to participate in environmental activities.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

              <img
                src="/champions2.jpg"
                alt="Student Champion"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#dcfce7]"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#15803d]">
                Student Champion
              </h3>

              <p className="text-gray-500 mt-2">
                Youth Ambassador
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                Inspires students to protect nature through
                awareness campaigns and sustainability projects.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

              <img
                src="/champions3.jpg"
                alt="Community Partner"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#dcfce7]"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#15803d]">
                Community Partner
              </h3>

              <p className="text-gray-500 mt-2">
                Sustainability Partner
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                Supports environmental initiatives and helps
                organize green programs across communities.
              </p>

            </div>

          </div>

          {/* Our Impact */}

          <div className="mt-24">

            <h2 className="text-5xl font-bold text-center text-[#15803d]">
              Our Impact
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
                <h3 className="text-5xl font-bold text-[#15803d]">500+</h3>
                <p className="mt-3 text-gray-600">Volunteers</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
                <h3 className="text-5xl font-bold text-[#15803d]">10K+</h3>
                <p className="mt-3 text-gray-600">Trees Planted</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
                <h3 className="text-5xl font-bold text-[#15803d]">50+</h3>
                <p className="mt-3 text-gray-600">Events Conducted</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
                <h3 className="text-5xl font-bold text-[#15803d]">20+</h3>
                <p className="mt-3 text-gray-600">Communities Reached</p>
              </div>

            </div>

          </div>

          {/* Champion Journey */}

          <div className="mt-24">

            <h2 className="text-5xl font-bold text-center text-[#15803d]">
              Become a Champion
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
                <div className="text-5xl">📝</div>
                <h3 className="mt-4 text-xl font-bold text-[#15803d]">
                  Register
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
                <div className="text-5xl">🤝</div>
                <h3 className="mt-4 text-xl font-bold text-[#15803d]">
                  Volunteer
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
                <div className="text-5xl">🌳</div>
                <h3 className="mt-4 text-xl font-bold text-[#15803d]">
                  Plant Trees
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
                <div className="text-5xl">🏆</div>
                <h3 className="mt-4 text-xl font-bold text-[#15803d]">
                  Inspire Others
                </h3>
              </div>

            </div>

          </div>

          {/* CTA */}

          <div className="bg-[#dcfce7] rounded-3xl p-12 mt-24 text-center">

            <h2 className="text-4xl font-bold text-[#14532d]">
              Ready to Become a Green Champion?
            </h2>

            <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto">
              Join our mission today and help create a greener, healthier,
              and more sustainable future for everyone.
            </p>

            <Link
  to="/#register"
  className="inline-block mt-8 bg-[#15803d] hover:bg-[#14532d] text-white px-10 py-4 rounded-full font-semibold transition"
>
  Join the Mission
</Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}