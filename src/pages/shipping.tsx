import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            LuxeHer Shipping
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Shipping Information
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We want your LuxeHer shopping experience to be simple and
            stress-free. Here&apos;s everything you need to know about
            shipping and delivery.
          </p>
        </section>

        {/* Shipping Cards */}
        <section className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
            <div className="text-3xl">🚚</div>

            <h2 className="mt-4 text-xl font-semibold">
              Standard Shipping
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Standard shipping is available on all eligible orders. Your
              order will be carefully packed and prepared for delivery.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-900">
              Estimated delivery: 3–7 business days
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
            <div className="text-3xl">✨</div>

            <h2 className="mt-4 text-xl font-semibold">
              Free Shipping
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Enjoy free shipping when your order total reaches our free
              shipping threshold.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-900">
              Free shipping on orders over $50
            </p>
          </div>
        </section>

        {/* Shipping Details */}
        <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-2xl font-semibold">
            Shipping Details
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Order Processing
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Orders are usually processed within 1–2 business days.
                Once your order has been shipped, you will receive
                delivery information when available.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Delivery Times
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Delivery times may vary depending on your location,
                shipping method, weekends, and public holidays.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Shipping Address
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Please make sure your shipping address is correct before
                completing your order. We may not be able to change the
                address after an order has been shipped.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Delayed Orders
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                If your order is taking longer than expected, please
                contact our support team and we&apos;ll be happy to help.
              </p>
            </div>
          </div>
        </section>

        {/* Help */}
        <section className="mt-8 rounded-2xl bg-gray-900 p-8 text-center text-white">
          <p className="text-sm font-medium text-pink-300">
            Need Help?
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Have a question about your order?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300">
            Our customer support team is here to help with shipping,
            delivery, and order questions.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-500"
          >
            Contact Us
          </Link>
        </section>

        {/* Back to Shop */}
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="text-sm font-semibold text-pink-600 transition hover:text-pink-700"
          >
            ← Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}