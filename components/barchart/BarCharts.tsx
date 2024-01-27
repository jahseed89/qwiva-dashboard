import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import Button from "../button/Button";
import { BiMessageRounded } from "react-icons/bi";

const data = [
  {
    name: "Mon",
    incognito: 13,
    users: 18,
    recruiter: 16,
  },
  {
    name: "Tue",
    incognito: 6,
    users: 11,
    recruiter: 19,
  },
  {
    name: "Wen",
    incognito: 2,
    users: 7,
    recruiter: 5,
  },
  {
    name: "Thr",
    incognito: 5,
    users: 10,
    recruiter: 8,
  },
  {
    name: "Fri",
    incognito: 13,
    users: 18,
    recruiter: 16,
  },
  {
    name: "Sat",
    incognito: 5,
    users: 10,
    recruiter: 7,
  },
  {
    name: "Sun",
    incognito: 3,
    users: 30,
    recruiter: 15,
  },
];

const BarCharts = () => {
  return (
    <>
      <div className="flex justify-between items-center py-5 px-2 bg-white-100">
        <h1 className="font-bold text-[10px] md:text-lg hidden md:block">Profile views</h1>
        <div className="w-[100%] md:w-[70%] lg:w-[50%] flex justify-between items-center text-sm">
          <span className="flex items-center ">
            <span className="rounded-full text-blue-100 bg-blue-100 w-[6px] h-[6px] md:w-[10px] md:h-[10px] mr-2">
              .
            </span>
            <span className="text-lightgrey-400 font-bold">Users</span>
          </span>
          <span className="flex items-center px-1 md:px-0">
            <span className="rounded-full text-pink-100 bg-pink-100 w-[6px] h-[6px] md:w-[10px] md:h-[10px] mr-2">
              .
            </span>
            <span className="text-lightgrey-400 font-bold">Recruiters</span>
          </span>
          <span className="flex items-center pr-1 md:pr-0">
            <span className="rounded-full text-blue-250 bg-blue-250 w-[6px] h-[6px] md:w-[10px] md:h-[10px] mr-2">
              .
            </span>
            <span className="text-lightgrey-400 font-bold">Incognito</span>
          </span>
          <Button
            disable={false}
            onClick={(e) => console.log("Subscribing...", e)}
            additionalStyles="flex justify-center items-center text-sm !py-2 rounded w-[100px]"
          >
            <span><BiMessageRounded /></span>
            <span className="pl-2">Export</span>
          </Button>
        </div>
      </div>
      <div className="h-[50vh] md:h-[40vh] flex justify-start items-end">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="incognito" fill="#E5ECF7" barSize={10} radius={10} />
          <Bar dataKey="users" fill="#4C6FFF" barSize={10} radius={10} />
          <Bar dataKey="recruiter" fill="#FF92AE" barSize={10} radius={10} />
        </BarChart>
      </div>
    </>
  );
};

export default BarCharts;
