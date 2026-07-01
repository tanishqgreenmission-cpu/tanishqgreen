import { Link } from "react-router-dom";

export default function ChampionsPreview() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#15803d]">
          Our Green Champions
        </h2>

        <p className="text-center text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
          Meet the passionate individuals who are helping create
          greener communities and inspiring environmental change.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-[#f8fff8] rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300">

            <img
              src="/champions1.jpg"
              alt="Champion"
              className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-[#dcfce7]"
            />

            <h3 className="mt-6 text-2xl font-bold text-[#15803d]">
              Volunteer Leader
            </h3>

            <p className="mt-3 text-gray-600">
              Leading tree plantation drives and community initiatives.
            </p>

          </div>

          <div className="bg-[#f8fff8] rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300">

            <img
              src="/champions2.jpg"
              alt="Champion"
              className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-[#dcfce7]"
            />

            <h3 className="mt-6 text-2xl font-bold text-[#15803d]">
              Student Champion
            </h3>

            <p className="mt-3 text-gray-600">
              Spreading environmental awareness among youth.
            </p>

          </div>

          <div className="bg-[#f8fff8] rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300">

            <img
              src="/champions3.jpg"
              alt="Champion"
              className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-[#dcfce7]"
            />

            <h3 className="mt-6 text-2xl font-bold text-[#15803d]">
              Community Partner
            </h3>

            <p className="mt-3 text-gray-600">
              Supporting sustainable development and green programs.
            </p>

          </div>

        </div>

        <div className="text-center mt-12">

          <Link
            to="/champions"
            className="inline-block bg-[#15803d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#14532d] transition"
          >
            View All Champions
          </Link>

        </div>

      </div>

    </section>
  );
}