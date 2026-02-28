import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import { useHomeBg, DEFAULT_HOME_BG } from "../context/HomeBgContext";

export default function Layout() {
  const location = useLocation();
  const homeBgCtx = useHomeBg();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isHome = location.pathname === "/";
  const isUsHome = location.pathname === "/us";
  const isAccount = location.pathname === "/account" || location.pathname === "/login";
  const useHomeLikeBg = isHome || isUsHome;

  const isDashboardOrAccount = isDashboard || isAccount;
  const bgClass = isDashboardOrAccount ? "bg-[#eef2f5]" : "";
  const pageBg = isDashboardOrAccount
    ? null
    : useHomeLikeBg
      ? (homeBgCtx?.homeBg ?? DEFAULT_HOME_BG)
      : DEFAULT_HOME_BG;
  const bgStyle = pageBg != null ? { backgroundColor: pageBg } : undefined;

  return (
    <div
      className={`flex flex-col min-h-screen w-full relative transition-colors duration-500 ${bgClass}`}
      style={bgStyle}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1002] focus:px-4 focus:py-2 focus:bg-[#10171f] focus:text-white focus:rounded-[12px] focus:outline-none"
      >
        Перейти до контенту
      </a>
      {isDashboard ? <DashboardHeader /> : <Header />}

      {/* Відступ під хедер: dashboard та account — однаковий зазор на mob (112px); desktop — окремо */}
      <main
        id="main-content"
        className={`flex-grow w-full flex justify-center ${
          isDashboard ? "pt-[112px] md:pt-[120px]" : isAccount ? "pt-[112px] header:pt-[65px]" : "pt-[62px] header:pt-[65px]"
        }`}
        tabIndex={-1}
      >
        <Outlet />
      </main>

      {!isDashboardOrAccount && <Footer />}
    </div>
  );
}