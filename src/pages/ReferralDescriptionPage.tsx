import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CONTENT_MAX = "max-w-[1280px]";
const CONTENT_PX = "px-4 md:px-8 lg:px-[5vw]";

const STEPS = [
  { num: "01", title: "Зареєструйтесь і отримайте своє унікальне посилання" },
  { num: "02", title: "Діліться посиланням з друзями" },
  { num: "03", title: "Коли друг вперше купить цінні папери" },
  {
    num: "04",
    title: "Вам нарахують 0.5% від вартості куплених другом сертифікатів (без обмежень по сумі). Друг отримає 0.5% знижки на це перше замовлення протягом 1 місяця з моменту реєстрації",
  },
  { num: "05", title: "Інвестуйте в цінні папери фондів Inzhur" },
];

export default function ReferralDescriptionPage() {
  return (
    <div className="main-container flex w-full flex-col items-center bg-[rgba(226,236,241,0.2)] relative overflow-x-hidden mx-auto my-0 pb-32">
      <div className={`w-full ${CONTENT_MAX} mx-auto ${CONTENT_PX} relative z-[2] pt-8 md:pt-12`}>
        {/* Хлібні крихти */}
        <nav className="text-[11px] font-light text-[rgba(16,23,31,0.5)] mb-6" aria-label="Хлібні крихти">
          <Link to="/" className="hover:text-[#10171f]">Головна</Link>
          <span className="ml-1">/ Реферальна програма</span>
        </nav>

        <h1 className="text-[36px] md:text-[52px] lg:text-[66px] font-normal leading-tight text-[#10171f] tracking-[-1px] mb-6">
          Реферальна програма
        </h1>
        <p className="text-[18px] md:text-[20px] font-light leading-relaxed text-[#10171f] mb-8 max-w-[720px]">
          Запросіть друга й отримайте 1% від суми першої інвестиції на двох
        </p>
        <p className="text-[14px] md:text-[16px] font-light text-[#10171f] mb-8 max-w-[640px]">
          Win-win програма для залучення нових співвласників у Inzhur. Ваш друг отримає 0.5% знижки на першу купівлю інвестиційних сертифікатів, а ви — 0.5% від суми цієї угоди.
        </p>
        <a
          href="https://www.inzhur.reit/referral-program"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 px-6 rounded-[12px] bg-[#10171f] text-white text-[13px] font-normal hover:bg-[#0a0e12] transition-colors"
        >
          Офіційні правила
        </a>

        {/* Умови програми — 5 кроків */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-8 md:mb-12">
            Умови програми
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-8 bg-white/60 flex flex-col"
              >
                <span className="w-10 h-10 rounded-[12px] bg-[#134169] text-white flex items-center justify-center text-[14px] font-medium mb-4">
                  {step.num}
                </span>
                <span className="text-[14px] md:text-[16px] font-light text-[#10171f] leading-snug">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Реєструйся в кабінеті — CTA */}
        <section className="mt-16 md:mt-24 rounded-[24px] bg-[#134169] p-8 md:p-10 text-white">
          <h2 className="text-[22px] md:text-[26px] font-normal tracking-[-0.5px] mb-4">
            Реєструйся в кабінеті
          </h2>
          <p className="text-[14px] font-light text-white/90 mb-6 max-w-[600px]">
            Стань клієнтом Inzhur. Відкриття рахунку Inzhur — онлайн-кабінет, безкоштовне відкриття брокерського рахунку, проста купівля й швидкий продаж цінних паперів, особисте запрошення до закритого Telegram-чату з понад 21 тисячею реальних інвесторів Inzhur після реєстрації.
          </p>
          <Link
            to="/account"
            className="inline-flex items-center justify-center h-12 px-6 rounded-[12px] bg-white text-[#134169] text-[14px] font-medium hover:bg-white/90 transition-colors"
          >
            Спробувати
          </Link>
        </section>

        {/* Питання-Відповіді */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-8">
            Відповіді на важливі запитання
          </h2>
          <div className="space-y-6">
            <div className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-6 md:p-8 bg-white/40">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#10171f] mb-3">
                Що таке реферальна програма? Як саме вона працює в Inzhur?
              </h3>
              <p className="text-[13px] font-light text-[#10171f] leading-relaxed">
                Це програма, за якою ти можеш ділитись зі своїми друзями унікальним посиланням (тобто залучати нових інвесторів в Inzhur). Реферальна програма Inzhur вигідна для всіх: ті, кого залучають — отримують знижку 0,5% на першу купівлю інвестиційних сертифікатів; ті, хто залучає — отримують бонус 0,5% від цієї купівлі. Його можна використовувати для особистої купівлі сертифікатів. Інакше кажучи, ми пропонуємо розділити з другом 1% вигоди.
              </p>
            </div>
            <div className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-6 md:p-8 bg-white/40">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#10171f] mb-3">
                Я маю бути діючим співвласником, щоб приводити друзів?
              </h3>
              <p className="text-[13px] font-light text-[#10171f] leading-relaxed">
                Необов'язково. Для того, щоб отримати особисте реферальне посилання, яким можна ділитися з іншими, ти маєш тільки зареєструватись в особистому кабінеті Inzhur — це швидко та безкоштовно.
              </p>
            </div>
            <div className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-6 md:p-8 bg-white/40">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#10171f] mb-3">
                Як я можу використати бонусні кошти?
              </h3>
              <p className="text-[13px] font-light text-[#10171f] leading-relaxed">
                І знижку реферала, і бонус афіліата можна використовувати тільки для покупки сертифікатів фондів Inzhur.
              </p>
            </div>
          </div>
          <Link to="/handbook" className="inline-block mt-8 text-[14px] font-medium text-[#134169] hover:underline">
            Довідник Inzhur →
          </Link>
        </section>
      </div>
    </div>
  );
}
