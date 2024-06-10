/* eslint-disable @next/next/no-img-element */
"use client";
// Link de next
import Link from "next/link";
// contexto global de usuario
import { useUser } from "../../context/UserContext";
// hooks de estado y efecto
import { useEffect, useState } from "react";
// interfaz de orden
import { IOrder } from "@/Interfaces";
// función para obtener ordenes de usuario
import { getOrders } from "@/helpers/orders.helper";

export const Dashboard = () => {
  const { user, userData } = useUser();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [ordersOpen, setOrdersOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const ordersResponse = await getOrders(userData?.token!);
      setOrders(ordersResponse);
    };
    userData?.token && fetchData();
  }, [userData?.token]);

  const toggleOrdersOpen = () => {
    setOrdersOpen(!ordersOpen);
  };

  return (
    <div className="w-screen min-h-[70vh] text-light flex justify-center items-start bg-primary py-8 px-12 mt-[10vh] md:mt-[17vh] ">
      {!user ? (
        <p>You are not logged.</p>
      ) : (
        <div className="min-w-[70vw] lg:min-w-[50vw] lg:max-w-[60vw] min-h-[30vh] shadow-md shadow-light hover:shadow-secondary bg-tertiary p-8 rounded-xl flex flex-col justify-between">
          <div className="md:pl-4">
            <p className="uppercase font-black text-2xl">{user.name}</p>
            <div className="mt-4 pl-2 space-y-2">
              <p>
                <strong>Email: </strong>
                {user.email}
              </p>
              <p>
                <strong>Address: </strong> {user.address}
              </p>
              <p>
                <strong>Phone: </strong> {user.phone}
              </p>
              {orders.length > 0 && (
                <div className="flex flex-row space-x-1 items-center">
                  <p>
                    <strong>Purchases </strong>
                  </p>
                  <button onClick={toggleOrdersOpen}>
                    {ordersOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 stroke-light fill-none"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 stroke-light fill-none"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
              {orders?.length > 0 ? null : (
                <h2>You haven´t purchased anything yet.</h2>
              )}
            </div>
          </div>
          {orders?.length > 0 ? (
            ordersOpen &&
            orders?.map((order) => {
              return (
                <div key={order.id}>
                  <div>
                    {order.products.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="flex flex-col space-y-4 md:space-y-0 md:flex-row p-4 border border-light rounded-lg m-4 hover:text-semilight hover:border-secondary"
                        >
                          <img
                            className="rounded-lg max-h-40 md:max-h-52"
                            src={product.image}
                            alt=""
                          />
                          <div className="flex flex-col px-4 py-1">
                            <p className="font-extrabold mb-5">
                              {product.name}{" "}
                            </p>
                            <p className="text-secondary ml-2 mb-3 font-semibold">
                              ${product.price}{" "}
                            </p>
                            <p className=" ml-2 mb-3 font-semibold">
                              {new Date(order.date).toLocaleString()}{" "}
                            </p>

                            <p className=" ml-2 mb-3 font-semibold">
                              Status: {order.status}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-end justify-end mt-6">
              <Link href="/" className="btn-primary">
                Buy now!
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
