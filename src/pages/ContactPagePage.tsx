import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CONTENT_MAX = "max-w-[1280px]";
const CONTENT_PX = "px-4 md:px-8 lg:px-[5vw]";

export default function ContactPagePage() {
  return (
    <div className="main-container flex w-full flex-col items-center bg-[rgba(226,236,241,0.2)] relative overflow-x-hidden mx-auto my-0 pb-32">
      <div className={`w-full ${CONTENT_MAX} mx-auto ${CONTENT_PX} relative z-[2] pt-8 md:pt-12`}>
        {/* Хлібні крихти */}
        <nav className="text-[11px] font-light text-[rgba(16,23,31,0.5)] mb-6" aria-label="Хлібні крихти">
          <Link to="/" className="hover:text-[#10171f]">Головна</Link>
          <span className="ml-1">/ Контакти</span>
        </nav>

        <h1 className="text-[36px] md:text-[48px] lg:text-[66px] font-normal leading-tight text-[#10171f] tracking-[-1px] mb-10 md:mb-14">
          Контакти
        </h1>

        {/* Є запитання? + канали зв'язку */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-[18px] md:text-[20px] font-normal text-[#10171f] mb-4">Є запитання?</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://t.me/InzhurREIT_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-4 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.21-1.12-.33-1.08-.7.02-.19.29-.39.81-.6 3.17-1.38 5.28-2.29 6.33-2.73 3.01-1.26 3.64-1.48 4.05-1.49.09 0 .28.02.41.13.11.09.14.22.15.33-.01.07-.01.19-.02.26z"/>
              </svg>
              Telegram-бот
            </a>
            <a
              href="viber://chat?number=%2B380671410070"
              className="inline-flex items-center gap-2 h-11 px-4 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors"
            >
              Viber
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=380671410070"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-4 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </section>

        {/* Менеджер, Email, ЄДРПОУ — сітка на мобілі колонкою */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24 pb-12 border-b border-[rgba(16,23,31,0.15)]">
          <div>
            <p className="text-[13px] font-light text-[#10171f] mb-2">Менеджер з продажів</p>
            <a href="tel:+380442907685" className="text-[24px] md:text-[30px] font-light text-[#10171f] tracking-[-1px] hover:underline">
              +38 044 290 76 85
            </a>
          </div>
          <div>
            <p className="text-[13px] font-light text-[#10171f] mb-2">Eлектронна пошта</p>
            <a href="mailto:info@inzhur.reit" className="text-[24px] md:text-[30px] font-light text-[#10171f] tracking-[-1px] hover:underline">
              info@inzhur.reit
            </a>
          </div>
          <div>
            <p className="text-[13px] font-light text-[#10171f] mb-2">Код ЄДРПОУ</p>
            <span className="text-[24px] md:text-[30px] font-light text-[#10171f] tracking-[-1px]">44154853</span>
          </div>
        </section>

        {/* Долучайся до спільноти */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-4">
            Долучайся до спільноти
          </h2>
          <p className="text-[16px] md:text-[20px] font-light leading-relaxed text-[#10171f] mb-8">
            Всі новини — там: нові емісії, статистика фондів, дати виплат дивідендів і багато іншого.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <a href="https://t.me/InzhurREIT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 md:h-14 px-6 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors">
              Telegram
            </a>
            <a href="https://www.youtube.com/channel/UCizm4WrZeuwFwtfT8c6Yemw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 md:h-14 px-6 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors">
              YouTube
            </a>
            <a href="https://www.instagram.com/inzhur_reit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 md:h-14 px-6 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/InzhurREIT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 md:h-14 px-6 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </section>

        {/* Або заходь в наш затишний офіс */}
        <section>
          <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Або заходь в наш затишний офіс
          </h2>
          <p className="text-[16px] font-normal text-[#10171f] mb-2">Адреса офісу в Києві</p>
          <p className="text-[24px] md:text-[30px] font-light leading-snug text-[#10171f] tracking-[-1px] mb-4">
            вул. Жилянська, буд. 48,50А
            <br />
            (БЦ «Прайм»), 7 поверх
          </p>
          <a
            href="https://www.google.com/maps/place/INZHUR/@50.4345986,30.5019891,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[13px] font-normal text-[#10171f] underline hover:no-underline mb-4"
          >
            Прокласти маршрут
          </a>
          <p className="text-[14px] font-light text-[#10171f]">
            Графік роботи офісу Пн-Пт: з 09:00 до 18:00
          </p>
        </section>
      </div>
    </div>
  );
}
