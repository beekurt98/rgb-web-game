import "./globals.css";

export const metadata = {
  title: "Color Guess Game",
  description: "RGB color guessing game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
