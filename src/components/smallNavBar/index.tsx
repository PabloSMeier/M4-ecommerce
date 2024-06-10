"use client";
// next Image
import Image from "next/image";
// next Link
import Link from "next/link";
// componente menu hamburguesa
import { BurgerMenu } from "../burgerMenu";
// componente carrito
import CartLink from "../cartLink";
// contexto menú hamburguesa
import { useHamburgerMenu } from "@/context/MenuContext";

export const SmallNavBar: React.FC = () => {
  const { closeMenu } = useHamburgerMenu();
  return (
    <div className="h-[10vh] fixed top-0 left-0 w-full z-50 bg-tertiary px-1 flex justify-center md:hidden md:absolute shadow-md shadow-semidark mb-6">
      <div className="w-full p-1 grid grid-cols-6 items-center">
        <Link
          onClick={closeMenu}
          href="/"
          className="col-span-1 block relative w-[9vh] h-[9vh]"
        >
          <Image src="/HS.png" alt="logo" layout="fill" objectFit="cover" />
        </Link>
        <div className="col-span-3 flex items- center justify-center">
          <input
            className="w-4/5 text-xs bg-primary h-7 rounded-2xl outline-0 px-4 shadow-md focus:ring focus:ring-secondary   shadow-secondary  focus:shadow-lg focus:shadow-secondary"
            type="search"
            placeholder="Search..."
          ></input>
        </div>
        <CartLink />
        <BurgerMenu />
      </div>
    </div>
  );
};

export default SmallNavBar;
