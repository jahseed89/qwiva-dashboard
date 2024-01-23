import React from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/utiles";
import { usePathname } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";

const SideBar = () => {
  const routerName = usePathname();
  return (
    <aside className="h-full flex flex-col">
      <div className="flex justify-start items-center pl-1 pt-3">
        <Image src="/dashboard-logo.png" width={30} height={30} alt="logo" />
        <h2 className="text-blue-200 text-2xl pl-1 font-bold">Stryke</h2>
      </div>
      <ul className="pl-1 border-b border-blue-10 py-4">
        {routes.map((routeItem, index) => (
          <Link key={index} href={routeItem.layout}>
            <li
              className={`flex justify-start items-center my-3 lg:my-2 py-3 lg:py-2 hover:bg-blue-100 cursor-pointer hover:text-white-100 rounded font-semibold pl-1 ${
                routerName === routeItem.layout
                  ? "text-blue-100"
                  : "text-dark-50 "
              }`}
            >
              <span>{routeItem.icon}</span>
              <span className="pl-5">{routeItem.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="pl-2 mt-8">
        <ul>
          <li className="flex justify-start text-dark-250 text-sm">
            <span>Contacts</span>
            <span className="rounded-full bg-blue-10 flex justify-center items-center w-7 h-5 text-blue-100 font-bold ml-5">
              6
            </span>
          </li>
          <li className="flex justify-start items-top my-4 ">
            <span>
              <Image src="/maria.png" width={30} height={30} alt="avatar" />
            </span>
            <span className="flex flex-col text-sm ml-4">
              <span className="text-dark-50 ">Maria Claire</span>
              <span className="text-xs text-dark-210">Paris, FR</span>
            </span>
            <span className="ml-auto pr-4"><Image src='/msg.svg' width={15} height={15} alt="" /></span>
          </li>
          <li className="flex justify-start items-top my-4 ">
            <span>
              <Image src="/mj.png" width={30} height={30} alt="avatar" />
            </span>
            <span className="flex flex-col text-sm ml-4">
              <span className="text-dark-50 ">Michael Jordan</span>
              <span className="text-xs text-dark-210">Bucharest, RO</span>
            </span>
            <span className="ml-auto pr-4"><Image src='/msg.svg' width={15} height={15} alt="" /></span>
          </li>
          <li className="flex justify-start items-top my-4 ">
            <span>
              <Image src="/heather.png" width={30} height={30} alt="avatar" />
            </span>
            <span className="flex flex-col text-sm ml-4">
              <span className="text-dark-50 ">Heather Jackson</span>
              <span className="text-xs text-dark-210">London, UK</span>
            </span>
            <span className="ml-auto pr-4"><Image src='/msg.svg' width={15} height={15} alt="" /></span>
          </li>
        </ul>
      </div>
      <div className="mt-auto pl-2">
          <Link href="#" className="flex justify-start items-center">
              <CiUser />
              <span className="ml-4 text-dark-50 font-bold text-sm">Account</span>
          </Link>
          <Link href="/" className="flex justify-start items-center py-5">
              <SlLogout />
              <span className="ml-4 text-dark-50 font-bold text-sm">Logout</span>
          </Link>
      </div>
    </aside>
  );
};

export default SideBar;
