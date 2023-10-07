"use client"

import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { SIDEBAR_ITEMS } from "../../../helpers/constants";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'

import { IoExit } from "react-icons/io5";
// import Modal from './modal.component'
import { RxCross2 } from "react-icons/rx";
import { Disclosure, Transition } from "@headlessui/react";
import { AiOutlineLogout } from "react-icons/ai";

const MobileSidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }:any) => {

    // const router = useRouter();
    const handleExitUser = () => {
        // localStorage.clear()
        // if (router.pathname === "/dashboard") {
        //     router.push("/login")
        // } else if (router.pathname === "/backoffice") {
        //     router.push("/admin-login")
        // }
    }

    useEffect(() => {
        document.body.style.overflowY = isMobileSidebarOpen ? 'hidden' : 'auto'
    }, [isMobileSidebarOpen])

    return (
        <>
            <div
                className={`border-l-2 bg-gray-100 border-gray-300 dark:border-gray-600 dark:bg-gray-900 fixed inset-0 flex flex-col gap-4 md:hidden 
                 transition-all duration-300 ${isMobileSidebarOpen ? 'ltr:translate-x-0 rtl:translate-x-0 z-50 translate-x-0 ' : 'opacity-0 translate-x-full'
                    }`}
            >
                <div className={` ${isMobileSidebarOpen ? 'h-screen' : 'h-screen'} overflow-y-auto pb-5 bg-white z-50`}>
                    <div className="p-4 flex justify-start bg-white border-b-2 border-gray-300">
                        <button
                            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                            className=" btn-sm "
                        >
                            <RxCross2 className=' text-lg' />
                        </button>
                    </div>
                    <div className=" h-full p-5">
                        {/* User information */}
                        {/* 
                        <Link
                            onClick={() => {
                                setIsMobileSidebarOpen(false)
                            }}
                            href="/kyc"
                            title="KYC"
                            className="flex items-center justify-between flex-wrap gap-2"
                        >
                            <div className="h-full flex items-center gap-4 text-right">
                                <span> icon </span>
                                <div className="space-y-1">
                                    <span className="text-xl font-bold dark:text-white">
                                        span1
                                    </span>
                                    <span className="flex items-center gap-1 text-sm font-light">
                                       span2
                                    </span>
                                </div>
                            </div>
                                <button className="btn btn-primary gap-2">
                                   <span> icon </span>
                                    <span>span</span>
                                </button>
                        </Link> */}

                        {isMobileSidebarOpen && <ul

                            className="flex flex-col h-full justify-between"
                        >
                            <div className='flex flex-col gap-2'>
                                {SIDEBAR_ITEMS.map(({list, index}:any) => (
                                    // list.url !== null ? (
                                        <Link
                                            className={`flex  w-full items-center px-3 py-4 text-base rounded-xl duration-100 ${ " bg-[#004E98] text-white"}`}
                                            // className={`flex  w-full items-center px-3 py-4 text-base rounded-xl duration-100 ${router.pathname == list.url ? " bg-[#004E98] text-white" : ""}`}
                                            href={list.url}
                                            key={`${list.id}-${index}`}
                                            onClick={() => {
                                                setIsMobileSidebarOpen(false)
                                            }}>
                                            {" "}
                                            <div
                                                key={`${list.id}--${index}`}
                                                className="flex gap-4 items-center duration-500 justify-center ">
                                                {list.icon}{" "}
                                                <span
                                                    className={`duration-300 whitespace-nowrap`}>
                                                    {list.name}
                                                </span>{" "}
                                            </div>
                                        </Link>
                                    // ) : (
                                    //     <>
                                    //         <Disclosure>
                                    //             <Disclosure.Button className="text-right ">
                                    //                 <div className="flex gap-4 items-center py-4 duration-500 px-3 outline-none ">
                                    //                     {list.icon}{" "}
                                    //                     <span
                                    //                         className={`duration-300 whitespace-nowrap`}>
                                    //                         {list.name}
                                    //                     </span>{" "}
                                    //                 </div>
                                    //             </Disclosure.Button>
                                    //             <Transition
                                    //                 enter="transition duration-100 ease-out"
                                    //                 enterFrom="transform scale-95 opacity-0"
                                    //                 enterTo="transform scale-100 opacity-100"
                                    //                 leave="transition duration-75 ease-out"
                                    //                 leaveFrom="transform scale-100 opacity-100"
                                    //                 leaveTo="transform scale-95 opacity-0">
                                    //                 {list.childrens &&
                                    //                     list.childrens?.map(({children, index}:any) => (
                                    //                         <Disclosure.Panel
                                    //                             key={`${children.id}`}
                                    //                             className="text-gray-500 px-4">
                                    //                             <Link
                                    //                                 className={`flex  w-full items-center px-3 py-4 text-sm rounded-xl duration-100   ${router.pathname == children.url ? " bg-[#004E98] text-white" : ""}`}
                                    //                                 data-tip={children.name}
                                    //                                 href={children.url}
                                    //                                 key={`${children.id}-${index}`}
                                    //                                 onClick={() => {
                                    //                                     setIsMobileSidebarOpen(false)
                                    //                                 }}>
                                    //                                 <div
                                    //                                     key={`${children.id}--${index}`}
                                    //                                     className="flex gap-4 items-center duration-500 justify-center ">
                                    //                                     {children.icon}{" "}
                                    //                                     <span
                                    //                                         className={`duration-300 whitespace-nowrap `}>
                                    //                                         {children.name}
                                    //                                     </span>{" "}
                                    //                                 </div>
                                    //                             </Link>
                                    //                         </Disclosure.Panel>
                                    //                     ))}
                                    //             </Transition>
                                    //         </Disclosure>
                                    //     </>)
                                ))}
                            </div>
                            {/* Logout */}
                            <div className="border-b-2 border-gray-800 pb-1 last-of-type:border-0">
                                <div
                                    onClick={handleExitUser}
                                    className=" text-error text-right flex items-center justify-start gap-3"
                                >
                                    <AiOutlineLogout className='text-xl' />
                                    <span className="font-bold text-sm text-base sm:text-base sidebar-transition-text">
                                        خروج
                                    </span>
                                </div>
                            </div>
                        </ul>}
                    </div>
                </div>
            </div>

            {/* <Modal hideScrollbar={false} className="pb-2" id={modalId}>
                <div className="text-center flex flex-col items-center gap-3">
                    <IoExit className="h-8 w-8 sm:h-12 sm:w-12" />
                    <div className="text-xl sm:text-3xl font-bold ">
                        {t('mobileSidebar.signOut.modal.title')}
                    </div>
                    <p className="mb-2">{t('mobileSidebar.signOut.modal.subTitle')}</p>
                    <div className="flex w-full gap-3">
                        <button
                            disabled={logOutMutation.isLoading}
                            onClick={() => logOutMutation.mutate()}
                            className={`btn btn-error flex-1 ${
                                logOutMutation.isLoading && 'loading btn-disabled'
                            }`}
                        >
                            {!logOutMutation.isLoading &&
                                t('mobileSidebar.signOut.modal.submitButtonLabel')}
                        </button>
                        <label htmlFor={modalId} className="btn btn-outline flex-1">
                            {t('mobileSidebar.signOut.modal.cancelButtonLabel')}
                        </label>
                    </div>
                </div>
            </Modal> */}
        </>
    )
}

export default MobileSidebar
