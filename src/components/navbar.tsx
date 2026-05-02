import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // 🔥 cart count load from localStorage
  useEffect(() => {
    function updateCartCount() {
      try {
        const raw = localStorage.getItem("luxeher_cart_v1");
        if (!raw) {
          setCartCount(0);
          return;
        }

        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
          setCartCount(0);
          return;
        }

        const total = parsed.reduce(
          (sum: number, item: { quantity?: number }) =>
            sum + (item.quantity || 0),
          0
        );

        setCartCount(total);
      } catch {
        setCartCount(0);
      }
    }

    updateCartCount();

    // optional (other tabs ke liye)
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide text-pink-700">
          LuxeHer
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-pink-600">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-pink-600">
            Shop
          </Link>
          <Link href="/cart" className="text-sm font-medium text-gray-700 hover:text-pink-600">
            Cart ({cartCount})
          </Link>
          <Link href="#new-arrivals" className="text-sm font-medium text-gray-700 hover:text-pink-600">
            New Arrivals
          </Link>
          <Link href="#collections" className="text-sm font-medium text-gray-700 hover:text-pink-600">
            Collections
          </Link>
          <Link href="#sale" className="text-sm font-medium text-gray-700 hover:text-pink-600">
            Sale
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-pink-600">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-pink-200 px-4 py-2 text-sm font-medium text-pink-700 hover:bg-pink-50">
            Sign In
          </button>
          <Link href="/shop" className="rounded-full bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700">
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-pink-50 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-pink-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/cart" onClick={() => setIsOpen(false)}>
              Cart ({cartCount})
            </Link>
            <Link href="#new-arrivals" onClick={() => setIsOpen(false)}>New Arrivals</Link>
            <Link href="#collections" onClick={() => setIsOpen(false)}>Collections</Link>
            <Link href="#sale" onClick={() => setIsOpen(false)}>Sale</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}