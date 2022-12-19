import React, { useState, Fragment, forwardRef } from "react";

// Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// ICONS
import { HomeIcon } from "@heroicons/react/solid";

// eslint-disable-next-line react/display-name
const SideBar = () => {
  const router = useRouter();
  const menuItems = [
    {
      icon: <HomeIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />,
      label: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: <HomeIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />,
      label: "Complete Task",
      url: "/dashboard/complete-task",
    },
    {
      icon: <HomeIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />,
      label: "Track Progress",
      url: "/dashboard/track-progress",
    },
    {
      icon: <HomeIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />,
      label: "Talk to a Mentor",
      url: "/dashboard/mentors",
    },
    {
      icon: <HomeIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />,
      label: "My Portfolio",
      url: "/dashboard/portfolio",
    },
  ];
  return (
    <div className="sticky top-0 flex flex-col bg-gray-800">
      <Link href="/dashboard" passHref>
        <a className="flex justify-center wrap px-15 py-5">
          <Image
            className="h-5 w-5 cursor-pointer bg-white"
            layout="fixed"
            height={50}
            width={50}
            src={"/favicon.ico"}
            alt="user-logo"
          />
        </a>
      </Link>
      <div className="primary-menu flex flex-col py-3 px-3 space-y-5">
        {menuItems.map((item) => (
          <Link key={item.url} href={item.url}>
            <a>
              <div
                className={`${
                  router.pathname === item.url && `bg-gray-900`
                } flex space-x-3 items-center hover:bg-gray-900 py-3 px-3 rounded transition-all`}
              >
                {item.icon}
                <span className="text-base font-medium text-gray-300">
                  {item.label}
                </span>{" "}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
