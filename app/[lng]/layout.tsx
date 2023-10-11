import "./global.css";
import dynamic from "next/dynamic";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { Footer } from "./components/Footer";
const Sidebar = dynamic(() => import("../[lng]/components/Sidebar.component"), {
  ssr: false,
});
import Navbar from "../[lng]/components/navbar.component";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
  showMobileSidebar = true,
}: any) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <div>
          <div className="w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
