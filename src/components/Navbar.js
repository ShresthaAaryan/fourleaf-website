import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import background from "/public/Images/background.png"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Logo from "../images/logo.jpg"
import Image from "next/image";
const navigation = [
  { name: "About Us", href: "/AboutUs", current: false },
  { name: "Services", href: "/Services", current: false },
  { name: "Careers", href: "/Career", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bgImg bg-white relative">
     
      <div className="h-[200px] pt-[100px] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <Image alt="background" src={background} className="absolute ml-[500px] h-[600px] w-[900px] mt-[-100px]"/>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-green-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                {" "}
                <Image
                  alt="Your Company"
                  src={Logo}
                  className="h-[100px] w-auto mt-[-30px]"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " text-green-500"
                        : "text-green-500 hover:bg-green-200 hover:text-green-900",
                      "rounded-md px-3 py-2 text-sm  font-bold text-[20px]"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 mt-[-20px] flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className=" bg-green-500 border-solid border-[1.5px] border-green-500 text-white font-bold h-[50px] w-[120px] rounded-md">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-green-500"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
