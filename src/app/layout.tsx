import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
  Plus_Jakarta_Sans,
  // Playfair_Display,
  // DM_Sans,
  // Lora,
  // Bebas_Neue,
  // Source_Code_Pro,
} from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
// const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
// const dmSans = DM_Sans({ subsets: ["latin"] });
// const lora = Lora({ subsets: ["latin"] });
// const bebasNeue = Bebas_Neue({
//   weight: "400", // only valid weight
//   subsets: ["latin"], // required
//   display: "swap", // optional but recommended for better performance
//   variable: "--font-bebas",
// });
// const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your website",
  description: "Your description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased flex flex-col items-center volt`}
      >
        <Header />
        {children}
        <hr className="w-[80%]" />
        <Footer />
      </body>
    </html>
  );
}
