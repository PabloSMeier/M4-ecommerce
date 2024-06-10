"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// contexto global de menu hamburguesa
import { useHamburgerMenu } from "@/context/MenuContext";
//interfaz de producto
import { IProduct } from "../../Interfaces";
// Link de next
import Link from "next/link";

const Card: React.FC<IProduct> = ({ name, price, image, stock, href }) => {
  const { closeMenu } = useHamburgerMenu();
  return (
    <Link
      onClick={closeMenu}
      href={href!}
      className="bg-tertiary space-y-2 pb-2 max-h-fit max-w-fit flex flex-col items-center justify-start border border-light hover:border-secondary text-light shadow-md shadow-light rounded-lg hover:shadow-lg hover:shadow-secondary"
    >
      <img className="rounded-t-lg max-h-52 " src={image} />
      <h2 className="text-center">
        <strong>{name}</strong>
      </h2>
      <h3>
        <strong>Price: </strong>${price}
      </h3>
    </Link>
  );
};

export default Card;
