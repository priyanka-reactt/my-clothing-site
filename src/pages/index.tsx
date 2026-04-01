import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-rose-100 sm:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-pink-600">
            Women&apos;s Fashion
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Style that feels as good as it looks.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
            Discover curated clothing collections designed for comfort, elegance, and confidence.
            Explore fresh arrivals, timeless staples, and limited seasonal drops.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-pink-700"
            >
              Browse New Arrivals
            </button>
            <button
              type="button"
              className="rounded-full border border-pink-200 px-6 py-3 text-sm font-medium text-pink-700 transition hover:bg-pink-50"
            >
              View Collections
            </button>
          </div>
        </section>

        <section id="collections" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Dresses", "Blazers", "Essentials"].map((item) => (
            <article key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rose-100">
              <h2 className="text-xl font-semibold text-gray-900">{item}</h2>
              <p className="mt-2 text-sm text-gray-600">
                Premium fabrics and flattering fits tailored for your everyday wardrobe.
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
