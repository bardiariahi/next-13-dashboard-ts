import { BsFolder , BsCardList, BsExclamationCircle,BsClipboard2X } from "react-icons/bs";
import {HiOutlineUsers} from "react-icons/hi"
import { FiUsers , FiMessageCircle } from "react-icons/fi";
import { CiHeadphones , CiSearch } from "react-icons/ci";
import { IoBusinessOutline} from "react-icons/io5";
import { TbReportSearch} from "react-icons/tb";

import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCreditCard,
  HiOutlineBellAlert,
  HiOutlineAcademicCap,
  HiOutlineQuestionMarkCircle,
  HiOutlineDocumentText
} from "react-icons/hi2";
export const API_URL = "http://192.168.57.107:4001";
export const SERVER_URL = "http://192.168.57.107:4002";

export const EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
export const PASSWORD_REGEX =
  /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,}$/;
export const IRANIAN_PHONE_REGEX =
  /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
export const ATLEAST_8_CHARACTERS = /.{8,}/;
export const ATLEAST_7_CHARACTERS = /.{7,}/;
export const ATLEAST_10_CHARACTERS = /.{10,}/;
export const ATLEAST_5_CHARACTERS = /.{5,}/;
export const ATLEAST_3_CHARS = /.{3,}/;
export const ACCEPT_PERSIAN_CHA = /^[\u0600-\u06FF\s۰۱۲۳۴۵۶۷۸۹]+$/;
export const ENGLISH_CHARACTERS_ONLY = /^[\x00-\x7F]+$/;
export const ACCEPT_ONLY_NUMBERS = /^[0-9]*$/;

export const SIDEBAR_ITEMS = [
  {
    name: "داشبورد",
    url: "/dashboard",
    id: 3,
    icon: <HiOutlineUsers className="text-base duration-100" />,
  },
  {
    name: "صفحه کلاینت",
    url: "/second-client-page",
    id: 4,
    icon: <FiMessageCircle className="text-base duration-100" />,
  },
  {
    name: " صفحه دوم",
    url: "/second-page",
    id: 5,
    icon: <BsCardList className="text-base duration-100" />,
  },
  // {
  //   name: "گزارشات",
  //   url: null,
  //   id: 5,
  //   icon: <TbReportAnalytics className="text-base duration-100" />,
  //   childrens: [ 
  //     {
  //       name: "پیام های ارسال شده",
  //       url: "/dashboard/reports/smsList",
  //       id: 21,
  //       icon: <BsCardList className="text-base duration-100" />,
  //     }
  //   ],
  // },
  // {
  //   name: "کلمات ممنوعه",
  //   url: "/dashboard/avoid-words",
  //   id: 6,
  //   icon: <BsExclamationCircle className="text-base duration-100" />,
  // },
  // {
  //   name: "شرکت های استعلام",
  //   url: "/dashboard/inquiry-company",
  //   id: 7,
  //   icon: <IoBusinessOutline className="text-base duration-100" />,
  // },
  // {
  //   name: "استعلام",
  //   url: "/dashboard/inquiry",
  //   id: 10,
  //   icon: <CiSearch className="text-base duration-100" />,
  // },
  // {
  //   name: "گزارشات مردمی",
  //   url: "/dashboard/popular-reports",
  //   id: 8,
  //   icon: <HiOutlineDocumentText className="text-base duration-100" />,
  // },
  // {
  //   name: "هرزنامه",
  //   url: "/dashboard/spam",
  //   id: 9,
  //   icon: <BsClipboard2X    className="text-base duration-100" />,
  // },
  // {
  //   name: " گزارشات مدیریتی",
  //   url: "/dashboard/total-reports",
  //   id: 9,
  //   icon: <TbReportSearch    className="text-base duration-100" />,
  // },
];

export const SIDEBAR_ADMIN_ITEMS = [
  {
    name: "مدیریتی",
    url: "/",
    id: 1,
    icon: <BsFolder className="text-base duration-100" />,
  },
  {
    name: " مشتریان ",
    url: "/",
    id: 2,
    icon: <FiUsers className="text-base duration-100" />,
  },
  {
    name: "پیام رسان ها",
    url: "/",
    id: 3,
    icon: <HiOutlineChatBubbleLeftRight className="text-base duration-100" />,
  },
  {
    name: "مالی",
    url: "/",
    id: 4,
    icon: <HiOutlineCreditCard className="text-base duration-100" />,
  },
  {
    name: "اطلاعیه ها",
    url: "/",
    id: 5,
    icon: <HiOutlineBellAlert className="text-base duration-100" />,
  },
  {
    name: "آموزش ها",
    url: "/",
    id: 6,
    icon: <HiOutlineAcademicCap className="text-base duration-100" />,
  },
  {
    name: "سوالات متداول",
    url: "/backoffice/faq",
    id: 7,
    icon: <HiOutlineQuestionMarkCircle className="text-base duration-100" />,
  },
  {
    name: "تیکت ها",
    url: "/",
    id: 8,
    icon: <CiHeadphones className="text-base duration-100" />,
  },
];

export const HEADER_TITLES = [
  { title: "راهنمای استفاده", id: 0, url: "/help", icon: undefined },
  { title: "درباره ما", id: 1, url: "/about-us", icon: undefined },
  { title: "تماس با ما", id: 2, url: "/contact-us", icon: undefined },
];
