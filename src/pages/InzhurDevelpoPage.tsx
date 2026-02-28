import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CONTENT_MAX = "max-w-[1280px]";
const CONTENT_PX = "px-4 md:px-8 lg:px-[5vw]";

export default function InzhurDevelpoPage() {
  return (
    <div className="main-container flex w-full flex-col items-center bg-[rgba(226,236,241,0.2)] relative overflow-x-hidden mx-auto my-0 pb-32">
      <div className={`w-full ${CONTENT_MAX} mx-auto ${CONTENT_PX} relative z-[2] pt-8 md:pt-12`}>
        {/* Хлібні крихти */}
        <nav className="text-[11px] font-light text-[rgba(16,23,31,0.5)] mb-6" aria-label="Хлібні крихти">
          <Link to="/" className="hover:text-[#10171f]">Головна</Link>
          <span className="ml-1">/ Девелопер Inzhur BUD</span>
        </nav>

        <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-normal leading-tight text-[#10171f] tracking-[-1px] mb-8">
          Девелоперська компанія Inzhur BUD
        </h1>

        {/* Ключові переваги — булети */}
        <ul className="flex flex-col gap-4 md:gap-6 text-[15px] md:text-[16px] font-light text-[#10171f] mb-12 md:mb-16">
          {[
            "40+ успішних знакових обʼєктів",
            "Репутація надійного девелопера",
            "Реалізація обʼєктів будь-якої складності",
            "За 8 років роботи",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#134169] shrink-0" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        {/* Статистика — сітка */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {[
            { main: "40+", sub: "комерційних обʼєктів збудовано для Сільпо, Фора, McDonald's" },
            { main: "ЖК Оптимісто", sub: "всі 25 секцій введено в експлуатацію" },
            { main: "ЖК Свідомі", sub: "будуються перші 4 з 18 секцій" },
            { main: "253", sub: "спеціалісти різних галузей — від фінансистів до геодезистів" },
          ].map((item, i) => (
            <div key={i} className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-5 md:p-6 bg-white/60">
              <span className="block text-[18px] md:text-[22px] font-medium text-[#134169] tracking-[-0.5px] mb-2">{item.main}</span>
              <span className="block text-[12px] font-light text-[#10171f] leading-snug">{item.sub}</span>
            </div>
          ))}
        </section>

        {/* Житлова нерухомість — ЖК Оптимісто */}
        <section className="mb-16 md:mb-24 rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-10 bg-white/60">
          <h2 className="text-[20px] md:text-[24px] font-semibold text-[#10171f] mb-4">Житлова нерухомість</h2>
          <h3 className="text-[18px] md:text-[20px] font-normal text-[#10171f] mb-4">
            ЖК Оптимісто — житловий комплекс комфорт-класу в передмісті Києва
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-light text-[#10171f] mb-6">
            <li>Рейтинг 9,4 ⭐ з 10 на dim.ria</li>
            <li>25 секцій вже побудовано і введено в експлуатацію</li>
            <li>86 986 м² загальна площа ЖК</li>
            <li>5 хв до метро на авто</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <a href="https://optimisto.com.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-4 rounded-[12px] border border-[#134169] text-[#134169] text-[13px] font-medium hover:bg-[#134169] hover:text-white transition-colors">
              На сайт Оптимісто
            </a>
            <a href="https://dim.ria.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-4 rounded-[12px] border border-[#10171f] text-[#10171f] text-[13px] font-normal hover:bg-[#10171f] hover:text-white transition-colors">
              Відгуки на dim.ria
            </a>
          </div>
        </section>

        {/* Комерційна нерухомість */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Комерційна нерухомість
          </h2>
          <p className="text-[14px] font-light text-[#10171f] mb-8 max-w-[640px]">
            Будуємо ефективні, комфортні й довговічні об'єкти для топових українських і міжнародних мереж
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-5 bg-white/60">
              <span className="block text-[22px] font-medium text-[#134169]">38</span>
              <span className="block text-[13px] font-light text-[#10171f]">супермаркетів Сільпо та Фора</span>
            </div>
            <div className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-5 bg-white/60">
              <span className="block text-[22px] font-medium text-[#134169]">4</span>
              <span className="block text-[13px] font-light text-[#10171f]">ресторани МакДональдз</span>
            </div>
            <div className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-5 bg-white/60">
              <span className="block text-[22px] font-medium text-[#134169]">80 029 м²</span>
              <span className="block text-[13px] font-light text-[#10171f]">побудовано</span>
            </div>
          </div>
          <p className="text-[13px] font-light text-[#10171f] mb-4">Пропонуємо послуги з будівництва:</p>
          <ul className="flex flex-wrap gap-2 mb-6 text-[13px] font-light text-[#10171f]">
            {["Торговельно-розважальні центри", "Бізнес-центри та паркінги", "Гіпермаркети", "Спорткомплекси", "Та інше"].map((item, i) => (
              <li key={i} className="rounded-[10px] border border-[rgba(19,65,105,0.2)] px-3 py-1.5">{item}</li>
            ))}
          </ul>
          <Link to="/" className="inline-flex items-center gap-2 text-[#134169] text-[14px] font-medium hover:underline">
            Дивитися об'єкти
            <span aria-hidden>→</span>
          </Link>
        </section>

        {/* Девелопмент повного циклу — 4 пункти */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-8">
            Девелопмент повного циклу
          </h2>
          <p className="text-[14px] font-light text-[#10171f] mb-8 max-w-[720px]">
            Від пошуку земельної ділянки та приведення її до належного юридичного стану до вводу обʼєкту в експлуатацію
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Власна проєктна компанія", text: "Маємо експертизу в проєктуванні ефективних, довговічних і приємних просторів як для комерційної, так і для житлової нерухомості" },
              { title: "Власне виробництво металоконструкцій", text: "Маємо виробничу базу, що дозволяє якісно, швидко та вигідно забезпечувати всі обʼєкти металоконструкціями" },
              { title: "Власна будівельна компанія", text: "Одна з небагатьох компаній, що наймає всіх працівників з білою зарплатнею (навіть будівельників), вчасно виконує всі зобовʼязання та береже свою репутацію" },
            ].map((item, i) => (
              <div key={i} className="rounded-[20px] border border-[rgba(19,65,105,0.15)] p-6 bg-white/60">
                <h3 className="text-[16px] md:text-[18px] font-semibold text-[#10171f] mb-2">{item.title}</h3>
                <p className="text-[13px] font-light text-[#10171f] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Відділ закупівель */}
        <section className="mb-16 md:mb-24 rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-10 bg-white/60">
          <h2 className="text-[22px] md:text-[26px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Відділ закупівель
          </h2>
          <p className="text-[14px] font-light text-[#10171f] mb-6">
            Постійно в пошуку надійних постачальників. З пропозиціями звертайтеся на:
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="tel:+380676366427" className="text-[18px] font-medium text-[#134169] hover:underline">+38 (067) 636 64 27</a>
            <a href="mailto:snab@inzhur.reit" className="text-[18px] font-medium text-[#134169] hover:underline">snab@inzhur.reit</a>
          </div>
          <p className="text-[12px] font-light text-[#10171f] mb-2">Потрібно, зокрема:</p>
          <ul className="text-[13px] font-light text-[#10171f] space-y-1 list-disc pl-5">
            {["Оренда будівельної техніки", "Оренда дорожньої техніки", "Закупівля ґрунту для зворотньої підсипки (супесь, сугленок)", "Закупівлі інертних матеріалів", "Закупівля товарних бетонів", "Металопрокат", "Металеві резервуари: 20 м³, 50 м³, 75 м³"].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          </ul>
        </section>

        {/* Придбання ділянок */}
        <section className="mb-16 md:mb-24 rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-10 bg-white/60">
          <h2 className="text-[22px] md:text-[26px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Придбання ділянок
          </h2>
          <p className="text-[14px] font-light text-[#10171f] mb-6">
            Розглядаємо перспективні земельні ділянки в Києві та області. Надсилайте адресу, кадастровий план, карту розміщення ділянки (з прилеглими вулицями), схему комунікації та мереж в масштабі 1:500 (за наявності) й умови продажу на:
          </p>
          <a href="mailto:s.hubskyi@inzhur.reit" className="inline-block text-[18px] font-medium text-[#134169] hover:underline mb-8">s.hubskyi@inzhur.reit</a>
          <p className="text-[12px] font-light text-[#10171f] mb-2">Критерії:</p>
          <ul className="text-[13px] font-light text-[#10171f] space-y-1 list-disc pl-5">
            {["Від 0.20 га до 1 га", "Вихід на основні магістралі міста та передмість", "Місце великого скупчення населення та автомобільних розвʼязок", "Наявність поблизу інженерних комунікацій (вода, каналізація, електрика, газ)", "Наявність поблизу ділянки щільної житлової забудови", "Відсутність або мінімальна кількість зелених насаджень на території"].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          </ul>
        </section>

        {/* Ми до ребрендингу */}
        <section className="mb-16 md:mb-24 py-8 border-t border-b border-[rgba(16,23,31,0.15)]">
          <h2 className="text-[20px] md:text-[24px] font-normal text-[#10171f] tracking-[-1px] mb-4">
            Ми до ребрендингу
          </h2>
          <p className="text-[14px] font-light text-[#10171f] leading-relaxed max-w-[640px]">
            До 2024 року наша компанія називалася Smile Development. Ми зросли, змінилися та стали частиною бренду Inzhur.
          </p>
        </section>

        {/* Наші об'єкти — заголовок + посилання на головну */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Наші об'єкти
          </h2>
          <Link to="/" className="inline-flex items-center gap-2 text-[#134169] text-[14px] font-medium hover:underline">
            Переглянути об'єкти на головній
            <span aria-hidden>→</span>
          </Link>
        </section>

        {/* Засновник Inzhur — Андрій Журжій */}
        <section>
          <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-6">
            Засновник Inzhur — Андрій Журжій
          </h2>
          <p className="text-[14px] font-light text-[#10171f] leading-relaxed max-w-[720px] mb-6">
            Український підприємець та інвестор, юрист. Керує багатомільярдними активами українських інвесторів. Засновник та СЕО інвестиційної REIT-компанії Inzhur. Основні бізнес-інтереси — ринок інвестицій та будівництво. Inzhur здобув визнання, ставши переможцем у номінаціях «Прозорість бізнесу» та «Вибір аудиторії» престижної премії «Підприємець року 2024» від Forbes.
          </p>
          <Link to="/account" className="inline-block text-[13px] font-medium text-[#134169] hover:underline">
            Про Андрія Журжія →
          </Link>
        </section>
      </div>
    </div>
  );
}
