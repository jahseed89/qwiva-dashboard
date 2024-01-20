import React from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/utiles";

const SideBar = () => {
  return (
    <aside>
      <div className="flex justify-start items-center pl-1 pt-3">
        <Image src="/dashboard-logo.png" width={30} height={30} alt="logo" />
        <h2 className="text-blue-200 text-2xl pl-2 font-bold">Stryke</h2>
      </div>
      <ul className="pl-1 border-b border-blue-10 py-4">
        {routes.map((routeItem, index) => (
          <Link key={index} href={routeItem.layout}>
            <li className="flex justify-start items-center my-3 lg:my-2 py-3 lg:py-2 hover:bg-blue-100 cursor-pointer hover:text-white-100 rounded font-semibold  text-dark-50 pl-1">
              <span>{routeItem.icon}</span>
              <span className="pl-5">{routeItem.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div>
        <ul>
          <li>
            <span>Contacts</span>{" "}
            <span className="rounded-full bg-blue-10 flex justify-center items-center w-9 h-6 text-blue-100 font-bold">
              6
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
