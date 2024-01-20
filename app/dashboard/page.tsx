import CareersCard from "@/components/careers/CareersCard";
import MainLayout from "@/components/main-layout/MainLayout";
import Image from 'next/image'


const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex justify-between gap-5 lg:gap-0 flex-col lg:flex-row">
          <CareersCard icon={<Image src='/base-orange.svg' width={40} height={40} alt=''/>} title='Application' figue='2.300' rate='(+5%)' />
          <CareersCard icon={<Image src='/base-blue.svg' width={40} height={40} alt=''/>} title='New jobs' figue='12' rate='(+20%)' />
          <CareersCard icon={<Image src='/base-dim_orange.svg' width={40} height={40} alt=''/>} title='Growth' figue='23%' rate='(-15%)' />
          <CareersCard icon={<Image src='/base-green.svg' width={40} height={40} alt=''/>} title='Recruitments' figue='53' rate='(100%)' />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
