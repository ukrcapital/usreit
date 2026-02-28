import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CARD_CLASS =
  "rounded-[16px] border border-[#134169] flex items-center px-6 py-5 min-h-[80px] w-full text-left transition-all duration-300 hover:bg-[#134169] hover:text-white hover:shadow-md group";

export default function HandbookReitInzurPage() {
  return (
    <div className="main-container flex w-full flex-col items-center bg-[rgba(226,236,241,0.2)] relative overflow-hidden mx-auto my-0 pb-32">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[5vw] relative z-[2] pt-8 md:pt-12">
        {/* Хлібні крихти */}
        <div className="text-[11px] font-light text-[rgba(16,23,31,0.5)] mb-2">
          <Link to="/" className="hover:text-[#10171f]">Головна</Link>
          <span className="ml-1">/ Довідник</span>
        </div>

        <h1 className="text-[40px] md:text-[56px] lg:text-[66px] font-normal leading-tight text-[#10171f] tracking-[-1px] mb-10 md:mb-14">
          Довідник
        </h1>

        {/* Сітка категорій — як на inzhur.reit/handbook */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Link to="/contacts" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Про Inzhur</span>
          </Link>
          <a href="https://www.inzhur.reit/handbook#reit" className={CARD_CLASS} target="_blank" rel="noopener noreferrer">
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Про REIT</span>
          </a>
          <Link to="/" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Inzhur REIT</span>
          </Link>
          <Link to="/energy" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Inzhur Energy</span>
          </Link>
          <Link to="/" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">ОВДП</span>
          </Link>
          <Link to="/account" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Подарункові сертифікати</span>
          </Link>
          <Link to="/referral" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Реферальна програма</span>
          </Link>
          <Link to="/account" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Про оплати</span>
          </Link>
          <Link to="/account" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Про оподаткування</span>
          </Link>
          <Link to="/account" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Про декларування</span>
          </Link>
          <Link to="/account" className={CARD_CLASS}>
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Відкриття рахунку до 18 років</span>
          </Link>
          <a href="https://www.inzhur.reit/handbook#glossary" className={CARD_CLASS} target="_blank" rel="noopener noreferrer">
            <span className="text-[16px] md:text-[18px] font-light text-[#10171f] group-hover:text-white">Словник Inzhur</span>
          </a>
        </div>

        {/* Блок «Є запитання? Допоможемо!» — як на оригіналі */}
        <section className="mt-16 md:mt-24 rounded-[24px] bg-[#134169] p-8 md:p-10 text-white">
          <h2 className="text-[22px] md:text-[26px] font-normal tracking-[-0.5px] mb-6">
            Є запитання? Допоможемо!
          </h2>
          <p className="text-[14px] font-light text-white/90 mb-6 max-w-[560px]">
            Зв'яжіться з нами в месенджері або зателефонуйте — відповімо на питання про інвестиції, рахунки та документи.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="https://t.me/InzhurREIT_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-5 rounded-[12px] bg-white text-[#134169] text-[14px] font-medium hover:bg-white/90 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.21-1.12-.33-1.08-.7.02-.19.29-.39.81-.6 3.17-1.38 5.28-2.29 6.33-2.73 3.01-1.26 3.64-1.48 4.05-1.49.09 0 .28.02.41.13.11.09.14.22.15.33-.01.07-.01.19-.02.26z"/>
              </svg>
              Telegram-бот
            </a>
            <a
              href="viber://chat?number=%2B380671410070"
              className="inline-flex items-center gap-2 h-12 px-5 rounded-[12px] bg-white/15 text-white text-[14px] font-medium border border-white/30 hover:bg-white/25 transition-colors"
            >
              Viber
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=380671410070"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-5 rounded-[12px] bg-white/15 text-white text-[14px] font-medium border border-white/30 hover:bg-white/25 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="tel:+380442907685"
              className="inline-flex items-center gap-2 h-12 px-5 rounded-[12px] bg-white/15 text-white text-[14px] font-medium border border-white/30 hover:bg-white/25 transition-colors"
            >
              +38 044 290 76 85
            </a>
          </div>
          <p className="text-[13px] text-white/70 mt-4">
            Пн-Пт: з 09:00 до 18:00
          </p>
        </section>
      </div>
    </div>
  );
}
