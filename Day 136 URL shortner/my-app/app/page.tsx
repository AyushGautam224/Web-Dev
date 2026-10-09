import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-4xl">

        <h1 className="text-6xl font-extrabold text-gray-500">
          Shorten Your URLs
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Giggy helps you convert long URLs into clean, short, and shareable
          links within seconds.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link href="/shortener">
            <button className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
              Start Shortening
            </button>
          </Link>

          <Link href="/about">
            <button className="px-8 py-4 rounded-xl border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
              Learn More
            </button>
          </Link>

        </div>

      </div>
    </main>
  );
}