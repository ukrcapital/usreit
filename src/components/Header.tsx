import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useHomeBg, DEFAULT_HOME_BG } from "../context/HomeBgContext";

const MOBILE_NAV_LINKS: { label: string; path?: string }[] = [
  { label: "Довідник", path: "/handbook" },
  { label: "Про Інжур" },
  { label: "Про Андрія Журжія" },
  { label: "Новини" },
  { label: "Контакти", path: "/contacts" },
  { label: "Реферальна програма", path: "/referral" },
  { label: "Депозитарій Inzhur Capital", path: "/energy" },
  { label: "Девелопер Inzhur BUD", path: "/developer" },
];

export default function Header() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const homeBgCtx = useHomeBg();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const isHome = location.pathname === "/";
  const isUsSite = location.pathname.startsWith("/us");
  const isAccount = location.pathname === "/account" || location.pathname === "/login";

  const DESKTOP_MORE_LINKS: { label: string; path: string }[] = [
    { label: "Реферальна програма", path: "/referral" },
    { label: "Депозитарій Inzhur Capital", path: "/energy" },
    { label: "Девелопер Inzhur BUD", path: "/developer" },
  ];
  const isHomeOrUs = isHome || isUsSite;
  const desktopHeaderBg = !scrolled && isHomeOrUs ? DEFAULT_HOME_BG : undefined;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMoreOpen) return;
    const close = () => setIsMoreOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [isMoreOpen]);

  return (
    <>
      {/* Слайд-меню: мобільна версія завжди з бургером; десктоп — тільки коли залогінений. Один і той самий контент. */}
      <div
        className={`fixed inset-0 z-[1001] transition-[visibility,opacity] duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full bg-[#1A222B] shadow-xl flex flex-col transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Верх: лого зліва (у 2 рази більший), кнопка закриття справа */}
          <div className="flex items-center justify-between p-10 pb-2 pt-4 shrink-0">
            <a href="/" onClick={() => setIsMenuOpen(false)} className="shrink-0">
              <div className="w-[72px] h-[72px] rounded-[14px] border-2 border-[#10171f] flex items-center justify-center overflow-hidden bg-white">
                <span className="text-[#10171f] text-[32px] font-medium leading-none select-none" aria-hidden>꩜</span>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center text-[#10171f] hover:bg-gray-100 transition-colors"
              aria-label="Закрити меню"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Навігація — скрол, повзунок справа завжди видимий */}
          <nav className="burger-menu-nav flex-1 min-h-0 overflow-y-scroll overflow-x-hidden px-10">
            <ul className="pt-2.5 pb-1.5">
              {MOBILE_NAV_LINKS.map(({ label, path }) => (
                <li key={label}>
                  {path ? (
                    <Link
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 text-white text-[15px] hover:text-white/90"
                    >
                      <span>{label}</span>
                      <span className="text-white/50 text-xl font-light">›</span>
                    </Link>
                  ) : (
                    <a
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 text-white text-[15px] hover:text-white/90"
                    >
                      <span>{label}</span>
                      <span className="text-white/50 text-xl font-light">›</span>
                    </a>
                  )}
                  <div className="h-px w-full bg-white/10" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Нижній блок — прикріплений до низу (завжди відступ між Вхід і Девелопер Inzhur BUD) */}
          <div className="shrink-0 p-10 pt-4 pb-8 flex flex-col gap-0">
            {/* Кнопка Вхід — на ширину розподільника, закруглення як кнопка Х */}
            <div className="py-3 w-full">
              <Link
                to={isLoggedIn ? "/dashboard" : "/account"}
                onClick={() => setIsMenuOpen(false)}
                className="w-full h-11 rounded-[12px] border border-[#9AD32F] bg-transparent text-[#9AD32F] flex items-center justify-center gap-2 hover:bg-[#9AD32F]/10 transition-colors text-[15px]"
              >
                <svg className="w-5 h-5 text-[#9AD32F]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span>{isLoggedIn ? "Кабінет" : "Вхід"}</span>
              </Link>
            </div>

            <div className="h-px w-full bg-white/10 shrink-0" />

            {/* Служба підтримки */}
            <div className="flex items-center justify-between gap-2 py-3">
              <span className="text-[13px] text-white/80">Служба підтримки</span>
              <a href="#" className="text-[#5dade2] text-[13px] inline-flex items-center gap-1">
                Telegram
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7h-6M17 7v6" />
                </svg>
              </a>
            </div>

            {/* Розподільник між Служба підтримки і Менеджер */}
            <div className="h-px w-full bg-white/10 shrink-0" />

            {/* Менеджер — зліва підпис, справа телефон і графік */}
            <div className="flex items-center justify-between gap-4 py-3">
              <span className="text-[13px] text-white shrink-0">Менеджер</span>
              <div className="text-right">
                <a href="tel:+380442907685" className="block text-white text-[13px] font-semibold">+38 044 290 76 85</a>
                <span className="block text-[11px] text-white/70 mt-0.5">Пн-Пт: 10:00 - 18:00</span>
              </div>
            </div>

            <div className="h-px w-full bg-white/10 shrink-0" />

            {/* Ми в соцмережах — зліва текст, справа іконки (компактно, щоб усі 4 вміщались) */}
            <div className="flex items-center justify-between gap-3 py-3 min-w-0">
              <span className="text-[13px] text-white shrink-0">Ми в соцмережах</span>
              <div className="flex gap-1.5 shrink-0">
                <a href="#" className="w-9 h-8 rounded-[10px] border border-gray-400/40 flex items-center justify-center text-white hover:opacity-80 transition-opacity bg-transparent shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.21-1.12-.33-1.08-.7.02-.19.29-.39.81-.6 3.17-1.38 5.28-2.29 6.33-2.73 3.01-1.26 3.64-1.48 4.05-1.49.09 0 .28.02.41.13.11.09.14.22.15.33-.01.07-.01.19-.02.26z"/></svg></a>
                <a href="#" className="w-9 h-8 rounded-[10px] border border-gray-400/40 flex items-center justify-center text-white hover:opacity-80 transition-opacity bg-transparent shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg></a>
                <a href="#" className="w-9 h-8 rounded-[10px] border border-gray-400/40 flex items-center justify-center text-white hover:opacity-80 transition-opacity bg-transparent shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.64-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12 4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg></a>
                <a href="#" className="w-9 h-8 rounded-[10px] border border-gray-400/40 flex items-center justify-center text-white hover:opacity-80 transition-opacity bg-transparent shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24h11.49v-9.28H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.8 4.66-4.8 1.33 0 2.46.1 2.8.14v3.24h-1.92c-1.5 0-1.8.71-1.8 1.76v2.31h3.6l-.47 3.62h-3.13V24h6.11c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Мобільний хедер: лого + іконка акаунта + бургер */}
      <header className="header:hidden fixed top-4 left-0 right-0 z-[999] flex justify-center px-4">
        <div className="w-full max-w-[1280px] h-[72px] bg-[#e2ecf1] rounded-[24px] flex items-center justify-between px-4 md:px-6 shadow-md">
          <a href="/" className="flex items-center shrink-0">
            <div className="w-10 h-10 rounded-[12px] border-2 border-[#10171f] flex items-center justify-center overflow-hidden bg-white">
              <span className="text-[#10171f] text-sm font-medium leading-none select-none" aria-hidden>꩜</span>
            </div>
          </a>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to={isUsSite ? "/" : "/us"}
              className="w-10 h-10 rounded-[12px] flex items-center justify-center border border-[#10171f] text-[#10171f] hover:bg-[#10171f] hover:text-white transition-colors text-[13px] font-semibold"
              aria-label={isUsSite ? "Українська" : "English"}
            >
              {isUsSite ? "UA" : "US"}
            </Link>
            <Link
              to={isLoggedIn ? "/dashboard" : "/account"}
              className="w-10 h-10 rounded-[12px] flex items-center justify-center border border-[#10171f] text-[#10171f] hover:bg-[#10171f] hover:text-white transition-colors"
              aria-label={isLoggedIn ? "Кабінет" : "Вхід"}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 rounded-[12px] flex items-center justify-center bg-[#10171f] text-white hover:opacity-90 shrink-0"
              aria-label="Меню"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Десктопний хедер (орієнтир з оригіналу): висота 64px, padding 24px, лого 60×40 pill, нав gap 32px, кнопки 40px, Telegram #D4DDE7, Кабінет white border #A0B0C4 */}
      <header className="hidden header:flex fixed top-4 left-0 w-full justify-center z-[999]">
        <div
          className={`w-full max-w-[1584px] mx-4 h-[64px] relative transition-all duration-300 ${
            scrolled ? "bg-[#e2ecf1] rounded-[24px] shadow-md" : "shadow-none"
          }`}
          style={scrolled ? undefined : desktopHeaderBg != null ? { backgroundColor: desktopHeaderBg } : { backgroundColor: "transparent" }}
        >
          <div className="w-full h-full px-6 flex items-center justify-between">
            {/* Логотип: ~60×40 pill, border 1px; відступ справа до наву 40px */}
            <a href="/" className="w-[60px] h-[40px] rounded-[20px] border border-[#4A5568] flex items-center justify-center overflow-hidden bg-white cursor-pointer hover:opacity-80 transition-opacity shrink-0 mr-10">
              <span className="text-[#10171f] text-base font-semibold leading-none select-none" aria-hidden>꩜</span>
            </a>

            {/* Навігація: посилання завжди видимі на десктопі; при наведенні — підклада #D5DDE7 */}
            <nav className="flex items-center flex-nowrap gap-1.5 xl:gap-2 text-[15px] font-normal font-sans text-[#10171f] min-w-0 shrink">
              <>
                <Link to="/handbook" className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full hover:bg-[#D5DDE7] transition-colors">Довідник</Link>
                <span className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full hover:bg-[#D5DDE7] cursor-pointer transition-colors">Про Інжур</span>
                <span className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full hover:bg-[#D5DDE7] cursor-pointer transition-colors">Про Андрія Журжія</span>
                <span className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full hover:bg-[#D5DDE7] cursor-pointer transition-colors">Новини</span>
                <Link to="/contacts" className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full hover:bg-[#D5DDE7] transition-colors">Контакти</Link>
              </>
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setIsMoreOpen((v) => !v); }}
                  className="w-8 h-8 rounded-full bg-[#F0F4F8] flex justify-center items-center cursor-pointer hover:bg-[#E2E8F0] transition-colors"
                  aria-label="Ще"
                  aria-expanded={isMoreOpen}
                  aria-haspopup="true"
                >
                  <span className="text-[13px] font-medium leading-none text-[#10171f]">...</span>
                </button>
                {isMoreOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 min-w-[260px] py-3 bg-white rounded-2xl shadow-lg border border-[#E2E8F0] z-[1000]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {DESKTOP_MORE_LINKS.map(({ label, path }, index) => (
                      <React.Fragment key={path}>
                        {index > 0 && <div className="mx-4 my-2 h-px bg-[#E2E8F0]" aria-hidden />}
                        <Link
                          to={path}
                          onClick={() => setIsMoreOpen(false)}
                          className="block px-5 py-3 text-[15px] font-normal text-[#10171f] hover:bg-[#F0F4F8] transition-colors"
                        >
                          {label}
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Кнопки справа: мова, Консультація, Кабінет — однаковий фон #D4DDE7 */}
            <div className="flex items-center gap-3 shrink-0 ml-10">
              <Link
                to={isUsSite ? "/" : "/us"}
                className="w-10 h-10 rounded-lg bg-[#D4DDE7] hover:bg-[#CBD5E0] flex items-center justify-center text-[#10171f] transition-colors text-[13px] font-semibold"
                aria-label={isUsSite ? "Українська" : "English"}
              >
                {isUsSite ? "UA" : "US"}
              </Link>
              <button className="h-10 min-w-[190px] px-4 bg-[#D4DDE7] hover:bg-[#CBD5E0] rounded-lg transition-colors text-[15px] font-normal text-[#10171f]">
                Консультація в Telegram
              </button>
              <Link
                to={isLoggedIn ? "/dashboard" : "/account"}
                className="h-10 px-4 bg-[#D4DDE7] hover:bg-[#CBD5E0] rounded-lg transition-colors flex justify-center items-center gap-2 text-[#10171f] min-w-[100px]"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="text-[15px] font-normal">{isLoggedIn ? "Кабінет" : "Вхід"}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
