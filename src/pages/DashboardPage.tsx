import React, { useState } from "react";
import "./index.css";

export default function DashboardPage() {
  const [reinvest, setReinvest] = useState(false);

  return (
    <div className="main-container flex w-full flex-col items-center bg-[#f0f2f5] min-h-screen relative overflow-x-hidden mx-auto my-0 pb-32">
      <div className="w-full max-w-[1280px] px-4 md:px-8 relative z-[2] mt-0">
        {/* Банер — податкове резидентство */}
        <div className="w-full min-h-[72px] bg-[#e8eaed] rounded-[16px] mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 md:px-6 md:py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-[#429243]/15 flex items-center justify-center shrink-0" aria-hidden>
              <svg className="w-5 h-5 text-[#429243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M12 11v6M9 14h6" />
              </svg>
            </div>
            <span className="text-[14px] md:text-[16px] text-[#10171f] font-normal">
              Необхідно надати дані про податкове резидентство
            </span>
          </div>
          <button className="bg-[#10171f] text-white px-6 py-3 rounded-[12px] text-[13px] font-medium shrink-0 hover:bg-[#0d1218] transition-colors">
            Перейти
          </button>
        </div>

        {/* Огляд — заголовок */}
        <h1 className="text-[24px] md:text-[28px] font-normal tracking-[-1px] text-[#10171f] mt-8 mb-6">
          Огляд
        </h1>

        {/* Три картки */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Картка 1: Співвласник + Брокерський рахунок + Дії */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Співвласник</span>
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#10171f] mt-1">
                  Козак Святослав Володимирович
                </h2>
              </div>
              <a href="#" className="text-[11px] text-[#10171f] border border-[rgba(16,23,31,0.15)] rounded-[8px] px-3 py-2 hover:bg-[#f5f5f5] transition-colors shrink-0">
                Профіль
              </a>
            </div>
            <div className="border-t border-[rgba(16,23,31,0.1)] pt-4">
              <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Брокерський рахунок</span>
              <p className="text-[24px] md:text-[26px] font-semibold text-[#10171f] mt-1">606.15 $</p>
              <p className="text-[11px] text-[#10171f]/60 mt-1">Всього проінвестовано: 517.95 $</p>
            </div>
            <div className="border-t border-[rgba(16,23,31,0.1)] pt-4 mt-4">
              <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Дохід від дивідендів</span>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-[18px] font-semibold text-[#429243]">119.57 $</span>
                <svg className="w-4 h-4 text-[#429243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <select className="text-[11px] text-[#10171f]/60 border-0 bg-transparent cursor-pointer focus:outline-none focus:ring-0">
                  <option>за весь час</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[rgba(16,23,31,0.1)]">
              <span className="text-[13px] text-[#10171f]">Автоматична доінвестиція дивідендів</span>
              <button
                type="button"
                role="switch"
                aria-checked={reinvest}
                onClick={() => setReinvest(!reinvest)}
                className={`w-11 h-6 rounded-full relative transition-colors ${reinvest ? "bg-[#429243]" : "bg-[#dfdede]"}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${reinvest ? "left-[22px]" : "left-0.5"}`} />
              </button>
            </div>
            <div className="mt-6 p-4 bg-[rgba(16,23,31,0.04)] rounded-[16px] flex items-center justify-between gap-3 border border-[rgba(16,23,31,0.08)]">
              <button type="button" className="flex items-center gap-1.5 text-[13px] text-[#10171f] hover:underline">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l-7 7 7 7" />
                </svg>
                Зняти
              </button>
              <div className="flex-1 min-w-0 text-center">
                <input
                  type="text"
                  defaultValue="99.76 $"
                  className="w-full max-w-[120px] mx-auto text-center text-[18px] font-semibold text-[#10171f] bg-transparent border-0 focus:outline-none focus:ring-0"
                  aria-label="Вільні для інвестування"
                />
                <p className="text-[10px] text-[#10171f]/50 mt-0.5">Вільні для інвестування</p>
              </div>
              <button type="button" className="flex items-center gap-1.5 text-[13px] text-[#10171f] hover:underline">
                Поповнити
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          </div>

          {/* Картка 2: Фонд Inzhur REIT */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-[17px] md:text-[18px] font-semibold text-[#10171f]">Фонд Inzhur REIT</h2>
              <div className="w-14 h-14 rounded-[12px] bg-[#e2ecf1] flex items-center justify-center shrink-0" aria-hidden>
                <div className="w-8 h-8 rounded bg-[#134169]/20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 border-t border-[rgba(16,23,31,0.1)] pt-4">
              <div>
                <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Поточна вартість сертифікатів</span>
                <p className="text-[17px] font-semibold text-[#10171f] mt-1">506.39 $</p>
                <p className="text-[11px] text-[#10171f]/50">2.045 часток</p>
              </div>
              <div>
                <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Ціна продажу</span>
                <p className="text-[17px] font-semibold text-[#10171f] mt-1 flex items-center gap-1">0.2476 $ <span className="text-[#10171f]/40">ⓘ</span></p>
              </div>
              <div>
                <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Проінвестовано у фонд</span>
                <p className="text-[17px] font-semibold text-[#10171f] mt-1">517.95 $</p>
              </div>
              <div>
                <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Виплачено дивідендів</span>
                <p className="text-[17px] font-semibold text-[#10171f] mt-1">119.57 $</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 py-2 px-3 rounded-[10px] bg-[#e8f4fc] text-[12px] text-[#10171f]/80">
              <span className="shrink-0 text-[#10171f]/50">ⓘ</span>
              <span>зараховуються на брокерський рахунок</span>
            </div>
            <div className="flex gap-2 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 aspect-[4/3] max-w-[80px] rounded-[10px] bg-[#e2ecf1]" aria-hidden />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-[rgba(16,23,31,0.1)]">
              <div>
                <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Ціна купівлі</span>
                <p className="text-[15px] font-semibold text-[#10171f] mt-1">0.2478 $</p>
              </div>
              <div>
                <span className="text-[11px] text-[#10171f]/50 uppercase tracking-wide">Доступно сертифікатів</span>
                <p className="text-[15px] font-semibold text-[#10171f] mt-1">1 782 021</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <button className="w-full h-12 bg-[#10171f] text-white rounded-[12px] text-[13px] font-medium hover:bg-[#0d1218] transition-colors">
                + Інвестувати ще
              </button>
              <div className="flex gap-2">
                <button className="flex-1 h-10 border border-[rgba(16,23,31,0.2)] text-[#10171f] rounded-[12px] text-[12px] hover:bg-[#f5f5f5] transition-colors">
                  ↓ Продати
                </button>
                <button className="flex-1 h-10 border border-[rgba(16,23,31,0.2)] text-[#10171f] rounded-[12px] text-[12px] hover:bg-[#f5f5f5] transition-colors">
                  Про фонд
                </button>
              </div>
            </div>
          </div>

          {/* Картка 3: Промо */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col overflow-hidden">
            <div className="w-full aspect-[4/3] max-h-[140px] rounded-[16px] bg-[#e2ecf1] flex items-center justify-center mb-6" aria-hidden>
              <div className="w-20 h-16 rounded-lg bg-[#134169]/10" />
            </div>
            <h2 className="text-[18px] md:text-[20px] font-semibold text-[#10171f] leading-tight">
              Твої інвестиції у топову велику нерухомість
            </h2>
            <p className="text-[13px] text-[#10171f]/70 mt-3 leading-relaxed">
              Ми постійно працюємо над новими можливостями для інвесторів. Слідкуйте за оновленнями.
            </p>
          </div>
        </div>

        {/* Історія транзакцій */}
        <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-[18px] md:text-[20px] font-normal text-[#10171f] tracking-[-1px]">
              Історія транзакцій
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <select className="rounded-[10px] border border-[rgba(16,23,31,0.15)] px-4 py-2.5 text-[13px] text-[#10171f] bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#10171f]/20">
                <option>Тип: Всі операції</option>
              </select>
              <button className="rounded-[10px] border border-[rgba(16,23,31,0.15)] px-4 py-2.5 text-[13px] text-[#10171f] flex items-center gap-2 hover:bg-[#f5f5f5] transition-colors">
                Експортувати в XLS
              </button>
            </div>
          </div>
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-[13px] text-[#10171f] min-w-[500px]">
              <thead>
                <tr className="text-[11px] text-[#10171f]/50 uppercase text-left border-b border-[rgba(16,23,31,0.12)]">
                  <th className="pb-3 pr-4 font-normal">Дата</th>
                  <th className="pb-3 pr-4 font-normal">Опис</th>
                  <th className="pb-3 pr-4 font-normal">Фонд / Актив</th>
                  <th className="pb-3 text-right font-normal">Сума</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[rgba(16,23,31,0.08)]">
                  <td className="py-4 pr-4 text-[#10171f]/60">10.02.2026</td>
                  <td className="py-4 pr-4">Сплата податку з дивідендів</td>
                  <td className="py-4 pr-4 text-[#10171f]/60">Inzhur REIT</td>
                  <td className="py-4 text-right font-medium">-23.85 $</td>
                </tr>
                <tr className="border-b border-[rgba(16,23,31,0.08)]">
                  <td className="py-4 pr-4 text-[#10171f]/60">10.02.2026</td>
                  <td className="py-4 pr-4">Нарахування дивідендів</td>
                  <td className="py-4 pr-4 text-[#10171f]/60">Inzhur REIT</td>
                  <td className="py-4 text-right font-medium text-[#429243]">+170.35 $</td>
                </tr>
                <tr className="border-b border-[rgba(16,23,31,0.08)]">
                  <td className="py-4 pr-4 text-[#10171f]/60">11.01.2026</td>
                  <td className="py-4 pr-4">Сплата податку з дивідендів</td>
                  <td className="py-4 pr-4 text-[#10171f]/60">Inzhur REIT</td>
                  <td className="py-4 text-right font-medium">-23.85 $</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-6">
            <button className="text-[13px] text-[#10171f] flex items-center gap-2 py-2 px-4 rounded-[10px] hover:bg-[#f0f0f0] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7 7 7-7" />
              </svg>
              Завантажити ще
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
