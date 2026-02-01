import { ArrowUpRight } from "lucide-react";

const Side = () => {
  return (
    <div className="flex flex-col w-fit bg-amber-100 px-6 py-7 mx-4">
      <h1 className="text-[48px] font-bold leading-[64px]">
        Prospective Customer Segmentation
      </h1>
      <p className="w-[250px]">
        Depending on customer satisfaction and access to banking products,
        potential target Audience can be divided into three groups.
      </p>
      <ArrowUpRight size={128} />
    </div>
  );
};

export default Side;
