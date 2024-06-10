"use client";
// hooks de estado y efecto
import { useEffect, useState } from "react";
// validación de registro
import { validateRegister } from "@/helpers/validateRegister";
// interfaz de errores de registro
import { IRegisterErrorsProps } from "@/Interfaces";
// post de registro
import { register } from "@/helpers/auth.helper";
// enrutador de next
import { useRouter } from "next/navigation";
// alertas personalizadas
import {
  showErrorAlert,
  showSuccessAlert,
} from "@/helpers/alert.helper/alert.helper";

export const RegisterForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<IRegisterErrorsProps>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    address: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        await register(user);
        showSuccessAlert("Registered successfully");
        router.push("/login");
      } catch (error: any) {
        throw new Error(error);
      }
    } else {
      showErrorAlert("Error!", "Please, complete all fields.");
    }
  };

  useEffect(() => {
    const errors = validateRegister(user);
    setErrors(errors);
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col py-14 px-8 bg-tertiary space-y-8 w-1/3 min-w-fit rounded-lg items-center"
    >
      <label className="flex flex-col w-full">
        <p className="text-secondary font-black text-lg">Email:</p>
        <input
          value={user.email}
          name="email"
          className="default-input"
          placeholder="name@mail.com"
          type="email"
          onChange={handleInputChange}
        />
        {errors.email && <p className=" text-red-800">{errors.email}</p>}
      </label>
      <label className="flex flex-col w-full">
        <p className="text-secondary font-black text-lg">Password:</p>
        <div className="w-full flex flex-row items-center">
          <input
            value={user.password}
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
        {errors.password && <p className=" text-red-800">{errors.password}</p>}
      </label>
      <label className="flex flex-col w-full">
        <p className="text-secondary font-black text-lg">
          Password confirmation:
        </p>
        <input
          value={user.confirmPassword}
          name="confirmPassword"
          className="default-input"
          placeholder="******"
          type={passwordVisible ? "text" : "password"}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <p className=" text-red-800">{errors.confirmPassword}</p>
        )}
      </label>
      <label className="flex flex-col w-full">
        <p className="text-secondary font-black text-lg">Name:</p>
        <input
          value={user.name}
          name="name"
          className="default-input"
          placeholder="Name"
          type="text"
          onChange={handleInputChange}
        />
        {errors.name && <p className=" text-red-800">{errors.name}</p>}
      </label>
      <label className="flex flex-col w-full">
        <p className="text-secondary font-black text-lg">Phone:</p>
        <input
          value={user.phone}
          name="phone"
          className="default-input"
          placeholder="+54 11 12345678"
          type="text"
          onChange={handleInputChange}
        />
        {errors.phone && <p className=" text-red-800">{errors.phone}</p>}
      </label>
      <label className="flex flex-col w-full">
        <p className="text-secondary font-black text-lg">Address:</p>
        <input
          value={user.address}
          name="address"
          className="default-input"
          placeholder="Address"
          type="text"
          onChange={handleInputChange}
        />
        {errors.address && <p className=" text-red-800">{errors.address}</p>}
      </label>
      <button type="submit" className="btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
