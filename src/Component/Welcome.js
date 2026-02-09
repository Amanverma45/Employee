import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 px-4">
        <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome 
          </h1>

          <p className="text-gray-600 mb-6">
            You have successfully logged in.  
            Manage employees easily from here.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
