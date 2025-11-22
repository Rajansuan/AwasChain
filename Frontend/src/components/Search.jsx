export default function Search() {
  return (
    <div className="pt-24 pb-8 px-6 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search by location, price or property type..."
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                   text-gray-200 placeholder-gray-400 focus:ring-2 
                   focus:ring-purple-600/40 outline-none"
      />
    </div>
  );
}
