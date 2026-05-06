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
      ? { ...product, imageSrc: override.src, imageAlt: override.alt }
      : product;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">

        {/* HERO */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold">
              Style that feels as good as it looks.
            </h1>
            <p className="mt-4 text-gray-600">
              Discover modern fashion made for confidence.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/shop"
                className="bg-pink-600 text-white px-6 py-3 rounded-full"
              >
                Shop Now
              </Link>
              <Link
                href="#categories"
                className="border px-6 py-3 rounded-full"
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

          <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dresses",
                image: "/products/posing.jpg",
              },
              {
                title: "Blazers",
                image: "/products/two-girls-red-coats-models.jpg",
              },
              {
                title: "Essentials",
                image: "/products/stylish-woman-spending-time-summer-field.jpg",
              },
            ].map((cat) => (
              <div key={cat.title} className="bg-white p-4 rounded-xl shadow">
                <div className="relative h-[220px] w-full">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 font-medium">{cat.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Featured Products</h2>

          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-xl shadow">
                
                {/* ✅ IMAGE FIXED */}
                <div className="relative h-[300px] w-full bg-white">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <h3 className="mt-3 font-semibold">{product.title}</h3>
                <p className="text-pink-600 font-medium">
                  ${product.price}
                </p>

                <Link
                  href={`/products/${product.id}`}
                  className="block mt-3 text-center bg-pink-600 text-white py-2 rounded-full"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST */}
        <section className="mt-16 grid grid-cols-3 gap-4 text-center">
          <div>🚚 Free Delivery</div>
          <div>🔁 Easy Returns</div>
          <div>🔒 Secure Payment</div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-16 p-6 text-center border-t">
        <p>© 2026 LuxeHer</p>
      </footer>
    </div>
  );
}