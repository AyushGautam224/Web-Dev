export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-400 py-24 px-6">

      <div className="max-w-3xl mx-auto bg-gray-500 rounded-xl shadow-lg p-10">

        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-4"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border rounded-lg p-4"
          ></textarea>

          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700">
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}