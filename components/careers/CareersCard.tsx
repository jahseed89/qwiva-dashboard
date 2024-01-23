import React from "react";
import { CareersCardProps } from "@/@types";

const CareersCard: React.FC<CareersCardProps> = ({
  icon,
  title,
  figue,
  rate,
}) => {

  const lowRate = rate < 1;
  return (
    <div className="flex justify-start items-center w-[80%] md:w-[60%] lg:w-[250px] px-5 py-7 lg:p-5 xl:py-6 mx-auto lg:mx-0 shadow-cardShadow bg-white-100 rounded-2xl">
      {icon}
      <div className="flex justify-start flex-col pl-8 md:pl-16 lg:pl-4">
        <h3 className="text-dark-250 text-sm font-bold">{title}</h3>
        <div className="flex bg-white-100 items-center">
          <span className="font-bold text-1xl">{figue}</span>
          <span className={`pl-4 md:pl-8 lg:pl-4 text-[10px] ${lowRate ? 'text-red-200': 'text-green-100'}`}>({rate}%)</span>
        </div>
      </div>
    </div>
  );
};

export default CareersCard;
