import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";

export const metadata = {
  title: "Blue Streaks India - Your Trusted Partner for Oils, Automobiles & Legal Services",
  description:
    "Blue Streaks India offers premium lubricants, automobile sales & service, legal consultancy, transport & cargo services, and financial solutions across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
