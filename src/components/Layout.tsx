import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import { useHomeBg, DEFAULT_HOME_BG } from "../context/HomeBgContext";

const SCROLL_SHOW_THRESHOLD = 0.2; // показувати стрілку після 20% прокрутки

export default function Layout() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setShowScrollTop(maxScroll > 0 && window.scrollY >= maxScroll * SCROLL_SHOW_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);
  const homeBgCtx = useHomeBg();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isHome = location.pathname === "/";
  const isUsHome = location.pathname === "/us";
  const isAccount = location.pathname === "/account" || location.pathname === "/login" || location.pathname === "/reg";
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

      {/* Стрілка «вгору»: тільки на мобільному, з’являється після 20% прокрутки */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="header:hidden fixed bottom-6 left-6 z-[998] w-[43px] h-[43px] rounded-full bg-[#0f1a22] flex items-center justify-center text-white shadow-lg hover:bg-[#151f28] active:scale-95 transition-all duration-200"
          aria-label="Прокрутити вгору"
        >
          <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}

      {!isDashboardOrAccount && <Footer />}
    </div>
  );
}