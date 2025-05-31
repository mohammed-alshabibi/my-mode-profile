export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-500 mb-10">
          Have a question, opportunity, or just want to connect? Send me a message!
        </p>

        <form
  action="https://formspree.io/f/xwpbeqkb" // <-- replace this!
  method="POST"
  className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow"
>

          <div className="text-left">
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
            name="name"
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Your name"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
            name="email"
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="message" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
            name="message"
              id="message"
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-2 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
