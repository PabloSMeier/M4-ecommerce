//  interfaces de props de registro y login
import { ILoginProps, IRegisterProps } from "@/Interfaces";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function register(user: IRegisterProps) {
  try {
    const res = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Registro fallido");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function login(user: ILoginProps) {
  try {
    const res = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.ok) {
      return res.json();
    } else {
      alert("Usuario o contraseña incorrecto");
      throw new Error("Logeo fallido");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
