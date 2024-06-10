// importaciones por defecto
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// navBar
import NavBar from "@/components/navBar";
// footer
import Footer from "@/components/footer";
// contexto global de usuario
import { UserProvider } from "../context/UserContext";
// contexto global de menu hamburguesa
import { HamburgerMenuProvider } from "@/context/MenuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry´s Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={inter.className}>
        <UserProvider>
          <HamburgerMenuProvider>
            <NavBar />
            {children}
            <Footer />
          </HamburgerMenuProvider>
        </UserProvider>
      </body>
    </html>
  );
}
