import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Returns() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            LuxeHer Returns
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Returns &amp; Exchanges
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We want you to feel confident in every LuxeHer purchase.
            Here&apos;s what you need to know about returns and exchanges.
          </p>
        </section>

        {/* Return Policy */}
        <section className="mt-14 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-2xl font-semibold">
            Our Return Policy
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                7-Day Returns
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Eligible items can be returned within 7 days of delivery.
                Items must be unused and returned in their original
                condition.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Item Condition
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Items should be unworn, unwashed, and free from damage.
                Please keep the original tags and packaging with the
                item.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Exchanges
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                If you would like a different size or eligible replacement,
                please contact our support team. Exchanges are subject to
                product availability.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Refunds
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Once an approved return is received and checked, the
                applicable refund will be processed according to the
                original payment method.
              </p>
            </div>
          </div>
        </section>

        {/* Not Eligible */}
        <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-2xl font-semibold">
            Items That May Not Be Eligible
          </h2>

          <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
            <li>• Items that have been worn or washed</li>
            <li>• Items without original tags</li>
            <li>• Items damaged after delivery</li>
            <li>• Items returned after the return period</li>
          </ul>
        </section>

        {/* Help */}
        <section className="mt-8 rounded-2xl bg-gray-900 p-8 text-center text-white">
          <p className="text-sm font-medium text-pink-300">
            Need Help?
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Want to start a return?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300">
            Contact our support team with your order details and we&apos;ll
            help you with the next steps.
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
