import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
        
        {/* ✅ Success Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-100">
          <span className="text-3xl text-pink-600">✓</span>
        </div>

        {/* ✅ Heading */}
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Order Placed Successfully 🎉
        </h1>

        {/* ✅ Message */}
        <p className="mt-4 max-w-md text-gray-600">
          Thank you for shopping with LuxeHer. Your order has been placed and will be delivered soon.
        </p>

        {/* ✅ Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/shop"
            className="rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700"
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="rounded-full border border-pink-200 px-6 py-3 text-sm font-medium text-pink-700 hover:bg-pink-50"
          >
            Go Home
          </Link>
        </div>

      </main>
    </div>
  );
}