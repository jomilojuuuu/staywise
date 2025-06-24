"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../app/components/Footer";
import { Search, CalendarDays, CheckCircle } from "lucide-react";
import TrendingDestinations from "../app/components/TrendingDestinations";

export default function LandingPage() {

  return (
    <main className="bg-[#fdfbda] text-[#6a6b4e]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-[#6a6b4e]">STAYwise</h1>
        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 border border-[#6a6b4e] text-[#6a6b4e] rounded-md hover:bg-[#fdfbda] transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-[#6a6b4e] text-white rounded-md hover:bg-[#3b3a2f] transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 md:py-40 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Your Perfect Stay
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 text-[#6a6b4e]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Book hotels in minutes. Trusted by thousands of travelers across the
          world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/signup">
            <button className="px-6 py-3 bg-[#e4a663] text-white font-semibold rounded-md text-lg hover:bg-[#3b3a2f] transition">
              Start Booking
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 2. How It Works */}
      <section className="py-12 md:py-30 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {/* Step 1 */}
          <div className="p-6 border border-[#6a6b4e]/20 rounded-lg shadow-sm bg-[#fdfbda] text-center">
            <Search className="mx-auto h-10 w-10 text-[#6a6b4e] mb-3" />
            <h4 className="text-xl font-semibold mb-2">Search hotels</h4>
            <p className="text-[#6a6b4e]/80">
              Enter your destination and explore options instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 border border-[#6a6b4e]/20 rounded-lg shadow-sm bg-[#fdfbda] text-center">
            <CalendarDays className="mx-auto h-10 w-10 text-[#6a6b4e] mb-3" />
            <h4 className="text-xl font-semibold mb-2">Pick your dates</h4>
            <p className="text-[#6a6b4e]/80">
              Select check-in and check-out dates that suit you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 border border-[#6a6b4e]/20 rounded-lg shadow-sm bg-[#fdfbda] text-center">
            <CheckCircle className="mx-auto h-10 w-10 text-[#6a6b4e] mb-3" />
            <h4 className="text-xl font-semibold mb-2">Confirm & relax</h4>
            <p className="text-[#6a6b4e]/80">
              Secure your room and get ready to enjoy your stay.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Popular Destinations */}
      <TrendingDestinations />
      {/* <section className="py-12 md:py-30 px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Popular Destinations</h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Lagos", "Abuja", "Cape Town", "Nairobi"].map((city, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="h-40 bg-[#e4a663] rounded-md mb-3" />
              <h4 className="text-xl font-semibold">{city}</h4>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* 4. Why Choose Us */}
      <section className="py-12 md:py-30 px-6 bg-[#6a6b4e] text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Why Choose STAYwise?</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {[
            {
              title: "Best Rates",
              desc: "We partner directly with hotels to bring you unbeatable prices.",
            },
            {
              title: "Secure Booking",
              desc: "Book confidently with our safe and verified platform.",
            },
            {
              title: "24/7 Support",
              desc: "Our friendly team is always available to help.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-[#3b3a2f] rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
            >
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
