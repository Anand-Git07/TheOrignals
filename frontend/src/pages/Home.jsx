import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // show only trending products
  const trending = products.filter((p) => p.is_trending);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="h-[60vh] relative flex items-center justify-center">
        
        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="Fashion group"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TEXT CONTENT */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Style That Speaks
          </h1>
          <p className="mb-4 text-lg">
            New drops. Fresh fits. Your vibe.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded">
            Shop Now
          </button>
        </div>

      </div>

      {/* TRENDING SECTION */}
      <h2 className="text-2xl p-6 font-semibold">Trending</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-6 pb-10">
        {trending.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.images?.[0]?.image_url}
          />
        ))}
      </div>
    </div>
  );
}