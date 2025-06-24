import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

type Destination = {
  name: string;
  flag: string;
  imageUrl: string;
};

const destinations: Destination[] = [
  {
    name: 'Abuja',
    flag: '🇳🇬',
    imageUrl: '/images/Abuja.jpeg',
  },
  {
    name: 'Lagos',
    flag: '🇳🇬',
    imageUrl: '/images/lagos.jpeg',
  },
  {
    name: 'London',
    flag: '🇬🇧',
    imageUrl: '/images/london.jpeg',
  },
  {
    name: 'Ikeja',
    flag: '🇳🇬',
    imageUrl: '/images/ikeja.jpeg',
  },
  {
    name: 'Paris',
    flag: '🇫🇷',
    imageUrl: '/images/paris.jpeg',
  },
  {
    name: 'south African',
    flag: '🇳🇬',
    imageUrl: '/images/southAfrica.jpeg',
  },
];

const TrendingDestinations: React.FC = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-1">Trending destinations</h2>
      <p className="text-sm text-gray-600 mb-6">
        Travelers searching for Nigeria also booked these
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            className="relative p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <Image
              src={dest.imageUrl}
              alt={dest.name}
              layout="responsive"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-lg font-semibold">
              {dest.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
