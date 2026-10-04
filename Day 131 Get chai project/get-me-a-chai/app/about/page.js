// app/about/page.js

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-purple-500">Get Me A Chai</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8">
            Get Me A Chai is a simple donation platform that helps creators,
            developers, artists, writers, students, and freelancers receive
            support from people who appreciate their work. Instead of asking for
            large investments, supporters can simply buy you a virtual cup of
            chai.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-5 text-purple-400">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-8">
              We believe every creator deserves an easy way to earn support from
              their community. Whether you're building open-source projects,
              creating educational content, designing artwork, or sharing
              knowledge, Get Me A Chai gives your audience a simple way to say
              "Thank You."
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Secure online donations</li>
              <li>✅ Fast and simple setup</li>
              <li>✅ Personalized creator pages</li>
              <li>✅ Support with custom messages</li>
              <li>✅ Transparent donation tracking</li>
              <li>✅ Mobile-friendly experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-bold mb-14">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-5xl mb-5">☕</div>

            <h3 className="text-2xl font-semibold mb-4">
              Simple Donations
            </h3>

            <p className="text-gray-300">
              Support your favorite creators with just a few clicks.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-5xl mb-5">💜</div>

            <h3 className="text-2xl font-semibold mb-4">
              Community Support
            </h3>

            <p className="text-gray-300">
              Build stronger connections with your audience through meaningful
              contributions.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition">
            <div className="text-5xl mb-5">🚀</div>

            <h3 className="text-2xl font-semibold mb-4">
              Grow Your Passion
            </h3>

            <p className="text-gray-300">
              Focus on creating while your supporters help fund your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-purple-500">1000+</h2>
            <p className="text-gray-400 mt-2">Creators</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-500">50K+</h2>
            <p className="text-gray-400 mt-2">Supporters</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-500">₹10L+</h2>
            <p className="text-gray-400 mt-2">Raised</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-purple-500">24/7</h2>
            <p className="text-gray-400 mt-2">Available</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-5">
            Ready to Start Receiving Support?
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Join thousands of creators who are sharing their work and getting
            support from people around the world.
          </p>

          <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">
            Create Your Page
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;