import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent(props) {
  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button className="w-screen px-4 py-2 text-xl drop-shadow-md text-green-700 bg-white    focus:outline-none  ">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 ">
            <div class="rounded-md flex items-start justify-start">
              <span>{props.name}</span>
            </div>
            <div class="rounded-md flex items-center justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="  w-full mt-2 origin-top-right bg-white rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 ">
                    <div class="rounded-md flex items-center justify-start">
                      <Image src={props.image} width={300} height={300} />
                    </div>
                    <div class="rounded-md flex items-center justify-start">
                      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 ">
                        <div class="rounded-md flex items-start justify-start pb-5 ">
                          <span className="text-xl text-green-700 ">{props.name}</span>
                          
                        </div>
                        <div class="rounded-md flex items-start justify-start">
                          <span className="text-xl text-green-700 ">*</span>{" "}
                          <span className="text-xl pb-1"> {props.content}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
