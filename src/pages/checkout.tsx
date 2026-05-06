import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { loadCart } from "@/lib/cart-storage"; // ✅ missing import

type CartLine = {
  productId: string;
  quantity: number;
};

export default function CheckoutPage() {
  const router = useRouter();

  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]); // ✅ yaha hona chahiye

  // ✅ cart se total + items
  useEffect(() => {
    const lines: CartLine[] = loadCart();

    const rows = lines
      .map((line) => {
        const product = PRODUCTS.find((p) => p.id === line.productId);
        return product
          ? {
              ...product,
              quantity: line.quantity,
              lineTotal: product.price * line.quantity,
            }
          : null;
      })
      .filter(Boolean);

    setCartItems(rows);

    const sum = rows.reduce(
      (acc: number, item: any) => acc + item.lineTotal,
      0
    );
    setTotal(sum);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    localStorage.removeItem("luxeher_cart_v1");

    router.push("/success");
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-semibold sm:text-4xl">
          Checkout
        </h1>

        {/* ✅ Total */}
        <div className="mt-6 w-full max-w-md text-right">
          <p className="text-lg font-semibold text-pink-700">
            Total: ${total.toFixed(2)}
          </p>
        </div>

        {/* ✅ Order Summary */}
        <div className="mb-8 w-full max-w-md rounded-3xl bg-white p-6 shadow-sm ring-1 ring-rose-100">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          {cartItems.map((item: any) => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>${item.lineTotal.toFixed(2)}</span>
            </div>
          ))}

          <div className="mt-4 border-t pt-2 font-semibold text-pink-700">
            Total: ${total.toFixed(2)}
          </div>
        </div>

        {/* ✅ Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 w-full max-w-md rounded-3xl bg-white px-8 py-10 shadow-sm ring-1 ring-rose-100"
        >
          <div className="space-y-6">
            <input
              placeholder="Name"
              required
              className="w-full p-3 border rounded-xl"
            />
            <input
              placeholder="Email"
              required
              className="w-full p-3 border rounded-xl"
            />
            <textarea
              placeholder="Address"
              required
              className="w-full p-3 border rounded-xl"
            />

            <button className="w-full bg-pink-600 text-white py-3 rounded-full">
              Place Order
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}