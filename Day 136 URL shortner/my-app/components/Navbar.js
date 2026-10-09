"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold  tracking-wide cursor-pointer">
            Giggy
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <ul className="flex items-center gap-8 font-medium text-gray-700">
            <li>
              <Link href="/" className="hover:text-indigo-600 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-indigo-600 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/shortener" className="hover:text-indigo-600 transition">
                Shortener
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-indigo-600 transition">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex gap-3">
            <Link href="/shortener">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                Try Now
              </button>
            </Link>

            <Link
              href="https://github.com/yourusername/giggy"
              target="_blank"
            >
              <button className="px-5 py-2 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">

            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/shortener" onClick={() => setIsOpen(false)}>
              Shortener
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link href="/shortener" onClick={() => setIsOpen(false)}>
              <button className="w-48 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold">
                Try Now
              </button>
            </Link>

            <Link
              href="https://github.com/yourusername/giggy"
              target="_blank"
            >
              <button className="w-48 py-3 rounded-xl bg-black text-white font-semibold">
                GitHub
              </button>
            </Link>

          </ul>
        </div>
      )}
    </nav>
  );
}