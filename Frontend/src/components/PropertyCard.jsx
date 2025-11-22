export default function PropertyCard({ property, openModal }) {
  return (
    <div
      onClick={() => openModal(property)}
      className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl
                 hover:scale-[1.02] transition-all duration-300 p-4 cursor-pointer"
    >
      <div className="rounded-lg overflow-hidden h-48">
        <img src={property.image} alt="home" className="w-full h-full object-cover" />
      </div>

      <h3 className="mt-3 text-xl font-semibold">{property.attributes[0].value} ETH</h3>
      <p className="text-gray-400 text-sm">
        {property.attributes[1].value} bds • {property.attributes[2].value} ba •{" "}
        {property.attributes[3].value} sqft
      </p>

      <p className="text-gray-300 text-sm mt-1">{property.address}</p>
    </div>
  );
}
