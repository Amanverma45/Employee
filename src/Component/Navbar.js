import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="bg-gray-900 px-6 py-4 flex justify-end gap-6">
        <Link to="/" className="text-white hover:text-blue-400 font-medium">
          Home
        </Link>
        <Link to="/signup" className="text-white hover:text-blue-400 font-medium">
          Signup
        </Link>
        <Link to="/login" className="text-white hover:text-blue-400 font-medium">
          Login
        </Link>
        <Link to="/about" className="text-white hover:text-blue-400 font-medium">
          About
        </Link>
      </div>
    );
  }
}
