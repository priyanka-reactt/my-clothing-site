import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { loadCart } from "@/lib/cart-storage";

type CartLine = {
  productId: string;
  quantity: number;
};

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  lineTotal: number;
};

export default function CheckoutPage() {
  const router = useRouter();

  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const lines: CartLine[] = loadCart();

    const rows = lines
      .map((line) => {
        const product = PRODUCTS.find(
          (p) => p.id === line.productId
        );

        if (!product) {
          return null;
        }

        return {
          ...product,
          quantity: line.quantity,
          lineTotal: product.price * line.quantity,
        };
      })
      .filter((item): item is CartItem => item !== null);

    setCartItems(rows);

    const sum = rows.reduce(
      (acc, item) => acc + item.lineTotal,
      0
    );

    setTotal(sum);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    localStorage.removeItem("luxeher_cart_v1");

    window.dispatchEvent(new Event("cartUpdated"));

    router.push("/success");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            LuxeHer Checkout
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Complete Your Order
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
            Enter your details below to complete your LuxeHer order.
          </p>
        </section>

        {/* Checkout Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Customer Information */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9 lg:col-span-3"
          >
            <h2 className="text-2xl font-semibold">
              Customer Information
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Please enter your contact and delivery details.
            </p>

            <div className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Shipping Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  rows={4}
                  required
                  placeholder="Enter your complete delivery address"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* City + State */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Enter your city"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    State
                  </label>

                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    placeholder="Enter your state"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                  />
                </div>
              </div>

              {/* PIN */}
              <div>
                <label
                  htmlFor="pin"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  PIN Code
                </label>

                <input
                  id="pin"
                  name="pin"
                  type="text"
                  inputMode="numeric"
                  required
                  placeholder="Enter PIN code"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label
                  htmlFor="payment"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Payment Method
                </label>

                <select
                  id="payment"
                  name="payment"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                >
                  <option value="" disabled>
                    Select payment method
                  </option>
                  <option value="cod">
                    Cash on Delivery
                  </option>
                  <option value="card">
                    Credit / Debit Card
                  </option>
                  <option value="upi">
                    UPI
                  </option>
                </select>
              </div>

              {/* Place Order */}
              <button
                type="submit"
                className="w-full rounded-xl bg-pink-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-pink-700"
              >
                Place Order
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                This demo checkout does not process real payments.
              </p>
            </div>
          </form>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9 lg:col-span-2">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-gray-900">
                      ${item.lineTotal.toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  Your cart is empty.
                </p>
              )}
            </div>

            <div className="mt-6 border-t border-gray-100 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-gray-600">
                  Total
                </span>

                <span className="text-xl font-bold text-pink-700">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-rose-50 p-4">
              <p className="text-sm font-medium text-gray-900">
                Secure Checkout
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-600">
                Your order details are reviewed before placing the
                order.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}