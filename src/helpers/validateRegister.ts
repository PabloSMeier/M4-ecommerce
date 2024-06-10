// interfaz de props de error de registro
import { IRegisterErrorsProps } from "@/Interfaces";

function validateEmail(email: string) {
  const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patron.test(email);
}
function validatePasswordsLength(password: string) {
  return /.{8,}/.test(password);
}
function validatePasswordMay(password: string) {
  return /[A-Z]/.test(password);
}
function validatePasswordMin(password: string) {
  return /[a-z]/.test(password);
}
function validatePasswordNum(password: string) {
  return /[0-9]/.test(password);
}
function validatePhoneN(phone: string) {
  const patron = /^\+54\s?(\d{2,4})\s?\d{6,8}$/;
  return patron.test(phone);
}

export const validateRegister = (input: {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
  address: string;
}): IRegisterErrorsProps => {
  let errors: IRegisterErrorsProps = {};
  if (!input.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(input.email)) {
    errors.email = "Invalid email";
  } else if (!input.password) {
    errors.password = "Password is required";
  } else if (!validatePasswordsLength(input.password)) {
    errors.password = "Must be at least 8 digits long";
  } else if (!validatePasswordMin(input.password)) {
    errors.password = "Must contain a lowercase letter";
  } else if (!validatePasswordMay(input.password)) {
    errors.password = "Must contain an uppercase letter";
  } else if (!validatePasswordNum(input.password)) {
    errors.password = "Must contain a number";
  } else if (!input.confirmPassword) {
    errors.confirmPassword = "Password confirmation is required";
  } else if (input.confirmPassword !== input.password) {
    errors.confirmPassword = "Must be identical to the password";
  } else if (!input.name) {
    errors.name = "Name is required";
  } else if (!input.phone) {
    errors.phone = "Phone number is required";
  } else if (!validatePhoneN(input.phone)) {
    errors.phone = "Invalid phone number, example: +54 11 12345678";
  } else if (!input.address) {
    errors.address = "Address is required";
  }
  return errors;
};
