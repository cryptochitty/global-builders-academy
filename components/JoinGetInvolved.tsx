import { useState } from "react";

const JoinGetInvolved = () => {
  const [joinOpen, setJoinOpen] = useState(false);
  const [involveOpen, setInvolveOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Join the Global Builders Academy</h2>
        <p className="text-lg mb-10 opacity-90">
          Be part of a global Web3 community shaping the future of decentralized innovation.
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => setJoinOpen(true)}
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-indigo-100 transition"
          >
            Join
          </button>

          <button
            onClick={() => setInvolveOpen(true)}
            className="bg-transparent border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-indigo-700 transition"
          >
            Get Involved
          </button>
        </div>

        {joinOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl p-6 w-96 max-w-full shadow-xl text-black">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Join Global Builders Academy</h3>
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name" className="border rounded-lg p-2" required />
                <input type="email" placeholder="Email" className="border rounded-lg p-2" required />
                <input type="text" placeholder="Country" className="border rounded-lg p-2" />
                <input type="text" placeholder="Web3 Skills (optional)" className="border rounded-lg p-2" />
                <button className="bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition">
                  Join Now
                </button>
                <button
                  type="button"
                  onClick={() => setJoinOpen(false)}
                  className="mt-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        {involveOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl p-6 w-96 max-w-full shadow-xl text-black">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Get Involved with GBA</h3>
              <form className="flex flex-col gap-3">
                <select className="border rounded-lg p-2" required>
                  <option value="">Select your role</option>
                  <option>Mentor / Educator</option>
                  <option>Developer / Designer</option>
                  <option>Research / Content Creator</option>
                  <option>Organizer / Community Lead</option>
                  <option>Sponsor / Partner</option>
                </select>
                <textarea
                  placeholder="Tell us how you'd like to contribute"
                  className="border rounded-lg p-2"
                  rows={3}
                ></textarea>
                <input type="email" placeholder="Your Email" className="border rounded-lg p-2" required />
                <button className="bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition">
                  Submit Interest
                </button>
                <button
                  type="button"
                  onClick={() => setInvolveOpen(false)}
                  className="mt-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinGetInvolved;
