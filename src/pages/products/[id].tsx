import Navbar from "@/components/Navbar";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const productId = Array.isArray(id) ? id[0] : id;
  const product = typeof productId === "string" ? PRODUCTS.find((p) => p.id === productId) : undefined;

  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/shop" className="text-sm font-medium text-pink-700 hover:text-pink-800">
            ← Back to shop
          </Link>
        </div>

        {!router.isReady ? (
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-rose-100">
            <p className="text-sm text-gray-600">Loading…</p>
          </div>
        ) : !product ? (
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-rose-100">
            <h1 className="text-2xl font-semibold">Product not found</h1>
            <p className="mt-2 text-sm text-gray-600">Try going back to the shop and selecting a product.</p>
          </div>
        ) : (
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-rose-100">
              <div className="relative aspect-4/5 bg-rose-50">
                <Image src={product.imageSrc} alt={product.imageAlt} fill className="object-cover" />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-rose-100">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-600">Product</p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{product.title}</h1>
              <p className="mt-4 text-lg font-semibold text-pink-700">${product.price.toFixed(2)}</p>
              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">{product.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-pink-700"
                >
                  Add to cart in Shop
                </Link>
                <Link
                  href="/shop"
                  className="rounded-full border border-pink-200 px-6 py-3 text-sm font-medium text-pink-700 transition hover:bg-pink-50"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

