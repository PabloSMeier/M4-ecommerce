// Image y Link de next
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="justify-self-end px-2 py-8 bg-tertiary text-secondary flex flex-row justify-evenly items-center">
      <Link href="/">
        <Image src="/HS.png" alt="logo" width={100} height={100} />
      </Link>
      <p>Henry´s Store &copy; 2024 </p>
      <p></p>
    </footer>
  );
};

export default Footer;
