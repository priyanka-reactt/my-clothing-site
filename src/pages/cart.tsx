import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/data/products";
import { loadCart, persistCart, type CartLine } from "@/lib/cart-storage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const skipNextPersist = useRef(true);

  useEffect(() => {
    setCart(loadCart());
    skipNextPersist.current = true;
  }, []);

  useEffect(() => {
    if (skipNextPersist.current) {
      skipNextPersist.current = false;
      return;
    }
    persistCart(cart);
  }, [cart]);

  const cartRows = useMemo(() => {
    return cart
      .map((line) => {
        const product = PRODUCTS.find((p) => p.id === line.productId);
        return product
          ? {
              product,
              quantity: line.quantity,
              lineTotal: product.price * line.quantity,
            }
          : null;
      })
      .filter((row) => row !== null);
  }, [cart]);

  const total = useMemo(() => cartRows.reduce((sum, row) => sum + row.lineTotal, 0), [cartRows]);

  function removeItem(productId: string) {
    setCart((prev) => prev.filter((l) => l.productId !== productId));
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-600">Cart</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Your items</h1>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
              Review your selections and adjust your cart before checkout.
            </p>
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-rose-100">
            Total: <span className="font-semibold text-pink-700">${total.toFixed(2)}</span>
          </div>
        </header>

        {cartRows.length === 0 ? (
          <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-rose-100">
            <h2 className="text-xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-sm text-gray-600">Add something you love from the shop.</p>
            <div className="mt-6">
              <Link
                href="/shop"
                className="inline-flex rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-pink-700"
              >
                Go to shop
              </Link>
            </div>
          </section>
        ) : (
          <section className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-rose-100">
            <div className="divide-y divide-rose-100">
              {cartRows.map((row) => (
                <div key={row.product.id} className="flex flex-wrap items-center justify-between gap-4 p-6">
                  <div className="flex min-w-[260px] items-center gap-4">
                    <Link
                      href={`/products/${row.product.id}`}
                      className="relative h-16 w-16 overflow-hidden rounded-2xl bg-rose-50 ring-1 ring-rose-100"
                      aria-label={`View ${row.product.title}`}
                    >
                      <Image src={row.product.imageSrc} alt={row.product.imageAlt} fill className="object-cover" />
                    </Link>

                    <div className="space-y-1">
                      <Link href={`/products/${row.product.id}`} className="font-semibold text-gray-900 hover:text-pink-700">
                        {row.product.title}
                      </Link>
                      <p className="text-sm text-gray-600">Qty: {row.quantity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-pink-700">${row.lineTotal.toFixed(2)}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(row.product.id)}
                      className="rounded-full border border-pink-200 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 bg-rose-50/60 p-6">
              <Link href="/shop" className="text-sm font-medium text-pink-700 hover:text-pink-800">
                ← Continue shopping
              </Link>
              <div className="text-sm font-medium text-gray-700">
                Cart total: <span className="font-semibold text-pink-700">${total.toFixed(2)}</span>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
