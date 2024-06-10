// función para obtener productos
import { getProductsDB } from "@/helpers/product.helper";
// componente de tarjetas
import Cards from "../cards";
// componente carrusel
import Carousel from "../carousel";

export const HomeContainer: React.FC = async () => {
  const products = await getProductsDB();
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center space-y-10 mt-[10vh] md:mt-[17vh] pb-8">
      <Carousel products={products} />
      <Cards products={products} />
    </div>
  );
};

export default HomeContainer;
