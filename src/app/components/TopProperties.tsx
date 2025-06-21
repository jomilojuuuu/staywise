import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

type Property = {
  name: string;
  location: string;
  rating: number;
  ratingText: string;
  reviews: number;
  price: string;
  imageUrl: string;
};

const properties: Property[] = [
  {
    name: "Agriturismo Cabrele",
    location: "Italy, Santorso",
    rating: 9.5,
    ratingText: "Exceptional",
    reviews: 277,
    price: "NGN 181,299",
    imageUrl: "/images/AgriturismoCabrele.jpeg",
  },
  {
    name: 'Maritime Freizeit Camp "MFC" Erfurter Seen',
    location: "Germany, Stotternheim",
    rating: 8.2,
    ratingText: "Very Good",
    reviews: 148,
    price: "NGN 140,013",
    imageUrl: "/images/MaritimeFreizeit.jpeg",
  },
  {
    name: "Auberge La Seigneurie Valcartier",
    location: "Canada, Saint-Gabriel-De-Valcartier",
    rating: 8.0,
    ratingText: "Very Good",
    reviews: 290,
    price: "NGN 137,628",
    imageUrl: "/images/LofthusCamping.jpeg",
  },
  {
    name: "Lofthus Camping",
    location: "Norway, Lofthus",
    rating: 9.5,
    ratingText: "Exceptional",
    reviews: 328,
    price: "NGN 428,643",
    imageUrl: "/images/LofthusCamping.jpeg",
  },
];

const TopProperties: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-1">Stay at our top unique properties</h2>
      <p className="text-sm text-gray-600 mb-4">
        From castles and villas to boats and igloos, we have it all
      </p>

      <div className="flex overflow-x-auto no-scrollbar space-x-4 pb-4 md:grid md:grid-cols-4 md:gap-4 md:space-x-0 md:overflow-visible">
        {properties.map((property, index) => (
          <div
            key={index}
            className="min-w-[85%] md:min-w-0 bg-white rounded-xl shadow-md overflow-hidden relative"
          >
            <div className="relative h-48">
              <img
                src={property.imageUrl}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                <AiOutlineHeart size={20} className="text-gray-700" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm">{property.name}</h3>
              <p className="text-sm text-gray-500">{property.location}</p>

              <div className="flex items-center gap-2 mt-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {property.rating}
                </span>
                <span className="text-sm text-gray-700 font-medium">{property.ratingText}</span>
                <span className="text-sm text-gray-500">({property.reviews} reviews)</span>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                Starting from <span className="font-semibold">{property.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProperties;
