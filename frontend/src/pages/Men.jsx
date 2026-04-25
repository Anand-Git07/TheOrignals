import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Men() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);

  useEffect(() => {
    API.get("products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // filter men products
  let filtered = products.filter(
    (p) => p.category?.trim() === "Men"
  );

  // category filter
  if (categoryFilter.length > 0) {
    filtered = filtered.filter((p) =>
      categoryFilter.some((c) =>
        p.name.toLowerCase().includes(c.toLowerCase())
      )
    );
  }

  return (
    <div className="flex">

      {/* RIGHT SIDE FILTER PANEL */}
      <div className="w-64 p-6 border-r hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* CATEGORY */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          {["T-shirt", "Shirt", "Hoodie", "Joggers"].map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked)
                    setCategoryFilter([...categoryFilter, item]);
                  else
                    setCategoryFilter(categoryFilter.filter((c) => c !== item));
                }}
              />
              <span className="ml-2">{item}</span>
            </div>
          ))}
        </div>

        {/* SIZE */}
        <div>
          <h3 className="font-semibold mb-2">Sizes</h3>
          {["S", "M", "L", "XL"].map((size) => (
            <div key={size}>
              <input type="checkbox" />
              <span className="ml-2">{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">
          Clothes for Men ({filtered.length} Products)
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.images?.[0]?.image_url}
              rating={4.5}
            />
          ))}
        </div>
      </div>

    </div>
  );
}