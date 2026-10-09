export default function About() {
  return (
    <main className="min-h-screen bg-gray-500 py-24 px-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          About Giggy
        </h1>

        <p className="text-lg leading-8 text-gray-700">
          Giggy is a modern URL shortening platform built with Next.js,
          Tailwind CSS, and MongoDB.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-gray-400 shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Fast
            </h2>

            <p>
              Create short links instantly with high performance.
            </p>
          </div>

          <div className="bg-gray-400 shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Secure
            </h2>

            <p>
              Your URLs are stored safely with reliable backend technology.
            </p>
          </div>

          <div className="bg-gray-400 shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Analytics
            </h2>

            <p>
              Track clicks and monitor your shortened links.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}