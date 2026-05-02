import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function CheckoutPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // cart clear
    localStorage.removeItem("luxeher_cart_v1");

    // redirect
    router.push("/success");
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-md rounded-3xl bg-white px-8 py-10 shadow-sm ring-1 ring-rose-100"
        >
          <div className="space-y-6">
            <input placeholder="Name" className="w-full p-3 border rounded-xl" />
            <input placeholder="Email" className="w-full p-3 border rounded-xl" />
            <textarea placeholder="Address" className="w-full p-3 border rounded-xl" />

            <button className="w-full bg-pink-600 text-white py-3 rounded-full">
              Place Order
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}