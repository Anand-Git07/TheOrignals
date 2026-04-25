import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl 
      bg-black/80 backdrop-blur-lg border border-gray-700 
      shadow-[0_0_15px_rgba(255,255,255,0.1)]">

        {/* Logo */}
        <h1 className="text-white text-xl font-bold tracking-wide">
          The Originals
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/men" className="hover:text-white transition">MEN</Link>
          <Link to="/women" className="hover:text-white transition">WOMEN</Link>
          <Link to="/cart" className="hover:text-white transition">Cart</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition">Login</button>
          
          <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Glow Border Effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
      border border-transparent 
      bg-gradient-to-r from-transparent via-white/20 to-transparent 
      opacity-40 blur-sm"></div>

    </div>
  );
}