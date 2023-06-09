import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const roboto = Poppins({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/favico.ico",
    apple: "/favico.ico",
  },
  title: "Amrtago",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
