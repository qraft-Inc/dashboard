import React from "react";
import Head from "next/head";
import SideBar from "../Sidebar";
import AdminHeader from "../DashboardHeader";

export default function DashboardLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Qraft Academy" : "Qraft Academy"}</title>
        <meta name="description" content="Qraft Academy Dashboard Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="relative w-1/5 bg-[#020916] min-h-screen">
          <SideBar />
        </div>
        <div className="w-4/5 ">
          <AdminHeader />
          <main className="py-5 px-5 pb-20">{children}</main>
        </div>
      </div>
    </>
  );
}
