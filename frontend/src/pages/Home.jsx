import ProductCard from '../components/ProductCard'

export default function Home(){
return(
<div>
<div className="h-[60vh] flex items-center justify-center bg-gray-100">
<h1 className="text-4xl font-bold">Style That Speaks</h1>
</div>

<h2 className="text-2xl p-6">Trending</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
<ProductCard name="Oversized Tee" price="₹999"/>
<ProductCard name="Hoodie" price="₹1999"/>
<ProductCard name="Joggers" price="₹1499"/>
</div>
</div>
)
}