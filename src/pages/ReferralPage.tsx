import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CONTENT_MAX = "max-w-[1280px]";
const CONTENT_PX = "px-4 md:px-8 lg:px-[5vw]";

const REFERRAL_LINK = "https://www.inzhur.reit/signin?ref";

function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      resolve();
    } catch (e) {
      reject(e);
    }
    document.body.removeChild(ta);
  });
}

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyToClipboard(REFERRAL_LINK);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="main-container flex w-full flex-col items-center min-h-screen bg-[#E3EDF2] md:bg-[#eef2f5] relative overflow-x-hidden mx-auto my-0 pb-32">
      <div className={`w-full ${CONTENT_MAX} mx-auto ${CONTENT_PX} relative z-[2] pt-6 md:pt-10`}>
        {/* Картка 1: Win-win програма */}
        <section className="rounded-[24px] bg-white shadow-sm p-6 md:p-8 mb-6">
          <h1 className="text-[22px] md:text-[26px] font-semibold text-[#10171f] tracking-[-0.5px] mb-4">
            Win-win програма для залучення нових співвласників у Inzhur
          </h1>
          <p className="text-[14px] font-light text-[#10171f] leading-relaxed mb-6">
            Більше співвласників — краща ліквідність і фінансова вигода для кожного. Ваш друг отримає 0.5% знижки на першу купівлю інвестиційних сертифікатів, а ви — 0.5% від суми цієї угоди.
          </p>
          <Link
            to="/referral"
            className="inline-flex items-center gap-2 text-[14px] font-normal text-[#10171f] underline hover:no-underline"
          >
            Детальніше про умови програми
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </Link>
        </section>

        {/* Картка 2: Ваше реферальне посилання + поле + кнопка Скопіювати */}
        <section className="rounded-[24px] bg-white shadow-sm p-6 md:p-8 mb-6">
          <h2 className="text-[20px] md:text-[22px] font-semibold text-[#10171f] tracking-[-0.5px] mb-3">
            Ваше реферальне посилання
          </h2>
          <p className="text-[14px] font-light text-[#10171f] mb-2">
            Запросіть друга й отримайте 1% від суми першої інвестиції на двох
          </p>
          <p className="text-[12px] font-light text-[#10171f]/80 mb-6">
            Зверніть увагу, що реєстрація має відбутися саме за цим реферальним посиланням, щоб знижка та бонуси були застосовані
          </p>
          <div className="w-full rounded-[16px] bg-[rgba(16,23,31,0.06)] border border-[rgba(16,23,31,0.1)] px-4 py-3 mb-4">
            <span className="text-[13px] md:text-[14px] font-normal text-[#10171f] break-all select-all">
              {REFERRAL_LINK}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="w-full md:w-auto min-w-[200px] h-14 rounded-[16px] bg-[#10171f] text-white text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[#0d1218] transition-colors"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            {copied ? "Скопійовано" : "Скопіювати"}
          </button>
        </section>

        {/* Статистика: Запрошених друзів / Вже накопичено */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="rounded-[24px] bg-white shadow-sm p-6 flex items-center justify-between">
            <span className="text-[13px] font-light text-[#10171f]">Запрошених друзів</span>
            <span className="text-[28px] md:text-[32px] font-light text-[#10171f]">0</span>
          </div>
          <div className="rounded-[24px] bg-white shadow-sm p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-light text-[#10171f]">Вже накопичено</span>
              <button type="button" className="w-5 h-5 rounded-full border border-[#10171f]/30 flex items-center justify-center text-[#10171f]/70 text-[12px] font-normal hover:bg-[#10171f]/10 transition-colors" aria-label="Деталі про накопичення">i</button>
            </div>
            <span className="text-[28px] md:text-[32px] font-light text-[#10171f]">0 ₴</span>
          </div>
        </div>

        {/* Залишились питання? — дві підкартки */}
        <section className="rounded-[24px] bg-white shadow-sm p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-semibold text-[#10171f] tracking-[-0.5px] mb-6">
            Залишились питання?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Звертайся до менеджерів — зелена рамка */}
            <div className="rounded-[20px] border-2 border-[#81C784] bg-[#E8F5E9]/30 p-6 flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-[17px] font-semibold text-[#2E7D32]">Звертайся до менеджерів</h3>
                <svg className="w-8 h-8 text-[#2E7D32] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <p className="text-[13px] font-light text-[#10171f] leading-relaxed mb-6">
                Ти завжди можеш звернутись до наших менеджерів підтримки з будь-яким питанням. Поганих питань не буває :)
              </p>
              <Link
                to="/contacts"
                className="mt-auto inline-flex items-center justify-center gap-2 h-12 rounded-[12px] border-2 border-[#81C784] bg-[#E8F5E9]/50 text-[#10171f] text-[14px] font-medium hover:bg-[#C8E6C9]/50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Служба підтримки
              </Link>
            </div>
            {/* Розберись у всьому — помаранчева рамка */}
            <div className="rounded-[20px] border-2 border-[#FFAB91] bg-[#FBE9E7]/30 p-6 flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-[17px] font-semibold text-[#BF360C]">Розберись у всьому</h3>
                <svg className="w-8 h-8 text-[#BF360C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  <path d="M8 7h8M8 11h8" />
                </svg>
              </div>
              <p className="text-[13px] font-light text-[#10171f] leading-relaxed mb-6">
                Довідник – найкращий інструмент, щоб розібратись у всьому самому та мати серйозну базу для дискусії в спільноті та питань менеджерам підтримки :)
              </p>
              <Link
                to="/handbook"
                className="mt-auto inline-flex items-center justify-center gap-2 h-12 rounded-[12px] border-2 border-[#FFAB91] bg-[#FBE9E7]/50 text-[#10171f] text-[14px] font-medium hover:bg-[#FFCCBC]/50 transition-colors"
              >
                <span className="w-6 h-6 rounded-full border-2 border-[#BF360C] flex items-center justify-center text-[11px] font-semibold text-[#BF360C]">?</span>
                Довідник Inzhur
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
