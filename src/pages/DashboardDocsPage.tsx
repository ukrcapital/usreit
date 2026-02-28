import React from "react";
import "./index.css";

const CONTENT_MAX = "max-w-[1280px]";
const CONTENT_PX = "px-4 md:px-8 lg:px-[5vw]";

const docs = [
  { date: "03.09.2025", name: "Купівля сертифікатів фонду Inzhur REIT", type: "Купівля" },
  { date: "12.04.2024", name: "Купівля сертифікатів фонду Inzhur Ocean", type: "Купівля" },
];

export default function DashboardDocsPage() {
  return (
    <div className="main-container flex w-full flex-col items-center bg-[#f0f2f5] min-h-screen relative overflow-x-hidden mx-auto my-0 pb-32">
      <div className={`w-full ${CONTENT_MAX} mx-auto ${CONTENT_PX} relative z-[2] pt-6 md:pt-10`}>
        <h1 className="text-[24px] md:text-[28px] font-normal tracking-[-1px] text-[#10171f] mb-6">
          Мої документи
        </h1>

        {/* Укладені угоди — картка */}
        <section className="w-full bg-white rounded-[24px] p-6 md:p-8 lg:p-10 shadow-sm">
          <h2 className="text-[16px] md:text-[18px] font-normal text-[#10171f] mb-6 md:mb-8 border-b border-[rgba(16,23,31,0.1)] pb-4">
            Укладені угоди
          </h2>

          {/* Заголовки таблиці — тільки на десктопі */}
          <div className="hidden md:flex justify-between items-center text-[13px] text-[#10171f]/50 gap-4 px-1 mb-2">
            <span className="w-[22%] shrink-0">Дата</span>
            <span className="flex-1 min-w-0">Назва</span>
            <span className="w-[18%] shrink-0">Тип</span>
            <span className="w-[12%] shrink-0 text-right">Завантажити</span>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            {docs.map((doc, i) => (
              <div
                key={i}
                className={`rounded-[12px] md:rounded-[10px] p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 ${i % 2 === 0 ? "bg-[rgba(226,236,241,0.5)]" : "bg-transparent"}`}
              >
                <span className="text-[13px] text-[#10171f] font-medium order-1 md:order-2 md:flex-1 md:min-w-0 md:font-normal">{doc.name}</span>
                <span className="text-[12px] md:text-[13px] text-[#10171f]/50 order-2 md:order-1 md:w-[22%] md:shrink-0">{doc.date}</span>
                <span className="text-[12px] md:text-[13px] text-[#10171f]/50 order-3 md:w-[18%] md:shrink-0">{doc.type}</span>
                <span className="text-[12px] md:text-[13px] font-bold text-[#10171f] uppercase cursor-pointer hover:underline order-4 md:w-[12%] md:shrink-0 md:text-right">PDF</span>
              </div>
            ))}
          </div>
        </section>

        {/* Документи — друга картка */}
        <section className="w-full bg-white rounded-[24px] p-6 md:p-8 lg:p-10 shadow-sm mt-6 md:mt-8">
          <h2 className="text-[22px] md:text-[28px] font-normal text-[#10171f] mb-4 md:mb-8">
            Документи
          </h2>
          <p className="text-[13px] text-[#10171f]/50">
            Тут будуть завантажені всі офіційні документи компанії...
          </p>
        </section>
      </div>
    </div>
  );
}
