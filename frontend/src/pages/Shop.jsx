import { useEffect, useState } from "react";
import API from "../services/api";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("products/")
      .then((res) => {
        console.log("API DATA:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Men</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 hover:shadow-xl transition"
          >
            <img
              src={
                product.images?.length > 0
                  ? product.images[0].image_url
                  : "https://via.placeholder.com/300"
              }
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-3"
            />

            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">₹{product.price}</p>

            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}