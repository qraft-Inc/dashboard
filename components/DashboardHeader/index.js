import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition, Dialog } from "@headlessui/react";

import {
  UserCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

// eslint-disable-next-line react/display-name
const AdminHeader = () => {
  return (
    <div>
      <header className="bg-white h-[75px] flex px-3 py-3 items-center justify-start shadow">
        Track Progress
      </header>
    </div>
  );
};

export default AdminHeader;
