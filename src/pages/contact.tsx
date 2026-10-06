
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We&apos;d love to hear from you. Have a question about an order,
            product, shipping, or returns? Get in touch with us.
          </p>
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">Send Us a Message</h2>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-pink-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-pink-600"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-pink-600"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-pink-600"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-pink-600 px-6 py-3 font-medium text-white hover:bg-pink-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-gray-600">
                  support@luxeher.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-1 text-gray-600">
                  +1 (555) 123-4567
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Customer Support</h3>
                <p className="mt-1 text-gray-600">
                  Monday - Saturday, 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

