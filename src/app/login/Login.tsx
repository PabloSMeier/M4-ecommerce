// formulario de login
import LoginForm from "@/components/loginForm";

export const Login: React.FC = () => {
  return (
    <div className="h-[80vh] mt-[10vh] md:mt-[17vh] w-full flex items-center justify-center bg-primary">
      <LoginForm />
    </div>
  );
};

export default Login;
