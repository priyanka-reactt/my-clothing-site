import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold text-green-600 sm:text-4xl">
          🎉 Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with LuxeHer 💖
        </p>

        <Link
          href="/shop"
          className="mt-8 rounded-full bg-pink-600 px-6 py-3 text-white hover:bg-pink-700"
        >
          Continue Shopping
        </Link>
      </main>
    </div>
  );
}