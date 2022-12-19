import React, { useState, Fragment, forwardRef } from "react";

// Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Assets
import logo from "/public/logo.png";

// ICONS
import { HomeIcon, UserGroupIcon,UsersIcon, CreditCardIcon, CalendarIcon , SearchCircleIcon,AcademicCapIcon, CogIcon} from "@heroicons/react/solid";

// eslint-disable-next-line react/display-name
const SideBar = () => {
  const router = useRouter();
  const menuItems = [
    {
      icon: <HomeIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />,
      label: "Dashboard",
      url: "/",
    },
    {
      icon: (
        <UserGroupIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />
      ),
      label: "Registrations",
      url: "/registrations",
    },
    {
      icon: (
        <SearchCircleIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />
      ),
      label: "Assessment",
      url: "/interviews",
    },
    {
      icon: (
        <CalendarIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />
      ),
      label: "Schedules",
      url: "/schedules",
    },
    {
      icon: (
        <CreditCardIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />
      ),
      label: "Payments",
      url: "/payments",
    },
    {
      icon: (
        <AcademicCapIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />
      ),
      label: "Training Schools",
      url: "/schools",
    },
    {
      icon: (
        <UsersIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />
      ),
      label: "Users",
      url: "/users",
    },
    {
      icon: (
        <CogIcon className="h-7 w-7 text-gray-300 hover:text-teal-400" />
      ),
      label: "Settings",
      url: "/settings",
    },
    
  ];
  return (
    <div className="sticky top-0 flex flex-col bg-gray-800">
      <Link href="/" passHref>
        <a className="flex justify-between wrap px-5 py-5">
          <Image
            className="h-5 w-5 cursor-pointer bg-white"
            layout="fixed"
            height={50}
            width={50}
            src={logo}
            alt="unmc-logo"
          />
          <span className="font-bold sm:text-2xl  md:text-3xl lg:text-5xl text-teal-600">
            UNMC
          </span>
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
