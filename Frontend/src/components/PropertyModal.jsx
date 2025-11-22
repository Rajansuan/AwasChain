import React from "react";
import close from "../assets/close.svg";

export default function PropertyModal({ property, closeModal }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-40 px-4">
      <div className="bg-[#0b0b0b] text-white border border-white/10 rounded-2xl
                      max-w-4xl w-full p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">

        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20"
        >
          <img src={close} alt="close" className="w-4" />
        </button>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img src={property.image} alt="home" className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold">{property.name}</h1>
            <p className="text-gray-400 mb-3">{property.address}</p>

            <h2 className="text-2xl font-semibold">{property.attributes[0].value} ETH</h2>

            <div className="mt-4 text-sm text-gray-300 space-y-1">
              <div><strong>Beds:</strong> {property.attributes[1].value}</div>
              <div><strong>Baths:</strong> {property.attributes[2].value}</div>
              <div><strong>Area:</strong> {property.attributes[3].value} sqft</div>
            </div>

            <hr className="my-6 border-white/10" />

            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-gray-300 mt-2">{property.description}</p>

            <hr className="my-6 border-white/10" />

            <h2 className="text-xl font-semibold mb-2">Facts & Features</h2>

            <ul className="space-y-1 text-gray-300">
              {property.attributes.map((a, i) => (
                <li key={i}>
                  <strong>{a.trait_type}</strong> : {a.value}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full px-4 py-3 rounded-lg bg-linear-to-r 
                               from-purple-600 to-fuchsia-500">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
