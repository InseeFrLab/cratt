import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cratt",
  description: "<3",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>
      <body className={inter.className}>
            {children}
      </body>
    </html>
  );
}
