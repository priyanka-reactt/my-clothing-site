
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage(
      "Message sent successfully! Thank you for contacting LuxeHer. We'll get back to you soon."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            We're Here for You
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Have a question about your order, products, shipping, or returns?
            Our team would love to hear from you.
          </p>
        </section>

        {/* Contact Content */}
        <section className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9 lg:col-span-3">
            <div>
              <p className="text-sm font-medium text-pink-600">
                Contact us
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Send us a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form below and our support team will get back to
                you as soon as possible.
              </p>
            </div>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
                />
              </div>

              {successMessage && (
                <p
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700"
                >
                  {successMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-600 sm:w-auto sm:min-w-40"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="rounded-2xl bg-gray-900 p-7 text-white shadow-sm sm:p-9 lg:col-span-2">
            <p className="text-sm font-medium text-pink-300">
              LuxeHer Support
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              We're happy to help.
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-300">
              Whether you need help with an order or simply have a question,
              feel free to reach out to us.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-300">
                  @
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    support@luxeher.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-300">
                  ☎
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-300">
                  ◷
                </div>

                <div>
                  <h3 className="font-semibold">Customer Support</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    Monday - Saturday
                    <br />
                    10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                LuxeHer
              </p>

              <p className="mt-2 text-sm text-gray-300">
                Style that feels as good as it looks.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
