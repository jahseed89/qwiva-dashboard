"use client";

import BarChart from "@/components/barchart/BarChart";
import Button from "@/components/button/Button";
import CareersCard from "@/components/careers/CareersCard";
import MainLayout from "@/components/main-layout/MainLayout";
import ViewersCard from "@/components/viewers-card/ViewersCard";
import Image from "next/image";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex justify-between  gap-5 lg:gap-0 flex-col lg:flex-row">
          <CareersCard
            icon={
              <Image src="/base-orange.svg" width={40} height={40} alt="" />
            }
            title="Application"
            figue="2.300"
            rate="(+5%)"
          />
          <CareersCard
            icon={<Image src="/base-blue.svg" width={40} height={40} alt="" />}
            title="New jobs"
            figue="12"
            rate="(+20%)"
          />
          <CareersCard
            icon={
              <Image src="/base-dim_orange.svg" width={40} height={40} alt="" />
            }
            title="Growth"
            figue="23%"
            rate="(-15%)"
          />
          <CareersCard
            icon={<Image src="/base-green.svg" width={40} height={40} alt="" />}
            title="Recruitments"
            figue="57"
            rate="(100%)"
          />
        </div>
        <div className="w-[100%] flex flex-col lg:flex-row lg:gap-11 my-6">
          <div className="w-[100%] lg:w-[74%]">
            <BarChart />
          </div>
          <div className="w-[100%] my-5 lg:my-0 lg:w-[20%] lg:mx-0">
            <ViewersCard>
              <h3 className="font-medium text-base pb-3 px-2">Viwers</h3>
              <div className="flex justify-between items-center px-2">
                <div>
                  <div className="flex flex-col text-[10px]">
                    <span className="flex items-center pb-1">
                      <span className="rounded-full text-pink-100 bg-pink-100 w-[6px] h-[6px] mr-2">
                        .
                      </span>
                      <span>8</span>
                    </span>
                    <span className="text-lightgrey-400">Incognito</span>
                  </div>
                  <div className="flex flex-col text-[10px] my-4">
                    <span className="flex items-center pb-1">
                      <span className="rounded-full text-blue-100 bg-blue-100 w-[6px] h-[6px] mr-2">
                        .
                      </span>
                      <span className="text-lightgrey-400">5</span>
                    </span>
                    <span className="text-lightgrey-400">User</span>
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span className="flex items-center pb-1">
                      <span className="rounded-full text-blue-250 bg-blue-250 w-[6px] h-[6px] mr-2">
                        .
                      </span>
                      <span className="text-lightgrey-400">10</span>
                    </span>
                    <span className="text-lightgrey-400">Recruiters</span>
                  </div>
                </div>
                <div>
                  <Image src="/pie.png" width={100} height={100} alt="pie" />
                </div>
              </div>
            </ViewersCard>
            <div className="mt-4 lg:mt-[15%] pt-1">
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
      </div>
    </MainLayout>
  );
};

export default Dashboard;
