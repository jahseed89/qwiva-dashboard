import React from "react";
import "./careersCard.scss";
import { CareersCardProps } from "@/@types";

const CareersCard: React.FC<CareersCardProps> = ({
  icon,
  title,
  figue,
  rate,
}) => {
  return (
    <div className="flex justify-start items-center w-[250px] p-5 shadow-md bg-white-100 rounded-2xl c-card">
      {icon}
      <div className="flex justify-start flex-col pl-4">
        <h3 className="text-dark-250 text-sm font-bold">{title}</h3>
        <div className="flex bg-white-100 items-center">
          <span className="font-bold text-2xl">{figue}</span>
          <span className="pl-4 text-sm text-green-100">{rate}</span>
        </div>
      </div>
    </div>
  );
};

export default CareersCard;
