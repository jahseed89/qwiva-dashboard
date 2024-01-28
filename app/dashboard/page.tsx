"use client";

import Button from "@/components/button/Button";
import CareersCard from "@/components/careers/CareersCard";
import MainLayout from "@/components/main-layout/MainLayout";
import ViewersCard from "@/components/viewers-card/ViewersCard";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosCamera } from "react-icons/io";
import BarCharts from "@/components/barchart/BarCharts";
import ViewersChart from "@/components/barchart/ViewersChart";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex justify-between gap-5 flex-col lg:flex-row">
          <CareersCard
            icon={
              <Image src="/base-orange.svg" width={40} height={40} alt="" />
            }
            title="Application"
            figue="2.300"
            rate={+5}
          />
          <CareersCard
            icon={<Image src="/base-blue.svg" width={40} height={40} alt="" />}
            title="New jobs"
            figue="12"
            rate={+20}
          />
          <CareersCard
            icon={
              <Image src="/base-dim_orange.svg" width={40} height={40} alt="" />
            }
            title="Growth"
            figue="23%"
            rate={-15}
          />
          <CareersCard
            icon={<Image src="/base-green.svg" width={40} height={40} alt="" />}
            title="Recruitments"
            figue="57"
            rate={100}
          />
        </div>
        <div className="w-[100%] flex flex-col lg:flex-row lg:gap-11 my-6 xl:justify-between xl:gap-0">
          <div className="w-[100%] lg:w-[74%] overflow-x-auto bg-white-100 rounded-lg">
            <BarCharts />
          </div>
          <div className="lg:flex flex-col justify-between w-[100%] lg:h-[50vh] my-5 lg:my-0 lg:w-[250px]">
            <ViewersCard>
              <h3 className="font-medium text-base pb-3 px-2">Viwers</h3>
              <div className="flex justify-between items-center px-2">
                <div>
                  <div className="flex flex-col text-[10px]">
                    <span className="flex items-center pb-1">
                      <span className="rounded-full text-pink-100 bg-pink-100 w-[6px] h-[6px] mr-2"></span>
                      <span>8</span>
                    </span>
                    <span className="text-lightgrey-400">Incognito</span>
                  </div>
                  <div className="flex flex-col text-[10px] my-4">
                    <span className="flex items-center pb-1">
                      <span className="rounded-full text-blue-100 bg-blue-100 w-[6px] h-[6px] mr-2"></span>
                      <span className="text-lightgrey-400">5</span>
                    </span>
                    <span className="text-lightgrey-400">User</span>
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span className="flex items-center pb-1">
                      <span className="rounded-full text-blue-250 bg-blue-250 w-[6px] h-[6px] mr-2"></span>
                      <span className="text-lightgrey-400">10</span>
                    </span>
                    <span className="text-lightgrey-400">Recruiters</span>
                  </div>
                </div>
                <div>
                  <ViewersChart />
                </div>
              </div>
            </ViewersCard>
            <div className="mt-4">
              <ViewersCard>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="py-2 px-3 mt-2 md:py-3.5 lg:py-2 w-[100%] rounded-md bg-lightgrey-100"
                  />
                  <Button
                    disable={false}
                    onClick={(e) => console.log("Subscribing...", e)}
                    additionalStyles="flex justify-center items-center text-sm !py-2 rounded w-[100px] !px-2 absolute right-0 top-2.5"
                  >
                    <span>Subscribe</span>
                  </Button>
                </div>
                <p className="pt-12 text-sm">Follow your statistics</p>
              </ViewersCard>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center py-3 w-[80%] mx-auto lg:w-[100%] lg:mx-0">
            <h2 className="font-bold">Interviews</h2>
            <Link href="#" className="text-blue-100 text-sm">
              Show all
            </Link>
          </div>
          <div className="flex justify-between gap-5 flex-col lg:flex-row pb-2">
            <ViewersCard>
              <div className="flex justify-between items-start">
                <div className="flex items-end">
                  <span>
                    <Image
                      src="/marc.png"
                      width={35}
                      height={30}
                      alt="avatar"
                    />
                  </span>
                  <span className="z-10">
                    <Image
                      src="/march-avatar.svg"
                      width={15}
                      height={15}
                      alt="avatar"
                    />
                  </span>
                </div>
                <h1 className="font-extrabold text-dark-350">...</h1>
              </div>
              <div className="text-sm">
                <div className="py-4">
                  <h2>Marc Joseph</h2>
                  <p className="text-blue-100 font-bold">Outcrowd</p>
                </div>
                <div className="flex justify-start items-center gap-3 text-dark-250 text-xs font-extrabold">
                  <span className="text-[20px]">
                    <MdOutlineDateRange />
                  </span>
                  <span>Thu.24</span>
                  <span className="text-[20px]">
                    <IoIosCamera />
                  </span>
                  <span>11:00 - 12:00</span>
                </div>
              </div>
            </ViewersCard>
            <ViewersCard>
              <div className="flex justify-between items-star">
                <div className="flex items-end">
                  <span>
                    <Image
                      src="/maria.png"
                      width={35}
                      height={30}
                      alt="avatar"
                    />
                  </span>
                  <span className="z-10">
                    <Image
                      src="/maria-avatar.svg"
                      width={15}
                      height={15}
                      alt="avatar"
                    />
                  </span>
                </div>
                <h1 className="font-extrabold text-dark-350">...</h1>
              </div>
              <div className="text-sm">
                <div className="py-4">
                  <h2>Maria Lopes</h2>
                  <p className="text-blue-100 font-bold">Dribbble</p>
                </div>
                <div className="flex justify-start items-center gap-3 text-dark-250 text-xs font-extrabold">
                  <span className="text-[20px]">
                    <MdOutlineDateRange />
                  </span>
                  <span>Thu.24</span>
                  <span className="text-[20px]">
                    <IoIosCamera />
                  </span>
                  <span>11:00 - 12:00</span>
                </div>
              </div>
            </ViewersCard>
            <ViewersCard>
              <div className="flex justify-between items-star">
                <div className="flex items-end">
                  <span>
                    <Image
                      src="/albert.png"
                      width={35}
                      height={30}
                      alt="avatar"
                    />
                  </span>
                  <span className="z-10">
                    <Image
                      src="/albert-avatar.svg"
                      width={15}
                      height={15}
                      alt="avatar"
                    />
                  </span>
                </div>
                <h1 className="font-extrabold text-dark-350">...</h1>
              </div>
              <div className="text-sm">
                <div className="py-4">
                  <h2>Albert Smith</h2>
                  <p className="text-blue-100 font-bold">Netguru</p>
                </div>
                <div className="flex justify-start items-center gap-3 text-dark-250 text-xs font-extrabold">
                  <span className="text-[20px]">
                    <MdOutlineDateRange />
                  </span>
                  <span>Thu.24</span>
                  <span className="text-[20px]">
                    <IoIosCamera />
                  </span>
                  <span>11:00 - 12:00</span>
                </div>
              </div>
            </ViewersCard>
            <ViewersCard>
              <div className="flex justify-between items-start">
                <div className="flex items-end">
                  <span>
                    <Image
                      src="/heather.png"
                      width={35}
                      height={30}
                      alt="avatar"
                    />
                  </span>
                  <span className="z-10">
                    <Image
                      src="/heather-avatar.svg"
                      width={15}
                      height={15}
                      alt="avatar"
                    />
                  </span>
                </div>
                <h1 className="font-extrabold text-dark-350">...</h1>
              </div>
              <div className="text-sm">
                <div className="py-4">
                  <h2>Marc Joseph</h2>
                  <p className="text-blue-100 font-bold">Outcrowd</p>
                </div>
                <div className="flex justify-start items-center gap-3 text-dark-250 text-xs font-extrabold">
                  <span className="text-[20px]">
                    <MdOutlineDateRange />
                  </span>
                  <span>Thu.24</span>
                  <span className="text-[20px]">
                    <IoIosCamera />
                  </span>
                  <span>11:00 - 12:00</span>
                </div>
              </div>
            </ViewersCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
