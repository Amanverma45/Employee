import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col">

        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to My Website
            </h2>
            <p className="text-lg mb-6">
              Showcasing my work, skills and more!
            </p>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Explore
            </button>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Hello! I am a passionate developer focused on building responsive
              and user-friendly websites.
            </p>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-4 mt-auto">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm">
              © 2026 My Website. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    );
  }
}
