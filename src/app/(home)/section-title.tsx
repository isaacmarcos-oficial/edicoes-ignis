import { ComponentProps } from "react";

const SectionTitle = ({children, ...props}: ComponentProps<"p">) => {
  return <p className="pl-5 font-bold uppercase mb-3" {...props}>{children}</p>;
};

export default SectionTitle;
