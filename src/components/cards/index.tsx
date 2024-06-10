// componente tarjeta
import Card from "../card";
// interfaz de producto
import { IProduct } from "@/Interfaces";

const Cards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-2 p-4 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-6 lg-p-0">
      {products &&
        products?.map(
          ({ id, name, description, price, stock, image, categoryId }) => {
            return (
              <Card
                href={`/product/${id}`}
                key={id}
                id={id}
                name={name}
                description={description}
                price={price}
                stock={stock}
                image={image}
                categoryId={categoryId}
              />
            );
          }
        )}
    </div>
  );
};

export default Cards;
