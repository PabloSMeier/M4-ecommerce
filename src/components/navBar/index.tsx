"use client";
// pathname de next navigation
import { usePathname } from "next/navigation";
// navBar para pantalla grande
import BigNavBar from "../bigNavBar";
// navBar para pantalla chica
import SmallNavBar from "../smallNavBar";

const NavBar: React.FC = () => {
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
    <div>
      {!notFound && <BigNavBar />}
      {!notFound && <SmallNavBar />}
    </div>
  );
};

export default NavBar;
