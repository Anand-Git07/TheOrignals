export default function ProductCard({name, price}){
return(
<div className="border p-4 hover:shadow-lg transition">
<div className="h-40 bg-gray-200 mb-3"></div>
<h2 className="font-semibold">{name}</h2>
<p className="text-gray-500">{price}</p>
<button className="mt-2 bg-black text-white px-3 py-1">Add</button>
</div>
)
}