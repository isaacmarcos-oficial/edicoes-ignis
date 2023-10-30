import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      alt={alt}
      width={0}
      height={0}
      className="h-auto w-full"
      sizes="100vw"
    />
  );
};

export default PromoBanner;
