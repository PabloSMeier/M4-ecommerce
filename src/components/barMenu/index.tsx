"use client";
// contexto global de menu hamburguesa
import { useHamburgerMenu } from "@/context/MenuContext";
// contexto global de usuario
import { useUser } from "@/context/UserContext";
// alertas personalizadas
import {
  showConfirmationAlert,
  showErrorAlert,
} from "@/helpers/alert.helper/alert.helper";
// Link de next
import Link from "next/link";
// enrutador de next
import { useRouter } from "next/navigation";

const BarMenu = () => {
  const { userData, logOut } = useUser();
  const router = useRouter();
  const { closeMenu } = useHamburgerMenu();

  const handleLogOut = () => {
    showConfirmationAlert(
      "Are you sure?",
      "If you have something in yor cart, it´ll be deleted.",
      () => {
        localStorage.setItem("cart", "[]");
        logOut();
        closeMenu();
        router.push("/");
      },
      () => {
        showErrorAlert("Cancelled", "Cancelled logout");
      }
    );
  };
  return (
    <div className="absolute top-[8.5vh] md:top-[17vh] right-0 flex flex-row items-center justify-evenly h-[10vh] w-full border-t-2 md:border-semilight border-secondary bg-tertiary shadow-md shadow-secondary rounded-b-lg p-6 text-semilight  font-black">
      <div className="absolute md:hidden bg-tertiary top-[-6px] right-[8.6vw] w-[10px] h-[10px] border-t-2 border-l-2 border-secondary rotate-45"></div>
      <button className="md:hidden md:absolute font-black hover:text-secondary">
        Categories
      </button>
      {userData?.token ? (
        <Link
          href="/dashboard"
          className="hover:text-secondary"
          onClick={closeMenu}
        >
          Dashboard
        </Link>
      ) : null}
      {!userData?.token ? (
        <Link
          href="/login"
          onClick={closeMenu}
          className="hover:text-secondary"
        >
          Login
        </Link>
      ) : (
        <button onClick={handleLogOut} className="hover:text-secondary">
          Logout
        </button>
      )}
    </div>
  );
};

export default BarMenu;
