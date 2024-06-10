"use client";
// next Image
import Image from "next/image";
// next Link
import Link from "next/link";
// carrito
import CartLink from "../cartLink";
// contexto global de usuario
import { useUser } from "@/context/UserContext";
// menu extendible
import BarMenu from "../barMenu";
// contexto global de menu hamburguesa
import { useHamburgerMenu } from "@/context/MenuContext";

export const BigNavBar: React.FC = () => {
  const { userData } = useUser();
  const { Open, toggleMenu, closeMenu } = useHamburgerMenu();

  return (
    <div className="hidden absolute bg-tertiary text-xl w-full h-[17vh] p-4  md:fixed md:top-0 md:left-0 md:z-50 md:grid grid-cols-8 shadow-md shadow-semidark mb-6">
      {Open && <BarMenu />}
      <Link
        onClick={closeMenu}
        href="/"
        className="col-span-1 block relative h-[13vh] w-[13vh]"
      >
        <Image src="/HS.png" alt="logo" layout="fill" objectFit="cover" />
      </Link>
      <div className="col-span-5 flex items-center justify-center flex-col">
        <div className="w-full flex pl-4 mt-3 items-center justify-around h-3/5">
          <input
            className="bg-primary w-[50vw] h-8 rounded-2xl outline-0 px-4 shadow-md  shadow-secondary focus:ring focus:ring-secondary focus:shadow-lg focus:shadow-secondary"
            type="search"
            placeholder="Search..."
          ></input>
        </div>
        <div className="h-2/5 w-[50vw] px-4 flex items-end justify-between space-x-8 text-semidark font-black text-xl">
          <button className="hover:text-secondary ease-in-out duration-300 border-b-2 border-tertiary hover:border-b-secondary">
            Categories
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {userData ? (
          <button onClick={toggleMenu}>
            <svg
              className="w-[50px] h-[50px] stroke-semidark hover:stroke-secondary fill-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </button>
        ) : (
          <Link href="/login" className="btn-secondary lg:btn-primary">
            Login
          </Link>
        )}
      </div>
      <div className="flex static col-span-1 justify-center items-center">
        <CartLink />
      </div>
    </div>
  );
};

export default BigNavBar;
