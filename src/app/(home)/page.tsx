import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "./section-title";
import PromoBanner from "./promo-banner";
import ProductList from "@/components/ui/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  });

  return (
    <div className="mx-auto max-w-[1920px]">
      <PromoBanner
        className="hidden h-auto w-full lg:block"
        src="/banner-home-01.png"
        alt="até 55% de Desconto esse mês"
      />

      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        className=""
        src="/banner-home-02.png"
        alt="até 55% de Desconto em mouses"
      />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        className="px-"
        src="/banner-home-03.png"
        alt="até 20% de Desconto em fones"
      />

      <div className="mt-8">
        <SectionTitle>Fones</SectionTitle>
        <ProductList products={headphones} />
      </div>
    </div>
  );
}
