"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    setQuantity((prev: number) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev: number) => prev + 1);
  };

  const handleAddProductToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}%</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="opacity-75 text-sm line-through">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="flex items-center gap-2 mt-4">
        <Button size="icon" variant="outline" onClick={handleDecreaseQuantity}>
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseQuantity}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold">Descrição</h3>
        <p className="opacity-60 text-sm leading-5">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddProductToCartClick}
      >
        Adicione ao carrinho
      </Button>

      <div className="bg-accent flex items-center px-5 py-2 justify-between mt-2 rounded-lg">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">IGNISExpress</span>
            </p>
            <p className="text-primary text-xs">
              Envio para <span className="font-bold">todo o Brasil</span>
            </p>
          </div>
        </div>

        <div className="">
          <p className="font-semibold">Frete grátis</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
