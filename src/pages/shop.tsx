import Navbar from "@/components/Navbar";
import ProductCard from "@/components/product-card";
import { PRODUCTS, type Product } from "@/data/products";
import { useEffect, useMemo, useState } from "react";

type CartLine = {
  productId: string;
  quantity: number;
};

const CART_STORAGE_KEY = "luxeher_cart_v1";

function loadCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (line): line is CartLine =>
          typeof line === "object" &&
          line !== null &&
          "productId" in line &&
          "quantity" in line &&
          typeof (line as { productId?: unknown }).productId === "string" &&
          typeof (line as { quantity?: unknown }).quantity === "number",
      )
      .map((line) => ({ productId: line.productId, quantity: Math.max(1, Math.floor(line.quantity)) }));
  } catch {
    return [];
  }
}

function saveCart(lines: CartLine[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
}

export default function ShopPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const cartCount = useMemo(
    () => cart.reduce((sum, line) => sum + (Number.isFinite(line.quantity) ? line.quantity : 0), 0),
    [cart],
  );

  function handleAddToCart(product: Product) {
    setCart((prev) => {
      const idx = prev.findIndex((l) => l.productId === product.id);
      if (idx === -1) return [...prev, { productId: product.id, quantity: 1 }];
      return prev.map((l, i) => (i === idx ? { ...l, quantity: l.quantity + 1 } : l));
    });
    setRecentlyAddedId(product.id);
    window.setTimeout(() => setRecentlyAddedId((cur) => (cur === product.id ? null : cur)), 900);
  }

  const productIdsInCart = useMemo(() => new Set(cart.map((l) => l.productId)), [cart]);

  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-600">Shop</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">New season, timeless staples.</h1>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
              Curated pieces designed for comfort, elegance, and confidence.
            </p>
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-rose-100">
            Cart: <span className="font-semibold text-pink-700">{cartCount}</span>
          </div>
        </header>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              isInCart={recentlyAddedId === product.id || productIdsInCart.has(product.id)}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

