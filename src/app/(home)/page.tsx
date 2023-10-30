import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="até 55% de Desconto esse mês"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
      />

      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="pl-5 font-bold uppercase mb-3">Ofertas</p>
        <ProductList products={deals}/>
      </div>

      <Image
        src="/banner-home-02.png"
        alt="até 55% de Desconto em mouses"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
}
