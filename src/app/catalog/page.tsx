import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CategoryItems from "./components/category-items";
import { prismaClient } from "@/lib/prisma";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 text-base uppercase border-primary py-[0.375rem] border-2"
        variant="outline"
      >
        <ShapesIcon />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItems key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
