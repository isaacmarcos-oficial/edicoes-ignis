import { Product } from "@prisma/client";
import { BaseNextResponse } from "next/dist/server/base-http";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const comuteProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  };
};
