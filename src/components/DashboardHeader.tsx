import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PHONE = "+38 044 290 76 85";
const TELEGRAM_LINK = "https://t.me/inzhur";
const SITE_LINK = "https://inzhur.reit";

export default function DashboardHeader() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [supportOpen, setSupportOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const supportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (supportRef.current && !supportRef.current.contains(e.target as Node)) setSupportOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate("/account", { replace: true });
  };

  return (
    <>
      {/* Хедер кабінету: лого, Огляд, Документи, реферал, Підтримка, Активні заявки, бургер */}
      <header className="fixed top-4 left-0 right-0 z-[999] flex justify-center px-4">
        <div className="w-full max-w-[1280px] h-[72px] md:h-[80px] bg-[#e2ecf1] rounded-[24px] flex items-center justify-between px-4 md:px-6 shadow-md">
          {/* Лого + навігація */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 min-w-0">
            <Link to="/" className="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center rounded-[12px] border-2 border-[#10171f] bg-white overflow-hidden">
              <span className="text-[#10171f] text-sm md:text-base font-medium leading-none select-none" aria-hidden>꩜</span>
            </Link>
            <nav className="hidden header:flex items-center gap-6 lg:gap-8 text-[13px] font-normal text-[#10171f]">
              <Link to="/dashboard" className="hover:underline font-medium">Огляд</Link>
              <Link to="/dashboard/documents" className="hover:underline">Документи</Link>
              <Link to="/dashboard/referral" className="flex items-center gap-1.5 text-[#10171f]/90 hover:underline">
                <svg className="w-4 h-4 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-5 7c-.16.22-.25.48-.25.65V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2.5l1.5-1.5V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-8.5c0-.55-.45-1-1-1z" />
                </svg>
                Запросіть друга й отримайте 1% на двох
              </Link>
            </nav>
          </div>

          {/* Права частина: Підтримка, Активні заявки, бургер */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="relative hidden header:block" ref={supportRef}>
              <button
                type="button"
                onClick={() => setSupportOpen((v) => !v)}
                className="h-10 px-4 bg-white rounded-[12px] flex items-center gap-2 text-[#10171f] text-[13px] hover:bg-gray-50 border border-[rgba(16,23,31,0.1)]"
              >
                <span className="text-[8px] uppercase opacity-50">inzhur</span>
                <span>Підтримка</span>
                <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {supportOpen && (
                <div className="absolute top-full right-0 mt-2 w-[200px] bg-white rounded-[12px] border border-[rgba(16,23,31,0.1)] shadow-lg py-2 z-30">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="block px-4 py-2 text-[11px] text-[#10171f] hover:bg-[#e2ecf1]/50">{PHONE}</a>
                  <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[11px] text-[#10171f] hover:bg-[#e2ecf1]/50">Телеграм</a>
                </div>
              )}
            </div>
            <button
              type="button"
              className="hidden header:flex h-10 px-4 bg-white rounded-[12px] items-center gap-2 text-[#10171f] text-[13px] border border-[rgba(16,23,31,0.1)] hover:bg-gray-50"
            >
              Активні заявки
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 rounded-[12px] bg-[#10171f] text-white flex items-center justify-center hover:opacity-90 md:rounded-[12px]"
              aria-label="Меню"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Бургер-меню для залогіненого — схема як без залогування, інші тексти + Вийти */}
      <div
        className={`header:hidden fixed inset-0 z-[1001] transition-[visibility,opacity] duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} aria-hidden />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full bg-[#1A222B] shadow-xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Верх: лого зліва, кнопка закриття справа (X в темному колі) */}
          <div className="flex items-center justify-between p-6 pb-4 shrink-0">
            <Link to="/" onClick={() => setMenuOpen(false)} className="shrink-0">
              <div className="w-24 h-24 rounded-[20px] border-2 border-[#10171f] flex items-center justify-center overflow-hidden bg-white">
                <span className="text-[#10171f] text-4xl font-medium leading-none select-none" aria-hidden>꩜</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-[12px] bg-[#10171f] text-white flex items-center justify-center hover:opacity-90"
              aria-label="Закрити"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Навігація: Огляд, Документи, Реферал, Вийти з іконкою */}
          <nav className="flex-1 min-h-0 overflow-y-auto px-6">
            <ul className="pt-2 pb-4">
              <li>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-3.5 text-white text-[15px] hover:text-white/90">
                  <span>Огляд</span>
                  <span className="text-white/50 text-xl font-light">›</span>
                </Link>
                <div className="h-px w-full bg-white/10" />
              </li>
              <li>
                <Link to="/dashboard/documents" onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-3.5 text-white text-[15px] hover:text-white/90">
                  <span>Документи</span>
                  <span className="text-white/50 text-xl font-light">›</span>
                </Link>
                <div className="h-px w-full bg-white/10" />
              </li>
              <li>
                <Link to="/dashboard/referral" onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-3.5 text-white text-[15px] hover:text-white/90">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-5 7c-.16.22-.25.48-.25.65V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2.5l1.5-1.5V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-8.5c0-.55-.45-1-1-1z" />
                    </svg>
                    Запросіть друга й отримайте 1% на двох
                  </span>
                  <span className="text-white/50 text-xl font-light">›</span>
                </Link>
                <div className="h-px w-full bg-white/10" />
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center justify-between w-full py-3.5 text-white text-[15px] hover:text-white/90"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded flex items-center justify-center bg-[#dc3545] shrink-0">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 17H9" />
                      </svg>
                    </span>
                    Вийти
                  </span>
                  <span className="text-white/50 text-xl font-light">›</span>
                </button>
                <div className="h-px w-full bg-white/10" />
              </li>
            </ul>

            {/* Кнопка «Чат інвесторів Inzhur» */}
            <div className="py-4">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-[12px] border border-white text-white text-[15px] hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Чат інвесторів Inzhur
              </a>
            </div>
          </nav>

          {/* Нижній блок: підтримка, менеджер, довідник, посилання на сайт */}
          <div className="shrink-0 p-6 pt-4 pb-8 flex flex-col gap-0">
            <div className="flex justify-between items-center py-3">
              <span className="text-[13px] text-white/80">Служба підтримки</span>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-[#5dade2] text-[13px] inline-flex items-center gap-1 hover:underline">
                Telegram
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7h-6M17 7v6" />
                </svg>
              </a>
            </div>
            <div className="h-px w-full bg-white/10 shrink-0" />
            <div className="flex justify-between items-start gap-4 py-3">
              <span className="text-[13px] text-white shrink-0">Менеджер</span>
              <div className="text-right">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="block text-white text-[13px] font-medium hover:underline">
                  {PHONE}
                </a>
                <span className="block text-[11px] text-white/60 mt-0.5">Пн-Пт: 10:00 - 18:00</span>
              </div>
            </div>
            <div className="h-px w-full bg-white/10 shrink-0" />
            <div className="flex justify-between items-center py-3">
              <span className="text-[13px] text-white/80">Залишились питання?</span>
              <Link to="/handbook" onClick={() => setMenuOpen(false)} className="text-white text-[13px] inline-flex items-center gap-1 hover:underline">
                Довідник
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7h-6M17 7v6" />
                </svg>
              </Link>
            </div>
            <div className="h-px w-full bg-white/10 shrink-0 mt-2" />
            <a
              href={SITE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-4 text-[#9AD32F] text-[15px] font-light hover:underline mt-2"
            >
              На сайт Inzhur.reit
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
