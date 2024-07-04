"use client";

import { useUser } from "@/context/UserContext";
import { showErrorAlert } from "@/helpers/alert.helper/alert.helper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Favourites: React.FC = () => {
  const { userData } = useUser();
  console.log("userData:", userData);
  const router = useRouter();
  let usuarioLogeado: any;
  useEffect(() => {
    setTimeout(() => {
      usuarioLogeado = userData?.token;
    }, 3000);
    if (usuarioLogeado) {
      return;
    } else {
      showErrorAlert("You must be logged to see your favourites.");
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <h1 className="text-light">You are in your favourites</h1>
    </div>
  );
};
export default Favourites;
