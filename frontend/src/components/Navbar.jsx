export default function Navbar(){
return(
<div className="flex justify-between p-5 bg-black text-white">
<h1 className="font-bold">The Originals</h1>
<div className="space-x-4">
<a href="/">Home</a>
<a href="/product">Shop</a>
<a href="/cart">Cart</a>
</div>
</div>
)
}