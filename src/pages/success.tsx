import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Navbar />

      <main className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-3xl font-bold text-pink-700">
          🎉 Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with us 💖
        </p>

        <Link
          href="/shop"
          className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-full"
        >
          Continue Shopping
        </Link>
      </main>
    </div>
  );
}