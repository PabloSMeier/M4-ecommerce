/* eslint-disable @next/next/no-img-element */
"use client";
// interfaz de producto
import { IProduct } from "@/Interfaces";
// contexto global de usuario
import { useUser } from "@/context/UserContext";
// alertas personalizadas
import {
  showConfirmationAlert,
  showSuccessAlert,
} from "@/helpers/alert.helper/alert.helper";
// funcion de crear orden
import { createOrder } from "@/helpers/orders.helper";
// hooks de estado y efecto
import { useEffect, useState } from "react";

export const Cart: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { userData } = useUser();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalcart = 0;
      storedCart?.map((item: IProduct) => {
        totalcart = totalcart + item.price;
      });
      setTotal(totalcart);
      setCart(storedCart);
    }
  }, []);

  const handleClick = async () => {
    const idProducts = new Set(cart.map((product) => product.id));
    await createOrder(Array.from(idProducts), userData?.token!);
    showSuccessAlert("Successfull purchase", `Total: $${total}`);
    setCart([]);
    setTotal(0);
    localStorage.setItem("cart", "[]");
  };

  const handleDelete = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    const updatedTotal = updatedCart.reduce(
      (acc, product) => acc + product.price,
      0
    );

    setCart(updatedCart);
    setTotal(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleEmpty = () => {
    showConfirmationAlert(
      "Are you sure?",
      "You will delete everything in your cart",
      () => {
        setCart([]);
        setTotal(0);
        localStorage.setItem("cart", "[]");
      }
    );
  };

  return (
    <div className="w-screen bg-primary min-h-[75vh] rounded-xl text-light py-8 px-3 flex items-start justify-center mt-[10vh] md:mt-[17vh]">
      <div className="min-w-[70vw] lg:min-w-[50vw] lg:max-w-[60vw] shadow-md shadow-light hover:shadow-secondary rounded-xl flex flex-col p-8 gap-y-4 bg-tertiary">
        <h1 className="font-black text-xl">MY CART</h1>
        {cart?.length > 0 ? (
          cart?.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col md:flex-row space-y-3 items-center md:items-start p-4 border border-light rounded-lg m-4 hover:text-semilight hover:border-secondary"
              >
                <div className="md:hidden md:absolute h-full w-full flex relative justify-end items-start">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-light hover:text-secondary text-lg  rounded-full h-7 w-7 flex items-start justify-end"
                  >
                    x
                  </button>
                </div>
                <img
                  className="h-auto w-auto md:h-[30vh] md:w-[30vh] rounded-lg"
                  src={product.image}
                  alt={product.name}
                />
                <div className="flex flex-col px-4 py-1 w-full">
                  <p className="font-extrabold mb-5">{product.name} </p>
                  <p className="text-secondary ml-2 mb-3 font-semibold">
                    Price: ${product.price}
                  </p>
                </div>
                <div className="hidden absolute h-full md:flex md:relative justify-end items-start">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-light text-xl hover:text-secondary hover:border-secondary border rounded-full h-7 w-7 flex items-center justify-center"
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <p>No products yet.</p>
          </div>
        )}
        {cart.length > 0 ? (
          <div className="p-2 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 items-end md:items-center  text-secondary">
            <p className="text-secondary font-semibold md:hidden md:absolute ">
              Total: ${total}{" "}
            </p>
            <button onClick={handleEmpty} className="btn-primary">
              Empty cart
            </button>
            <div className="flex flex-row items-center md:space-x-6">
              <p className="text-secondary font-semibold hidden absolute md:block md:relative">
                Total: ${total}{" "}
              </p>
              <button onClick={handleClick} className="btn-primary">
                Pay
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
