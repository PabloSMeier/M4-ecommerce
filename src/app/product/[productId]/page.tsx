// ignorar errores por usar <img />
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
// interfaz producto
import { IProduct } from "@/Interfaces";
// contexto global de usuario
import { useUser } from "@/context/UserContext";
// funcion para obtener el producto por su ID
import { getProductById } from "@/helpers/product.helper";
// rhooks de efecto y estado
import { useEffect, useState } from "react";
// alertas personalizada
import {
  showErrorAlert,
  showSuccessAlert,
} from "@/helpers/alert.helper/alert.helper";

const DetailProduct = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<IProduct>();
  const { userData } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const product = await getProductById(params.productId);
      setProduct(product);
    };
    fetchData();
  }, [params.productId]);

  const handleAddToCart = (e: any) => {
    if (!userData?.token) {
      showErrorAlert("Error", "You must be logged tu make a purchase!");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some(
        (cartProduct: IProduct) => cartProduct.id === product?.id
      );
      if (productExist) {
        showErrorAlert("Error!", "Product already in your cart.");
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        showSuccessAlert(product?.name!, "Product added successfully!");
      }
    }
  };

  return (
    <div className="w-full min-h-[80vh] py-10 px-6 bg-primary flex items-center justify-center flex-col mt-[10vh] md:mt-[17vh]">
      <div className="max-w-fit max-h-fit flex flex-col md:max-w-[80vw] lg:max-w-[60vw] md:flex-row items-center md:space-x-8 space-y-8 bg-tertiary p-6 rounded text-semidark">
        <img className="rounded w-[35vh] h-[35vh]" src={product?.image} />
        <div className="flex flex-col justify-between">
          <h1 className="font-black"> {product?.name}</h1>
          <div className="space-y-4 mb-8 mt-2">
            <p>Price: {product?.price}</p>
            <p>Stock: {product?.stock}</p>
            <p>{product?.description} </p>
          </div>
          <div className="w-full flex justify-end">
            <button onClick={handleAddToCart} className="btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailProduct;
