"use client"

// import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image';
import MobileSidebar from './mobile-sidebar.component'
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Popover } from '@headlessui/react'
// import UserLogo from "../../public/assets/images/UserIcon.svg"
import Link from 'next/link';

const modalId = 'navbar-logout-modal'

const Navbar = ({ showMobileSidebar }:any) => {
    // const router = useRouter()

    const handleLogOut = () => {
        localStorage.clear()
        // router.push("/login")
    }

    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

    return (
        <>
            {showMobileSidebar && (
                <MobileSidebar
                    isMobileSidebarOpen={isMobileSidebarOpen}
                    setIsMobileSidebarOpen={setIsMobileSidebarOpen}
                />
            )}

            <nav className="w-full sticky top-0 h-14 z-10 md:border-b border-gray-200 py-2 md:p-0 md:h-20">
                {/* Mobile navbar */}
                <div className="flex justify-between items-center w-full h-full md:hidden pr-4 pt-4">
                    <button
                        onClick={() => setIsMobileSidebarOpen(true)}
                        className={`btn btn-sm btn-circle  ${(!showMobileSidebar) && 'invisible'
                            }`}
                    >
                        <RxHamburgerMenu />
                    </button>
                    {/* <span className="font-bold">
                        path
                    </span>
                    <Link
                        href="/notifications"
                        title="Notifications"
                        className={`btn btn-circle btn-ghost ${'invisible'} ${
                            router.pathname === '/notifications' && 'active-icon'
                        }`}
                    >
                        icon2
                    </Link> */}
                </div>
                {/* Desktop navbar */}
                <div className="justify-end gap-5 items-center h-full hidden md:flex px-4 bg-white">


                    <Popover className="relative h-full flex items-center gap-2 text-left">
                        <Popover.Button className="btn btn-ghost btn-circle border-none outline-none focus-visible:outline-none focus-visible:border-none ">
                            {/* <SlSettings /> */}
                            {/* <Image src={UserLogo} height={100} width={100} alt='لوگو کاربر' /> */}
                        </Popover.Button>

                        <Popover.Panel className="absolute bg-white drop-shadow-2xl shadow-2xl -right-44 top-16 p-5  rounded-xl w-52 z-20">
                            <div className="flex flex-row md:flex-col">
                                <Link href="/dashboard/Profile/" className=" btn-ghost  rounded-lg py-2 px-4">
                                    <div className="flex gap-2  items-center duration-300 justify-start">
                                        <AiOutlineUser className="text-xl duration-300" />
                                        <span
                                            className={`duration-300 rounded-xl `}>
                                            مشاهده پروفایل
                                        </span>{" "}
                                    </div>
                                </Link>
                                <button
                                    onClick={handleLogOut}
                                    className=" btn-ghost py-2 px-4 rounded-lg tooltip tooltip-right"
                                >
                                    <div className="flex gap-2  text-error items-center duration-300 justify-start">
                                        <AiOutlineLogout className="text-xl duration-300" />
                                        <span
                                            className={`duration-300 rounded-xl `}>
                                            خروج
                                        </span>{" "}
                                    </div>
                                </button>
                            </div>

                            <img src="/solutions.jpg" alt="" />
                        </Popover.Panel>
                    </Popover>



                    {/* Profile */}
                    {/* <div tabIndex={0} className="dropdown py-3"> */}
                    {/* {userInformation ? (
                                <label className="btn btn-ghost px-2 h-full flex items-center gap-2 text-left">
                                    <MdKeyboardArrowDown className="w-6 h-6" />
                                    <div dir="ltr" className="mr-auto space-y-1">
                                        <div className="text-xl font-bold dark:text-white font-en">
                                            {userInformation.data.profile.email_confirm
                                                ? userInformation.data.profile.email
                                                : userInformation.data.profile.mobile}
                                        </div>
                                        <span className="flex items-center gap-1 text-sm font-light">
                                            {userInformation.data.profile.verification_status
                                                .approved
                                                ? t('navbar.kyc.authorized')
                                                : t('navbar.kyc.unAuthorized')}

                                            {userInformation.data.profile.verification_status
                                                .approved ? (
                                                <RiShieldCheckFill className="text-green-500 text-lg" />
                                            ) : (
                                                <MdGppBad className="text-red-500 text-lg" />
                                            )}
                                        </span>
                                    </div>
                                    <HiUserCircle className="h-12 w-12" />
                                </label>
                            ) : (
                                <LoadingSkeleton className="w-[216px] h-[64px]" />
                            )} */}
                    {/* <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                    <Link title="KYC" href="/kyc">
                                        <li className="rounded-2xl">
                                            <label className="flex items-center gap-3 w-full dark:text-white">
                                                
                                                <span>
                                                    icon
                                                </span>
                                                <span className="font-bold text-base">
                                                    span
                                                </span>
                                            </label>
                                        </li>
                                    </Link>

                                <Link title="Profile" href="/settings/profile">
                                    <li>
                                        <label className="flex items-center gap-3 w-full dark:text-white">
                                            <span>
                                                icon
                                            </span>
                                            <span className="font-bold text-base">
                                               span
                                            </span>
                                        </label>
                                    </li>
                                </Link>
                                <li>
                                    <label
                                        htmlFor={modalId}
                                        className="flex items-center gap-3 w-full dark:text-white"
                                    >
                                        <span> icon </span>
                                        <span className="font-bold text-base">
                                           span
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div> */}

                </div>
            </nav>

            {/* <Modal className="pb-2" id={modalId}>
                <div className="text-center flex flex-col items-center gap-3">
                    <IoExit className="h-8 w-8 sm:h-12 sm:w-12" />
                    <div className="text-xl sm:text-3xl font-bold ">
                       div
                    </div>
                    <p className="mb-2">{t('navbar.logOutModal.subTitle')}</p>
                    <div className="flex w-full gap-3">
                        <button
                            disabled={logOutMutation.isLoading}
                            onClick={() => logOutMutation.mutate()}
                            className={`btn btn-error flex-1 ${
                                logOutMutation.isLoading && 'loading btn-disabled'
                            }`}
                        >
                            {!logOutMutation.isLoading && t('navbar.logOutModal.submitButtonLabel')}
                        </button>
                        <label htmlFor={modalId} className="btn btn-outline flex-1">
                            {t('navbar.logOutModal.cancelButtonLabel')}
                        </label>
                    </div>
                </div>
            </Modal> */}
        </>
    )
}

export default Navbar
