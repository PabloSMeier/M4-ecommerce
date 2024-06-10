"use client";

// componente BarMenu
import BarMenu from "../barMenu";
// contexto global de hamburguesa
import { useHamburgerMenu } from "@/context/MenuContext";

export const BurgerMenu: React.FC = () => {
  const { Open, toggleMenu, closeMenu } = useHamburgerMenu();

  return (
    <div className="flex items-center justify-center">
      {Open ? <BarMenu /> : null}
      <button onClick={toggleMenu} className="focus:outline-none z-10">
        {Open ? (
          <svg
            className="w-10 h-10 transition duration-300"
            fill="none"
            stroke="#FF204E"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="6"
              y1="18"
              x2="18"
              y2="6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            className="w-10 h-10 transition duration-300"
            fill="none"
            stroke="#A0153E"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
