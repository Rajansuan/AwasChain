import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Search from "../components/Search";
import PropertyCard from "../components/PropertyCard";
import PropertyModal from "../components/PropertyModal";

import { PROPERTIES } from "../data/properties";

export default function AppDashboard() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <Navigation />
      <Search />

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold mb-2">Homes For You</h3>
        <hr className="border-white/10 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((p) => (
            <PropertyCard key={p.id} property={p} openModal={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <PropertyModal property={selected} closeModal={() => setSelected(null)} />
      )}
    </div>
  );
}
