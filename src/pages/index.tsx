
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import { PRODUCTS } from "@/data/products";

export default function Home() {
  const featuredImageById: Record<string, { src: string; alt: string }> = {
    "blush-midi-dress": {
      src: "/products/image6.jpg",
      alt: "Two fashionable women in a spring look",
    },
    "tailored-blazer": {
      src: "/products/image7.jpg",
      alt: "Models wearing tailored coats",
    },
    "cream-knit-cardigan": {
      src: "/products/stylish-woman-spending-time-summer-field.jpg",
      alt: "Model outdoors in a soft, neutral outfit",
    },
    "rose-satin-skirt": {
      src: "/products/posing.jpg",
      alt: "Model posing in a modern outfit",
    },
    "ivory-essential-tee": {
      src: "/products/hips.jpg",
      alt: "Minimal outfit detail shot",
    },
    "wide-brim-hat": {
      src: "/products/isolated.jpg",
      alt: "Modern fashion look on a clean background",
    },
  };

  const featured = PRODUCTS.slice(0, 6).map((product) => {
    const override = featuredImageById[product.id];

    return override
      ? {
          ...product,
          imageSrc: override.src,
          imageAlt: override.alt,
        }
      : product;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* HERO */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold">Women&apos;s Fashion</h1>

            <p className="mt-4 text-2xl font-semibold">
              Style that feels as good as it looks.
            </p>

            <p className="mt-4 text-gray-600">
              Discover modern fashion made for confidence.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-pink-600 px-6 py-3 text-white"
              >
                Shop Now
              </Link>

              <Link
                href="#categories"
                className="rounded-full border px-6 py-3"
              >
                Categories
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] w-full">
            <Image
              src="/products/two-fashionable-young-women-casual-trendy-spring-coat-boots-with-heels-black-hat-stylish-handbag.jpg"
              alt="Hero"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="mt-16">
          <h2 className="text-2xl font-semibold">Categories</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dresses",
                image: "/products/posing.jpg",
                productId: "blush-midi-dress",
              },
              {
                title: "Blazers",
                image: "/products/two-girls-red-coats-models.jpg",
                productId: "tailored-blazer",
              },
              {
                title: "Essentials",
                image:
                  "/products/stylish-woman-spending-time-summer-field.jpg",
                productId: "ivory-essential-tee",
              },
            ].map((cat) => {
              const product = PRODUCTS.find((p) => p.id === cat.productId);

              return (
                <div
                  key={cat.title}
                  className="rounded-xl bg-white p-4 shadow"
                >
                  <div className="relative h-[500px] w-full bg-white">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-3 font-semibold">{cat.title}</h3>

                  <p className="font-medium text-pink-600">
                    ${product?.price}
                  </p>

                  <Link
  href={`/products/${cat.productId}`}
  className="mt-3 block rounded-full bg-pink-600 py-2 text-center text-white"
>
  View Details
</Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Featured Products</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <div
                key={product.id}
                className="rounded-xl bg-white p-4 shadow"
              >
                <div className="relative h-[500px] w-full bg-white">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-3 font-semibold">{product.title}</h3>

                <p className="font-medium text-pink-600">
                  ${product.price}
                </p>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-3 block rounded-full bg-pink-600 py-2 text-center text-white"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST */}
        <section className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">🚚</div>

            <h3 className="mt-3 font-semibold">Free Shipping</h3>

            <p className="mt-2 text-sm text-gray-600">
              Free shipping on orders over $50
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">🔁</div>

            <h3 className="mt-3 font-semibold">Easy Returns</h3>

            <p className="mt-2 text-sm text-gray-600">
              Easy 7-day returns
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">🔒</div>

            <h3 className="mt-3 font-semibold">Secure Payment</h3>

            <p className="mt-2 text-sm text-gray-600">
              Safe and secure checkout
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      
      ```tsx
{/* FOOTER */}
<footer className="mt-20 border-t border-pink-100 bg-rose-50">
  <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
    {/* Brand */}
    <div>
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight text-pink-600"
      >
        LuxeHer
      </Link>

      <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
        Modern women&apos;s fashion made for everyday confidence and
        effortless style.
      </p>

      <p className="mt-5 text-sm font-medium text-gray-800">
        Style that feels as good as it looks.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
        Quick Links
      </h3>

      <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600">
        <Link href="/" className="transition hover:text-pink-600">
          Home
        </Link>

        <Link href="/shop" className="transition hover:text-pink-600">
          Shop
        </Link>

        <Link href="/shop" className="transition hover:text-pink-600">
          New Arrivals
        </Link>

        <Link href="/#categories" className="transition hover:text-pink-600">
          Collections
        </Link>
      </div>
    </div>

    {/* Customer Care */}
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
        Customer Care
      </h3>

      <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600">
        <Link href="/contact" className="transition hover:text-pink-600">
          Contact Us
        </Link>

        <Link href="/shipping" className="transition hover:text-pink-600">
  Shipping Information
</Link>

<Link href="/returns" className="transition hover:text-pink-600">
  Returns & Exchanges
</Link>
      </div>
    </div>
  </div>

  <div className="border-t border-pink-100">
    <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-gray-500">
      © 2026 LuxeHer. All rights reserved.
    </div>
  </div>
</footer>




    </div>
  );
}
