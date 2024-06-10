// interfaz de props de error de login
import { ILoginErrorProps } from "@/Interfaces";
export const validateLogin = (input: ILoginErrorProps): ILoginErrorProps => {
  let errors: ILoginErrorProps = {};
  if (!input.email) {
    errors.email = "Username is required";
  } else if (!input.password) {
    errors.password = "Password is required";
  }
  return errors;
};
