import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Global Builders Academy
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Empowering builders around the world with blockchain skills, mentorship, and real-world projects.
          </p>
          <a
            href="#programs"
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Explore Programs
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6 md:flex md:items-center md:gap-12">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Global Builders Academy"
            className="rounded-xl shadow"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Global Builders Academy is a community-driven initiative to nurture talent worldwide. 
            We provide hands-on training, hackathons, and mentorship to help builders innovate in blockchain and Web3.
          </p>
          <p>
            Join us to enhance your skills, collaborate globally, and contribute to exciting projects in the blockchain ecosystem.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-4">Hackathons</h3>
              <p>Participate in global hackathons and build real-world blockchain projects with mentors.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-4">Mentorship</h3>
              <p>Get guidance from top builders and industry experts to accelerate your learning curve.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-4">Workshops & Training</h3>
              <p>Hands-on workshops to master blockchain tools, smart contracts, and Web3 development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-purple-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Become a Global Builder
        </h2>
        <p className="mb-8">Join our academy and start building impactful blockchain projects today.</p>
        <a
          href="#"
          className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Join Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        &copy; 2025 Global Builders Academy. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
