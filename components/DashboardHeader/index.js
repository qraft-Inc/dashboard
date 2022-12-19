import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition, Dialog } from "@headlessui/react";

import {
  UserCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

// eslint-disable-next-line react/display-name
const AdminHeader = () => {
  const router = useRouter();
  const [user, setUser] = useLocalStorage("user", {});
  // const { notifications } = useNotifications();
  
  const [logOutDialogOpen, setLogOutDialogOpen] = useState(false);
  // console.log(notifications);
  const logout = () => {
    setUser({});
    router.push("/sign-in");
  };

  const orderedNotifications = [
    {
      id: "9285160d-dc71-417c-a5b1-881663ddd857",
      notificationType: "info",
      title: "Started private registration",
      message: "You have started the private registration",
      userId: "af0e19f4-77ee-434f-bac9-f81e0910559a",
      createdAt: "2022-04-02T20:57:06.980Z",
    },
    {
      id: "9c91fd91-cac3-422e-a02e-424a2e070901",
      notificationType: "success",
      title: "Completed registration",
      message:
        "You have completed registration. Please go ahead and make payment",
      userId: "af0e19f4-77ee-434f-bac9-f81e0910559a",
      createdAt: "2022-04-02T21:01:13.251Z",
    },
  ];
  return (
    <div>
      <header className="bg-white h-[75px] flex px-3 py-3 items-center justify-end shadow">
        <div className="flex space-x-6 items-center">
          <NotificationBar/>
          {/* <Menu>
            <Menu.Button className="flex space-x-5 items-center px-3 py-3 group hover:bg-gray-100 hover:rounded-lg">
              <BellIcon className="h-6 w-6 text-gray-500 hover:text-teal-600" />{" "}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-[210px] bg-white top-16 z-20 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none px-5 py-6 rounded-lg w-[383px] ">
                <div>
                  <div className="flex justify-between">
                    <h2 className="text-gray-900 text-2xl leading-9 font-bold">
                      Notifications
                    </h2>
                    <button className="text-teal-700 text-xs leading-4 font-medium hover:underline">
                      See all
                    </button>
                  </div>
                  <div className="divide-y-2 divide-gray-200">
                    {orderedNotifications.map((notification, key) => {
                      return (
                        key <= 5 && (
                          <div
                            className="py-4 hover:bg-gray-100 cursor-pointer"
                            key={notification.id}
                          >
                            <div className="flex justify-between">
                              <div className="flex space-x-4">
                                {notification.notificationType === "success" ? (
                                  <CheckCircleIcon className="h-6 w-6 text-green-500 " />
                                ) : notification.notificationType ===
                                  "failure" ? (
                                  <XCircleIcon className="h-6 w-6 text-red-500 " />
                                ) : (
                                  <InformationCircleIcon className="h-6 w-6 text-gray-300 " />
                                )}

                                <p className="text-gray-900 text-sm leading-5 font-medium">
                                  {notification.title}
                                </p>
                              </div>
                              <p className="text-gray-500 text-sm leading-5 font-normal">
                                {formatDistance(
                                  new Date(notification.createdAt),
                                  new Date(),
                                  { addSuffix: true, includeSeconds: true }
                                )}
                              </p>
                            </div>
                            <p className="ml-9 mt-1 text-gray-500 text-sm leading-5 font-normal">
                              {notification.message}
                            </p>
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}
          <Menu>
            <Menu.Button className="flex space-x-5 items-center px-3 py-3 group hover:bg-gray-100 hover:rounded-lg">
              <UserCircleIcon className="h-7 w-7 text-teal-600 group-hover:text-teal-500" />
              <span className="font-medium text-gray-500 group-hover:text-teal-500">{`${user?.first_name} ${user?.last_name}`}</span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-[10px] bg-white top-16 z-20 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none w-56 ">
                <div>
                  <Menu.Item>
                    <div className="mt-3 text-gray-500 group w-full text-sm hover:bg-teal-700 hover:shadow hover:text-white py-1 cursor-pointer">
                      <p className="px-6">Your profile</p>
                    </div>
                  </Menu.Item>
                  <Menu.Item onClick={() => setLogOutDialogOpen(true)}>
                    <div className="mt-3 mb-3 text-gray-500 group w-full text-sm hover:bg-teal-700 hover:shadow hover:text-white py-1 cursor-pointer">
                      <p className="px-6">Sign Out</p>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <Modal
        onClose={() => setLogOutDialogOpen(false)}
        show={logOutDialogOpen}
        title="Sign out"
        actions={
          <div className="flex item-center justify-end space-x-3">
            <Button
              label="Cancel"
              onClick={() => setLogOutDialogOpen(false)}
              width="w-28"
              textAlign="center"
              variant="light"
            />

            <Button
              label="Sign Out"
              onClick={logout}
              width="w-28"
              textAlign="center"
              variant="pink"
            />
          </div>
        }
      >
        <p className="text-gray-500 text-sm leading-5 font-normal">
          Are you sure you want to sign out of your account? You can always sign
          in and continue.
        </p>
      </Modal>
    </div>
  );
};

export default AdminHeader;
