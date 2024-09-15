import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostTable from "@/components/posts/PostTable";
import { Button } from "@/components/ui/button";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5 overflow-x-scroll no-scrollbar ">
        <DashboardCard 
        title={'Posts'} 
        count = {200} 
        icon={<Newspaper className='text-slate-500 dark:text-slate-200' size={72} />}
        />
        <DashboardCard 
        title={'Categories'} 
        count = {12} 
        icon={<Folder className='text-slate-500 dark:text-slate-200' size={72} />}
        />
        <DashboardCard 
        title={'Users'} 
        count = {750} 
        icon={<User className='text-slate-500 dark:text-slate-200' size={72} />}
        />
        <DashboardCard 
        title={'Comments'} 
        count = {1200} 
        icon={<MessageCircle className='text-slate-500 dark:text-slate-200' size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostTable limit={5}/>
    </>
  );
}
