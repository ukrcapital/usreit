import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CONTENT_MAX = "max-w-[1280px]";
const CONTENT_PX = "px-4 md:px-8 lg:px-[5vw]";

export default function InzhurEnergyPage() {
  return (
    <div className="main-container flex w-full flex-col items-center bg-[rgba(226,236,241,0.2)] relative overflow-x-hidden mx-auto my-0 pb-32">
      <div className={`w-full ${CONTENT_MAX} mx-auto ${CONTENT_PX} relative z-[2] pt-8 md:pt-12`}>
        {/* Хлібні крихти */}
        <nav className="text-[11px] font-light text-[rgba(16,23,31,0.5)] mb-6" aria-label="Хлібні крихти">
          <Link to="/" className="hover:text-[#10171f]">Головна</Link>
          <span className="ml-1">/ Депозитарій Inzhur Capital</span>
        </nav>

        <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-normal leading-tight text-[#10171f] tracking-[-1px] mb-4">
          Inzhur Capital
        </h1>
        <p className="text-[18px] md:text-[20px] font-light text-[#10171f] mb-10 md:mb-14">
          Офіційна депозитарна установа, надійний інвестиційний партнер
        </p>

        {/* Опис ТОВ Інжур Кепітал */}
        <section className="mb-12 md:mb-16">
          <p className="text-[14px] md:text-[16px] font-light leading-relaxed text-[#10171f] max-w-[720px]">
            ТОВ «Інжур Кепітал» займається продажем і зберіганням цінних паперів.
          </p>
          <Link to="/account" className="inline-block mt-6 text-[13px] font-medium text-[#134169] hover:underline">
            Детальніше →
          </Link>
        </section>

        {/* Картки: Документи, Інвестиційна діяльність, Депозитарна діяльність */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-8 bg-white/60">
            <h2 className="text-[18px] md:text-[20px] font-semibold text-[#10171f] mb-3">Документи</h2>
            <p className="text-[13px] font-light text-[#10171f]">Inzhur Capital</p>
          </div>
          <div className="rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-8 bg-white/60">
            <h2 className="text-[18px] md:text-[20px] font-semibold text-[#10171f] mb-3">Інвестиційна діяльність</h2>
            <p className="text-[13px] font-light text-[#10171f]">Оформлення угод купівлі-продажу цінних паперів</p>
          </div>
          <div className="rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-8 bg-white/60">
            <h2 className="text-[18px] md:text-[20px] font-semibold text-[#10171f] mb-3">Депозитарна діяльність</h2>
            <p className="text-[13px] font-light text-[#10171f]">
              Відкриття / закриття рахунку в цінних паперах. Зарахування / списання цінних паперів. Зберігання цінних паперів. Надання виписки про стан рахунку в цінних паперах, а також виписки про операції з цінними паперами.
            </p>
          </div>
        </section>

        {/* Статистика */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-24">
          {[
            { value: "₴ 10 000 000 000", label: "загальний обсяг депозитарних активів клієнтів, що зберігаються на рахунках" },
            { value: "₴ 118 517 965 340", label: "загальна сума укладених угод з цінними паперами" },
            { value: "15 років", label: "роботи на фондовому ринку" },
            { value: "400 000+", label: "укладених угод з цінними паперами" },
            { value: "23 000+", label: "активних рахунків в цінних паперах на обслуговуванні" },
          ].map((item, i) => (
            <div key={i} className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-5 md:p-6 bg-white/60">
              <span className="block text-[18px] md:text-[22px] font-medium text-[#134169] tracking-[-0.5px] mb-2">{item.value}</span>
              <span className="block text-[12px] font-light text-[#10171f] leading-snug">{item.label}</span>
            </div>
          ))}
        </section>

        {/* Документи — список */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Документи
          </h2>
          <p className="text-[13px] font-light text-[#10171f] mb-6">
            Аудиторські висновки, звіти незалежного аудитора, схематичні зображення структури — документи Inzhur Capital у відкритому доступі.
          </p>
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-[#134169] text-[14px] font-medium hover:underline">
            Усі документи в кабінеті
            <span aria-hidden>→</span>
          </Link>
        </section>

        {/* ТОВ ІНЖУР КЕПІТАЛ — ліцензії */}
        <section className="rounded-[24px] border border-[rgba(19,65,105,0.15)] p-6 md:p-10 bg-white/40 mb-16 md:mb-24">
          <h2 className="text-[22px] md:text-[26px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            ТОВ «ІНЖУР КЕПІТАЛ»
          </h2>
          <p className="text-[14px] font-light text-[#10171f] leading-relaxed mb-6">
            Є професійним учасником ринків капіталу та організованих товарних ринків, що на підставі ліцензій, виданих Національною комісією з цінних паперів та фондового ринку, має право здійснювати:
          </p>
          <ul className="space-y-3 text-[13px] font-light text-[#10171f] list-disc pl-5">
            <li>Професійну діяльність на ринках капіталу з торгівлі фінансовими інструментами (брокерська, субброкерська, дилерська діяльність, розміщення без надання гарантії)</li>
            <li>Депозитарну діяльність депозитарної установи (серія АЕ №294709 від 10.10.2013)</li>
          </ul>
          <a
            href="https://www.nssmc.gov.ua/licensee/?edrpou=36301402#tab-12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[13px] font-medium text-[#134169] hover:underline"
          >
            Реєстр професійних учасників НКЦПФР →
          </a>
        </section>

        {/* Засновник Inzhur Capital — Андрій Журжій */}
        <section>
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Засновник Inzhur Capital — Андрій Журжій
          </h2>
          <p className="text-[14px] font-light text-[#10171f] leading-relaxed max-w-[720px] mb-6">
            Український підприємець та інвестор, юрист. Керує багатомільярдними активами українських інвесторів. Засновник та СЕО інвестиційної REIT-компанії Inzhur. Основні бізнес-інтереси — ринок інвестицій та будівництво. Inzhur здобув визнання, ставши переможцем у номінаціях «Прозорість бізнесу» та «Вибір аудиторії» престижної премії «Підприємець року 2024» від Forbes та «Найкраща інвестиційна пропозиція в альтернативні активи» від FinAwards 2025.
          </p>
          <Link to="/account" className="inline-block text-[13px] font-medium text-[#134169] hover:underline">
            Про Андрія Журжія →
          </Link>
        </section>
      </div>
    </div>
  );
}
