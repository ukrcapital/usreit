import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-[#1A1D20] mt-0 relative z-[1]">
      <div className="w-full max-w-[1536px] px-4 md:px-8 py-10 md:py-16">
        {/* Мобільна версія: одна колонка з розподілювачами */}
        <div className="flex flex-col md:hidden">
          {/* 1. Лого + слоган */}
          <div className="flex gap-4 items-start">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-[12px] border-2 border-white/40 flex items-center justify-center overflow-hidden bg-white">
                <span className="text-[#10171f] text-sm font-medium leading-none select-none" aria-hidden>꩜</span>
              </div>
              <span className="font-sans text-white text-[15px] font-semibold tracking-tight">INZHYR</span>
            </Link>
            <div className="text-[17px] md:text-[20px] font-normal leading-[1.35] text-white pt-1">
              <span className="block">Прибутково, пасивно, прозоро.</span>
              <span className="block">А що ще треба? :)</span>
            </div>
          </div>

          <div className="py-8" />

          {/* 2. Ми в соцмережах */}
          <span className="block text-[14px] font-medium text-white">Ми в соцмережах</span>
          <div className="flex gap-6 mt-4">
            <a href="https://t.me/inzhur" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Telegram">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.21-1.12-.33-1.08-.7.02-.19.29-.39.81-.6 3.17-1.38 5.28-2.29 6.33-2.73 3.01-1.26 3.64-1.48 4.05-1.49.09 0 .28.02.41.13.11.09.14.22.15.33-.01.07-.01.19-.02.26z"/></svg>
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="YouTube">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg>
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.64-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24h11.49v-9.28H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.8 4.66-4.8 1.33 0 2.46.1 2.8.14v3.24h-1.92c-1.5 0-1.8.71-1.8 1.76v2.31h3.6l-.47 3.62h-3.13V24h6.11c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z"/></svg>
            </a>
          </div>

          <div className="py-8" />

          {/* 3. Адреса та телефон */}
          <span className="block text-[12px] text-white/90">вул.Жилянська, буд. 48,50А (БЦ «Прайм»), 7 поверх</span>
          <a href="tel:+380442907685" className="block text-[12px] text-white/90 mt-2 hover:underline">+38 044 290 76 85</a>

          <div className="py-8" />

          {/* 4. Копірайт та ліцензія */}
          <p className="text-[12px] text-white/80 leading-relaxed">
            2026 © Inzhur. Ліцензія на здійснення діяльності з управління активами видана Рішенням НКЦПФР №508 від 15.07.2021
          </p>
          <div className="flex flex-wrap justify-between items-center gap-2 mt-4 text-[12px] text-white/80">
            <a href="mailto:info@inzhur.reit" className="hover:underline">info@inzhur.reit</a>
            <span>Код ЄДРПОУ 44154853</span>
          </div>
        </div>

        {/* Десктопна версія */}
        <div className="hidden md:block w-full relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-0 pb-8 lg:pb-10">
            <div className="flex-1">
              <div className="max-w-[700px]">
                <span className="block font-e-ukraine-head text-[28px] lg:text-[40px] font-medium leading-[1.3] text-white tracking-[-1px]">
                  Прибутково, пасивно, прозоро.
                </span>
                <span className="block font-e-ukraine-head text-[28px] lg:text-[40px] font-medium leading-[1.3] text-white tracking-[-1px] mt-2">
                  А що ще треба? :)
                </span>
              </div>

              <div className="mt-8" />

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-6 text-[16px] font-medium text-white">
                  <Link to="/handbook" className="hover:text-primary">Довідник</Link>
                  <Link to="/referral" className="hover:text-primary">Реферальна програма</Link>
                  <span className="cursor-pointer hover:text-primary">Блог</span>
                  <Link to="/account" className="inline-flex items-center gap-2 px-6 h-[48px] bg-transparent hover:bg-white/10 rounded-lg border border-white transition-colors">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <span>Кабінет інвестора</span>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-[16px] font-medium text-white">
                  <span className="cursor-pointer hover:text-primary">Про Інжур</span>
                  <Link to="/contacts" className="hover:text-primary">Контакти</Link>
                  <Link to="/energy" className="hover:text-primary">Депозитарій</Link>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-[16px] font-medium text-white">
                  <span className="cursor-pointer hover:text-primary">Про Андрія Журжія</span>
                  <span className="cursor-pointer hover:text-primary">Новини</span>
                  <Link to="/developer" className="hover:text-primary">Девелоперська компанія</Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[340px] shrink-0 flex flex-col">
              <Link to="/" className="shrink-0 flex items-center gap-2">
                <div className="w-[60px] h-[60px] rounded-[12px] border-2 border-white/40 flex items-center justify-center overflow-hidden bg-white">
                  <span className="text-[#10171f] text-2xl font-semibold leading-none select-none" aria-hidden>꩜</span>
                </div>
                <span className="font-sans text-white text-lg font-semibold tracking-tight">INZHYR</span>
              </Link>

              <div className="mt-8" />

              <span className="block text-[14px] font-medium text-white">Ми в соцмережах</span>
              <div className="flex gap-6 mt-4">
                <a href="https://t.me/inzhur" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.21-1.12-.33-1.08-.7.02-.19.29-.39.81-.6 3.17-1.38 5.28-2.29 6.33-2.73 3.01-1.26 3.64-1.48 4.05-1.49.09 0 .28.02.41.13.11.09.14.22.15.33-.01.07-.01.19-.02.26z"/></svg></a>
                <a href="#" className="text-white hover:opacity-70"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg></a>
                <a href="#" className="text-white hover:opacity-70"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.64-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg></a>
                <a href="#" className="text-white hover:opacity-70"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24h11.49v-9.28H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.8 4.66-4.8 1.33 0 2.46.1 2.8.14v3.24h-1.92c-1.5 0-1.8.71-1.8 1.76v2.31h3.6l-.47 3.62h-3.13V24h6.11c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z"/></svg></a>
              </div>

              <div className="mt-8" />

              <span className="block text-[12px] text-white/90">вул.Жилянська, буд. 48,50А (БЦ «Прайм»), 7 поверх</span>
              <a href="tel:+380442907685" className="block text-[12px] text-white/90 mt-2 hover:underline">+38 044 290 76 85</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mt-10 mb-1 text-[12px] text-white/70">
            <span className="max-w-[600px]">
              2026 © Inzhur. Ліцензія на здійснення діяльності з управління активами видана Рішенням НКЦПФР №508 від 15.07.2021
            </span>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@inzhur.reit" className="hover:underline">info@inzhur.reit</a>
              <span>Код ЄДРПОУ 44154853</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
