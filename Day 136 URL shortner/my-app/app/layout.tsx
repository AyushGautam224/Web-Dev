import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Giggy",
  description: "Modern URL Shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main className="pt-20">
          {children}
        </main>

      </body>
    </html>
  );
}