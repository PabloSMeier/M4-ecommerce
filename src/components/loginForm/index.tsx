"use client";
// hook de estado
import { useState } from "react";
// validación de login
import { validateLogin } from "@/helpers/validate.Login";
// Link de next
import Link from "next/link";
// post de login
import { login } from "@/helpers/auth.helper";
// enrutador de next
import { useRouter } from "next/navigation";
// contexto global de usuario
import { useUser } from "@/context/UserContext";
// interfaz de error de login
import { ILoginErrorProps } from "@/Interfaces";
// alertas personalizadas
import {
  showErrorAlert,
  showSuccessAlert,
} from "@/helpers/alert.helper/alert.helper";
// contexto menú hamburguesa
import { useHamburgerMenu } from "@/context/MenuContext";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { logIn } = useUser();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginErrorProps>({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { closeMenu } = useHamburgerMenu();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userLogging = {
      ...userData,
      [event.target.name]: event.target.value,
    };
    setuserData(userLogging);
    const validateErrors = validateLogin(userLogging);
    setErrors({ ...validateErrors });
    console.log(errors);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        // GUARDAR LA INFORMACION DEL USUARIO DE FORMA PERSISTENTE
        const user = await login(userData);

        logIn(user);
        showSuccessAlert("Successfull login");
        router.push("/");
      } catch (error: any) {
        throw new Error(error);
      }
    } else {
      showErrorAlert("Error!", "Please, complete all fields");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col py-14 px-8 bg-tertiary space-y-8 w-1/3 min-w-fit rounded-lg items-center"
    >
      <label className="flex flex-col w-full">
        <p className="text-secondary font-black text-lg">Email:</p>
        <input
          value={userData.email}
          name="email"
          className="default-input"
          placeholder="name@mail.com"
          type="email"
          onChange={handleInputChange}
        />
      </label>
      <div className="w-full">
        <label className="flex flex-col w-full">
          <p className="text-secondary font-black text-lg">Password:</p>
          <div className="w-full flex flex-row items-center">
            <input
              value={userData.password}
              name="password"
              className="default-input"
              placeholder="******"
              type={passwordVisible ? "text" : "password"}
              onChange={handleInputChange}
            />
            <button
              className="ml-2"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <svg
                  className="h-[30px] w-[30px] fill-none stroke-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              ) : (
                <svg
                  className="h-[30px] w-[30px] fill-none stroke-secondary "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                  <path d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>
        </label>
        <Link
          onClick={closeMenu}
          href="/register"
          className="text-semidark underline font-medium hover:text-secondary"
        >
          Not registered?
        </Link>
      </div>
      <button type="submit" className="btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
