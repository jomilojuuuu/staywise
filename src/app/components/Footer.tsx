import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-[#fdfbda] text-[#6a6b4e] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h4 className="text-2xl font-bold mb-2">STAYwise</h4>
          <p className="text-sm text-[#fdfbda]/80">
            Your go-to platform for finding and booking hotels effortlessly.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Explore</h5>
          <ul className="space-y-2">
            <li>
              
              <Link href="/signup" className="hover:text-[#e4a663] transition">
                Look for a Hotel
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-[#e4a663] transition">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-[#e4a663] transition">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <Link
                href="mailto:support@stayeasy.com"
                className="hover:text-[#e4a663] transition"
              >
                support@staywise.com
              </Link>
            </li>
            <li>
              Phone:{" "}
              <span className="text-[#6a6b4e]/90">+234 903 806 413 5</span>
            </li>
            <li>
              Address: <span className="text-[#6a6b4e]/90">Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs mt-10 text-[#fdfbda]/60">
        &copy; {new Date().getFullYear()} StayEasy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer