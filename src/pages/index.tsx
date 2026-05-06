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
    return override ? { ...product, imageSrc: override.src, imageAlt: override.alt } : product;
  });

  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-rose-100">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-pink-600">
                Women&apos;s Fashion
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Style that feels as good as it looks.
              </h1>
              <p className="mt-5 max-w-xl text-base text-gray-600 sm:text-lg">
                Discover curated clothing collections designed for comfort, elegance, and confidence.
                Explore fresh arrivals, timeless staples, and limited seasonal drops.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-pink-700"
                >
                  Browse New Arrivals
                </Link>
                <Link
                  href="#categories"
                  className="rounded-full border border-pink-200 px-6 py-3 text-sm font-medium text-pink-700 transition hover:bg-pink-50"
                >
                  View Collections
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                  Free shipping over $50
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                  Easy 7-day returns
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                  New drops weekly
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-4xl bg-radial from-pink-200/70 via-rose-100/40 to-transparent blur-2xl" />
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl ring-1 ring-rose-100">
                <Image
                  src="/products/two-fashionable-young-women-casual-trendy-spring-coat-boots-with-heels-black-hat-stylish-handbag.jpg"
                  alt="Fashion models in a modern spring look"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-pink-900/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="mt-12">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-600">
                Categories
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Shop by mood, not rules.
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-medium text-pink-700 underline decoration-pink-200 underline-offset-4 hover:decoration-pink-400"
            >
              View all products
            </Link>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dresses",
                description: "Soft silhouettes for day-to-night.",
                imageSrc: "/products/posing.jpg",
                imageAlt: "Model wearing a dress in a modern look",
              },
              {
                title: "Blazers",
                description: "Tailored layers with a modern edge.",
                imageSrc: "/products/two-girls-red-coats-models.jpg",
                imageAlt: "Models wearing tailored outerwear",
              },
              {
                title: "Essentials",
                description: "Everyday staples you’ll rewear.",
                imageSrc: "/products/stylish-woman-spending-time-summer-field.jpg",
                imageAlt: "Minimal everyday outfit outdoors",
              },
            ].map((cat) => (
              <Link
                key={cat.title}
                href="/shop"
                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-rose-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-16/11 overflow-hidden bg-rose-50">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-pink-900/15 via-transparent to-transparent" />
                </div>
                <div className="space-y-1.5 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-700">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-600">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mt-14">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-600">
                Featured
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Best sellers, styled for you.
              </h2>
            </div>
            <Link
              href="/shop"
              className="rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50"
            >
              Shop now
            </Link>
          </header>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-rose-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative aspect-4/5 overflow-hidden bg-rose-50">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="text-base font-semibold leading-snug text-gray-900 hover:text-pink-700"
                    >
                      {product.title}
                    </Link>
                    <p className="shrink-0 text-sm font-semibold text-pink-700">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <p className="line-clamp-2 text-sm text-gray-600">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 rounded-full bg-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-pink-700"
                    >
                      View details
                    </Link>
                    <Link
                      href="/shop"
                      className="rounded-full border border-pink-200 px-5 py-2.5 text-sm font-medium text-pink-700 transition hover:bg-pink-50"
                    >
                      Shop
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="mt-14">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-rose-100 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Free delivery",
                  description: "Free shipping on orders over $50.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <path
                        d="M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 19a2 2 0 1 0 0.001 0ZM18 19a2 2 0 1 0 0.001 0Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Easy returns",
                  description: "7-day returns with quick refunds.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <path
                        d="M7 7h10a4 4 0 0 1 0 8H9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 11 5 15l4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Secure payment",
                  description: "Encrypted checkout you can trust.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <path
                        d="M7 10V8a5 5 0 0 1 10 0v2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 13.2v3.2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-50 text-pink-700 ring-1 ring-pink-100">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-14 border-t border-pink-100 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <p className="text-lg font-semibold tracking-wide text-pink-700">LuxeHer</p>
              <p className="max-w-sm text-sm text-gray-600">
                Minimal, modern essentials with a soft-pink finish. Designed to feel confident—every day.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-900">Shop</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-gray-600 hover:text-pink-700" href="/shop">
                    All products
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-pink-700" href="#categories">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-pink-700" href="/cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-900">Company</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-gray-600 hover:text-pink-700" href="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-pink-700" href="/">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-pink-700" href="/">
                    Shipping & returns
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-900">Social</p>
              <div className="flex items-center gap-3">
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-600 ring-1 ring-rose-100 transition hover:bg-pink-50 hover:text-pink-700"
                  href="#"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M7.5 3.5h9A4 4 0 0 1 20.5 7.5v9A4 4 0 0 1 16.5 20.5h-9A4 4 0 0 1 3.5 16.5v-9A4 4 0 0 1 7.5 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M17.2 6.8h.01"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-600 ring-1 ring-rose-100 transition hover:bg-pink-50 hover:text-pink-700"
                  href="#"
                  aria-label="X"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M6 18 18 6M10 6h8v8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-600 ring-1 ring-rose-100 transition hover:bg-pink-50 hover:text-pink-700"
                  href="#"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M14 8h3V5h-3a4 4 0 0 0-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-pink-100 pt-6 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} LuxeHer. All rights reserved.</p>
            <div className="flex gap-4">
              <Link className="hover:text-pink-700" href="/">
                Privacy
              </Link>
              <Link className="hover:text-pink-700" href="/">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
