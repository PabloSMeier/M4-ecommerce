"use client";
// Image y Link de next
import Image from "next/image";
import Link from "next/link";
// pathname de next navigation
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();
  let notFound;

  if (
    pathname !== "/" &&
    pathname !== "/product" &&
    pathname !== "/cart" &&
    pathname !== "/dashboard" &&
    pathname !== "/login" &&
    pathname !== "/register" &&
    !/^\/product\/\d+$/.test(pathname)
  ) {
    notFound = true;
  } else {
    notFound = false;
  }
  return (
    <footer className="justify-self-end   text-secondary">
      {!notFound && (
        <div className="h-full px-2 py-8 w-full flex flex-row justify-evenly items-center bg-tertiary">
          <Link href="/">
            <Image src="/HS.png" alt="logo" width={100} height={100} />
          </Link>
          <p>Henry´s Store &copy; 2024</p>
          <p></p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
