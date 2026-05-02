import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Checkout
        </h1>

        <div className="mt-10 w-full max-w-md rounded-3xl bg-white px-8 py-12 text-center shadow-sm ring-1 ring-rose-100">
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">Checkout page coming soon</p>
        </div>
      </main>
    </div>
  );
}
