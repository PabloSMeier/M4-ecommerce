// formulario de registro
import RegisterForm from "@/components/registerForm";

export const Register: React.FC = () => {
  return (
    <div className="min-h-screen min-h py-8 w-full flex items-center justify-center bg-primary mt-[10vh] md:mt-[17vh]">
      <RegisterForm />
    </div>
  );
};

export default Register;
