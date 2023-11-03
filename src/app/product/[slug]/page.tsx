import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if(!product) return null
  
  return (
    <h1>{product?.name}</h1>
  );
};

export default ProductDetailsPage;
