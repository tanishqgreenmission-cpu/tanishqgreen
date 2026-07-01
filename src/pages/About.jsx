import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8fff8] py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <h1 className="text-6xl text-center font-bold text-[#15803d]">
            About Us
          </h1>

          <p className="text-center text-gray-600 text-xl mt-6 max-w-4xl mx-auto">
            Tanishq Green Mission is committed to creating a greener,
            healthier, and more sustainable world through environmental
            conservation, community participation, and tree plantation initiatives.
          </p>

          {/* Mission & Vision */}

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">

              <h2 className="text-3xl font-bold text-[#15803d] mb-4">
                🌱 Our Mission
              </h2>

              <p className="text-gray-600 leading-8">
                Inspire individuals, families, schools, and organizations
                to actively participate in environmental conservation by
                planting trees, reducing pollution, and promoting
                sustainable living.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">

              <h2 className="text-3xl font-bold text-[#15803d] mb-4">
                🌍 Our Vision
              </h2>

              <p className="text-gray-600 leading-8">
                To build a future where every community enjoys clean air,
                rich biodiversity, and a healthy environment through
                collective environmental responsibility.
              </p>

            </div>

          </div>

          {/* Core Values */}

          <div className="mt-24">

            <h2 className="text-5xl font-bold text-center text-[#15803d]">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl">🌳</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Nature
                </h3>
                <p className="mt-3 text-gray-600">
                  Protecting forests and increasing green cover.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl">🤝</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Community
                </h3>
                <p className="mt-3 text-gray-600">
                  Bringing people together for environmental action.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl">♻️</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Sustainability
                </h3>
                <p className="mt-3 text-gray-600">
                  Encouraging eco-friendly practices every day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl">💚</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Responsibility
                </h3>
                <p className="mt-3 text-gray-600">
                  Every individual has the power to protect nature.
                </p>
              </div>

            </div>

          </div>

          {/* Why Choose Us */}

          <div className="mt-24 bg-white rounded-3xl shadow-lg p-10">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <img
                  src="/hero4.jpg"
                  alt="Green Mission"
                  className="rounded-3xl w-full h-[400px] object-cover"
                />

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#15803d]">
                  Why Choose Tanishq Green Mission?
                </h2>

                <p className="mt-6 text-gray-600 leading-8">
                  Our mission extends beyond planting trees. We build
                  awareness, empower communities, and encourage every
                  individual to contribute toward environmental protection.
                </p>

                <ul className="mt-8 space-y-4 text-lg text-gray-700">

                  <li>✅ Community Tree Plantation Drives</li>

                  <li>✅ Environmental Awareness Programs</li>

                  <li>✅ Volunteer Engagement Activities</li>

                  <li>✅ Sustainable Development Initiatives</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}