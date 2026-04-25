export default function ProductCard({ name, price, image, rating }) {
  return (
    <div className="border p-3 hover:shadow-lg transition rounded-lg">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={name}
          className="w-full aspect-[4/5] object-cover rounded-md"
        />

        {/* ⭐ RATING */}
        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs rounded shadow">
          ⭐ {rating}
        </div>
      </div>

      {/* DETAILS */}
      <h2 className="text-sm font-medium mt-2 truncate">{name}</h2>
      <p className="text-gray-500 text-sm">₹{price}</p>

      <button className="mt-2 w-full bg-black text-white text-sm py-1 rounded">
        Add
      </button>
    </div>
  );
}