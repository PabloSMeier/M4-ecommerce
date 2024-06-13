"use client";
// contexto global de menú hamburguesa
import { useHamburgerMenu } from "@/context/MenuContext";
// contexto global de usuario
import { useUser } from "@/context/UserContext";
// alerta personalizada
import { showErrorAlert } from "@/helpers/alert.helper/alert.helper";
// enrutador de next
import { useRouter } from "next/navigation";

export const CartLink: React.FC = () => {
  const { userData } = useUser();
  const { closeMenu } = useHamburgerMenu();
  const router = useRouter();

  const handleOnClick = () => {
    if (userData?.token) {
      router.push("/cart");
      closeMenu();
    } else {
      showErrorAlert("Not logged", "You must be logged to see your cart.");
      router.push("/login");
      closeMenu();
    }
  };
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleOnClick}
        className="flex items-center justify-center h-[4vh] w-[4vh] sm:h-[6vh] sm:w-[6vh] md:h-[7.5vh] md:w-[7.5vh]"
      >
        <svg
          className="stroke-semidark hover:stroke-secondary h-[56px] w-[56px] fill-none "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </button>
    </div>
  );
};

export default CartLink;
