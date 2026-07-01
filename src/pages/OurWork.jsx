import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OurWork() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8fff8] py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <h1 className="text-6xl font-bold text-center text-[#15803d]">
            Our Work
          </h1>

          <p className="text-center mt-6 text-gray-600 text-xl max-w-3xl mx-auto">
            We are dedicated to protecting nature through tree plantation,
            environmental education, community engagement, and sustainable
            development initiatives.
          </p>

          {/* Key Initiatives */}

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="/hero1.jpg"
                alt="Tree Plantation"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#15803d]">
                  🌳 Tree Plantation
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Conducting large-scale plantation drives in schools,
                  villages, parks, and urban communities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="/hero2.jpg"
                alt="Clean Communities"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#15803d]">
                  ♻️ Clean Communities
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Organizing cleanliness drives and promoting responsible
                  waste management practices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="/hero3.jpg"
                alt="Green Education"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#15803d]">
                  🌱 Green Education
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Educating students and communities about sustainability,
                  biodiversity, and environmental conservation.
                </p>
              </div>
            </div>

          </div>

          {/* How We Work */}

          <div className="mt-24">

            <h2 className="text-5xl font-bold text-center text-[#15803d]">
              How We Work
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <div className="text-5xl">📍</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Plan
                </h3>
                <p className="mt-3 text-gray-600">
                  Identify locations and environmental needs.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <div className="text-5xl">🤝</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Engage
                </h3>
                <p className="mt-3 text-gray-600">
                  Bring together volunteers and local communities.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <div className="text-5xl">🌳</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Plant
                </h3>
                <p className="mt-3 text-gray-600">
                  Conduct plantation drives and awareness activities.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
                <div className="text-5xl">💚</div>
                <h3 className="text-2xl font-bold text-[#15803d] mt-4">
                  Protect
                </h3>
                <p className="mt-3 text-gray-600">
                  Ensure long-term care and maintenance of planted trees.
                </p>
              </div>

            </div>

          </div>

          {/* Gallery */}

          <div className="mt-24">

            <h2 className="text-5xl font-bold text-center text-[#15803d]">
              Our Gallery
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <img
                src="/hero1.jpg"
                alt="Gallery 1"
                className="rounded-3xl h-72 w-full object-cover shadow-lg"
              />

              <img
                src="/hero2.jpg"
                alt="Gallery 2"
                className="rounded-3xl h-72 w-full object-cover shadow-lg"
              />

              <img
                src="/hero3.jpg"
                alt="Gallery 3"
                className="rounded-3xl h-72 w-full object-cover shadow-lg"
              />

              <img
                src="/hero4.jpg"
                alt="Gallery 4"
                className="rounded-3xl h-72 w-full object-cover shadow-lg"
              />

              <img
                src="/hero5.jpg"
                alt="Gallery 5"
                className="rounded-3xl h-72 w-full object-cover shadow-lg"
              />

              <img
                src="/hero6.jpg"
                alt="Gallery 6"
                className="rounded-3xl h-72 w-full object-cover shadow-lg"
              />

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}