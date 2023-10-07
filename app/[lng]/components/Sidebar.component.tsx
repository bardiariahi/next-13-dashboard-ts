"use client"

import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useMemo, useLayoutEffect, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { SIDEBAR_ADMIN_ITEMS, SIDEBAR_ITEMS } from "../../../helpers/constants";
// import { axsiosInstance } from "@/helpers/AxsoisInstance";
import { Disclosure, Transition } from "@headlessui/react";


const Sidebar = () => {
  const [isFullyVisible, setIsFullyVisible] = useState<any>(true);
  // const router = useRouter();


  useMemo(() => {
    if (typeof window !== 'undefined') {
      // setIsFullyVisible(
      //   JSON.parse(
      //     localStorage.getItem('SideBarStatus')                    تایپ
      //       ? localStorage.getItem('SideBarStatus')
      //       : true
      //   )
      // );
    }
  }, []);

  const handleSidebarPosition = () => {
    setIsFullyVisible(!JSON.parse(isFullyVisible))
    // localStorage.setItem("SideBarStatus", !isFullyVisible)  تایپش درست شود

  }

  const handleImageClick = () => {
  //   if (
  //     router.pathname === "/dashboard" ||
  //     router.pathname.split("/")[1] === "dashboard"
  //   ) {
  //     router.push("/dashboard");
  //   } else if (
  //     router.pathname === "/backoffice" ||
  //     router.pathname.split("/")[1] === "backoffice"
  //   ) {
  //     router.push("/backoffice");
  //   }
  };

  // get user balance
  const [balance, setBalance] = useState(0);

  // useLayoutEffect(() => {
  //   axsiosInstance
  //     .get("/sender/balance")
  //     .then((res) => setBalance(res?.data?.data?.balance))
  //     .catch((err) => console.warn(err));
  // }, []);


  return (
    <aside
      className={`min-h-screen duration-500 shadow-2xl bg-white z-50 ${isFullyVisible ? "w-[220px]" : "w-20"
        } sticky top-0 sidebar-transition-width hidden md:flex`}>
      {/* Toggle Button */}
      <button
        onClick={handleSidebarPosition}
        className={`hidden md:inline-block absolute top-6 left-0 p-2 border-none outline-none rounded-full z-50 -translate-x-4 bg-dark bg-[#D9D9D9] ${isFullyVisible
          ? "transition-transform rotate-180 duration-500"
          : "transition-transform rotate-180 duration-500"
          }`}>
        <IoChevronForwardOutline
          className={`duration-700 ${!isFullyVisible ? "" : "transform rotate-180"
            }`}
        />
      </button>
      <div
        className={`flex flex-col gap-7 pt-5 pb-3 px-3 rtl:border-l-2 ltr:border-r-2 'border-gray-800 items-center h-full'}`}>
        {/* Image */}
        <button title="Dashboard" onClick={handleImageClick}>
          <Image
            width={166}
            height={50}
            src="/assets/images/logo-pro.png"
            alt={"لوگو سیکا"}
            title={"لوگو سیکا"}
            className={`select-none w-[166px] ${isFullyVisible ? "w-full" : "w-[40px]"
              } object-contain duration-700 object-center`}
            priority
          />
        </button>

        <div className={`flex flex-col flex-1 w-full justify-between `}>
          {/* Items */}
          <ul
            className={`flex flex-col duration-100  ${isFullyVisible ? "gap-3" : "gap-6"
              }`}>
            <li
              className={`flex w-full items-center px-3 text-base rounded-xl duration-500 bg-[#FFBA08] ${isFullyVisible
                ? "justify-between px-1 py-2"
                : "tooltip tooltip-left justify-center gap-3"
                }`}>
              {isFullyVisible ? (
                <>
                  <span className="text-xs">موجودی </span>
                  <span className="text-xs whitespace-nowrap">
                    {" "}
                    <span>{balance.toLocaleString("en-US")}</span>
                    {` `} ریال
                  </span>
                </>
              ) : (
                <div></div>
              )}
            </li>

            {SIDEBAR_ITEMS.map((list:any, index:number) =>
              list.url !== null ? (
                <Link
                  className={`flex  w-full items-center px-3 py-2 text-base rounded-xl duration-100 ${isFullyVisible
                    ? "justify-between hover:bg-[#004E98] px-1 hover:text-white py-2 "
                    : "tooltip tooltip-left justify-center gap-3"
                    } ${ " bg-[#004E98] text-white"}`}
                  // } ${router.pathname == list.url ? " bg-[#004E98] text-white" : ""}`}
                  data-tip={list.name}
                  href={list.url}
                  key={`${list.id}-${index}`}>
                  <div
                    key={`${list.id}--${index}`}
                    className="flex gap-2 items-center duration-500 justify-center ">
                    {list.icon}{" "}
                    <span
                      className={`duration-300 whitespace-nowrap ${isFullyVisible ? "" : "max-w-0 opacity-0 scale-0"
                        }`}>
                      {list.name}
                    </span>{" "}
                  </div>
                </Link>
              ) : (
                <>
                  <Disclosure>
                    <Disclosure.Button className="text-right py-2 hover:bg-[#004E98]  text-base rounded-xl duration-100 hover:text-white  ">
                      <div className="flex gap-2 items-center duration-500 px-3 outline-none ">
                        {list.icon}{" "}
                        <span
                          className={`duration-300 whitespace-nowrap ${isFullyVisible
                            ? ""
                            : "max-w-0 opacity-0 scale-0"
                            }`}>
                          {list.name}
                        </span>{" "}
                      </div>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0">
                      {list.childrens &&
                        list.childrens?.map(({children, index}:any) => (
                          <Disclosure.Panel
                            key={`${children.id}`}
                            className="text-gray-500 px-4">
                            <Link
                              className={`flex  w-full items-center px-3   text-sm rounded-xl duration-100 ${isFullyVisible
                                ? "justify-between hover:bg-[#004E98] px-1 hover:text-white py-2 "
                                : "tooltip tooltip-left justify-center gap-3"
                                }   ${ " bg-[#004E98] text-white"}`}
                              // }   ${router.pathname == children.url ? " bg-[#004E98] text-white" : ""}`}
                              data-tip={children.name}
                              href={children.url}
                              key={`${children.id}-${index}`}>
                              <div
                                key={`${children.id}--${index}`}
                                className="flex gap-2 items-center duration-500 justify-center ">
                                {children.icon}{" "}
                                <span
                                  className={`duration-300 whitespace-nowrap ${isFullyVisible
                                    ? ""
                                    : "max-w-0 opacity-0 scale-0"
                                    }`}>
                                  {children.name}
                                </span>{" "}
                              </div>
                            </Link>
                          </Disclosure.Panel>
                        ))}
                    </Transition>
                  </Disclosure>
                </>
              )
            )
            }
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
