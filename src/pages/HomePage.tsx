import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useHomeBg, mixHex } from "../context/HomeBgContext";
import "./index.css";

// Match desktop header width: max-w-[1584px] + px-4 (same as header bar)
const CONTENT_MAX = "max-w-[1584px]";
const CONTENT_PX = "px-4 md:px-6";
/** Відступ зліва і справа для тексту не в boxes на мобільному (такий самий як у кнопки «Почати» та блоку статистики) */
const MOB_TEXT_INDENT = "pl-8 pr-8 hero:pl-0 hero:pr-0";
const SECTION_PY = "py-16 md:py-24 lg:py-28";

function formatNumber(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function formatDateDDMMYYYY(d: Date): string {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}

function getLast10DaysRange(): { start: string; end: string } {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - 10);
  return { start: formatDateDDMMYYYY(start), end: formatDateDDMMYYYY(end) };
}

export default function HomePage() {
  const statsRef = useRef(null as HTMLDivElement | null);
  const proposalsRef = useRef(null as HTMLElement | null);
  const mainInvestmentsRef = useRef(null as HTMLElement | null);
  const videoFaqRef = useRef(null as HTMLElement | null);
  const num1Ref = useRef(null as HTMLSpanElement | null);
  const num2Ref = useRef(null as HTMLSpanElement | null);
  const num3Ref = useRef(null as HTMLSpanElement | null);
  const homeBgCtx = useHomeBg();
  const homeBgCtxRef = useRef(homeBgCtx);
  homeBgCtxRef.current = homeBgCtx;
  const dateRange = getLast10DaysRange();

  useEffect(() => {
    const gsap = typeof window !== "undefined" ? window.gsap : null;
    const ScrollTrigger = typeof window !== "undefined" ? window.ScrollTrigger : null;
    if (!gsap || !ScrollTrigger || !statsRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const vals = { n1: 0, n2: 0, n3: 0 };
    const end = { n1: 59388, n2: 5504594317, n3: 1181321330 };

    const update1 = () => { if (num1Ref.current) num1Ref.current.textContent = formatNumber(vals.n1); };
    const update2 = () => { if (num2Ref.current) num2Ref.current.textContent = formatNumber(vals.n2) + " ₴"; };
    const update3 = () => { if (num3Ref.current) num3Ref.current.textContent = formatNumber(vals.n3) + " ₴"; };

    const stVars = { trigger: statsRef.current, start: "top 85%", toggleActions: "play none none none" };
    gsap.to(vals, { n1: end.n1, duration: 1.8, ease: "power2.out", onUpdate: update1, scrollTrigger: stVars });
    gsap.to(vals, { n2: end.n2, duration: 2, ease: "power2.out", onUpdate: update2, scrollTrigger: { ...stVars } });
    gsap.to(vals, { n3: end.n3, duration: 2, ease: "power2.out", onUpdate: update3, scrollTrigger: { ...stVars } });

    // Поява секцій при скролі (тільки fade-in, без зміщення по Y — щоб не було підстрибування)
    const sections = document.querySelectorAll<HTMLElement>(".animate-on-scroll");
    sections.forEach((el) => {
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 88%" } });
    });

    // Плавна зміна фону на #DDE7D0 для секцій: Пропозиції Inzhur, Головне про інвестиції, Відео та питання
    const ctx = homeBgCtxRef.current;
    const triggerSections = [proposalsRef, mainInvestmentsRef, videoFaqRef] as const;
    if (ctx) {
      ctx.setHomeBg(ctx.defaultHomeBg);
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: () => {
          const c = homeBgCtxRef.current;
          if (!c) return;
          const vh = window.innerHeight;
          let maxIntensity = 0;
          triggerSections.forEach((ref) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const progress = (vh - rect.top) / (vh + rect.height);
            const clamped = Math.max(0, Math.min(1, progress));
            const intensity = Math.sin(clamped * Math.PI);
            if (intensity > maxIntensity) maxIntensity = intensity;
          });
          c.setHomeBg(mixHex(c.defaultHomeBg, c.proposalsBg, maxIntensity));
        },
      });
    }

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <div className="main-container flex w-full flex-col items-center bg-[rgba(226,236,241,0.2)] relative overflow-x-hidden mx-auto my-0 pb-32">
      {/* Єдиний контейнер для центрування: як на оригіналі (content-grid з відступами) */}
      <div className={`w-full ${CONTENT_MAX} mx-auto ${CONTENT_PX} relative z-[2] mt-0`}>
        
        {/* ========== 1. Hero (Intro) — відступи як на референсі: більше повітря між заголовком і плашкою, щедрий padding у плашці ========== */}
        <section className={`content-section ${SECTION_PY} hero:pt-20 hero:pb-28 first:pt-12 pb-6 md:pb-16 header:pb-12`}>
          <div className="w-full min-h-[480px] hero:min-h-[720px] bg-transparent relative overflow-hidden">
            {/* Фон (мапа): тільки на десктопі ≥1201px */}
            <div className="hero-first-block-bg absolute inset-0 z-[3] hidden header:block" aria-hidden />
            <div className="relative z-[6] w-full pt-[12px] hero:pt-[18px] pl-0 hero:pl-2">
              <div className={MOB_TEXT_INDENT}>
                <h1 className="text-[32px] hero:text-[62px] font-normal hero:font-light leading-[1.45] hero:leading-[1.2] text-[#10171f] tracking-[-1.5px] hero:tracking-[-2.64px]">
                  Твої інвестиції{' '}
                  <span className="hero:block">у велику</span>{' '}
                  <span className="hero:block">нерухомість</span>
                </h1>
              </div>
              {/* Від 0 до 763px плашка на всю ширину; від 764px — ширина ~40–45% як на референсі; внутрішні відступи як на референсі */}
              <div className="w-full max-w-none hero:max-w-[45vw] header:max-w-[560px] bg-[#134169] rounded-[32px] mt-10 hero:mt-12 p-8 hero:p-10">
                <h2 className="text-[18px] hero:text-[20px] text-white tracking-[-0.8px] mb-5">
                  Поріг входу — від 10 гривень
                </h2>
                <div className="w-full h-px bg-white/10 mb-5" />
                <p className="text-[11px] font-light leading-[16px] text-white mb-3">
                  Ми зробили це, щоб усі могли спробувати інвестиції з Inzhur — і особисто переконатися в їх надійності та простоті.
                </p>
                <p className="text-[11px] font-light leading-[16px] text-white">
                  Inzhur — будує, купує та керує великою нерухомістю в твоїх інтересах. Ти та інші українці — інвестуєте, спільно володієте майном фонду та отримуєте повністю пасивний дохід.
                </p>
                <Link to="/account" className="mt-6 inline-flex items-center justify-center h-12 px-6 rounded-[16px] bg-white text-[#134169] text-[14px] font-medium hover:bg-white/90 transition-colors">
                  Почати
                  <span className="ml-1.5" aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div ref={statsRef} className="relative z-[13] mt-16 hero:mt-[140px] flex flex-col hero:flex-row gap-8 hero:gap-[150px] pl-8 pr-8 hero:pl-0 hero:pr-0">
              <div className="max-w-xs">
                <div className="w-[32px] h-[32px] flex items-center justify-center text-[#226e91]" aria-hidden>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span ref={num1Ref} className="block text-[32px] hero:text-[44px] font-light text-[#10171f] tracking-[-1px] mt-2" aria-live="polite">0</span>
                <span className="block text-[13px] text-[#10171f] mt-2">активних рахунків в Inzhur</span>
              </div>
              <div className="max-w-xs">
                <div className="w-[32px] h-[32px] flex items-center justify-center text-[#226e91]" aria-hidden>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                  </svg>
                </div>
                <span ref={num2Ref} className="block text-[32px] hero:text-[44px] font-light text-[#10171f] tracking-[-1px] mt-2" aria-live="polite">0 ₴</span>
                <span className="block text-[13px] text-[#10171f] mt-2">активів в управлінні</span>
              </div>
              <div className="max-w-xs">
                <div className="w-[32px] h-[32px] flex items-center justify-center text-[#226e91]" aria-hidden>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
                  </svg>
                </div>
                <span ref={num3Ref} className="block text-[32px] hero:text-[44px] font-light text-[#10171f] tracking-[-1px] mt-2" aria-live="polite">0 ₴</span>
                <span className="block text-[13px] text-[#10171f] mt-2">дохід співвласників:</span>
                <div className="mt-2">
                  <span className="block text-[11px] text-[#2776c1]">549 758 938 ₴ — капіталізація</span>
                  <span className="block text-[11px] text-[#2776c1] mt-1">631 562 392 ₴ — виплачено дивідендів</span>
                </div>
                <span className="block text-[11px] font-light text-[#959696] mt-2">починаючи з {dateRange.start} по {dateRange.end}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 1b. Мапа об'єктів: тільки при ширині <1201px; при ≥1201 зникає (фонова мапа вже в Hero) ========== */}
        <section className={`animate-on-scroll content-section pt-8 pb-3 md:pt-12 md:pb-24 block header:hidden`} aria-labelledby="map-heading">
          <div className={MOB_TEXT_INDENT}>
            <h2 id="map-heading" className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-6">
              Мапа об'єктів
            </h2>
            <p className="text-[14px] font-light text-[#10171f] max-w-[640px] mb-6">
              Об'єкти нерухомості Inzhur REIT — супермаркети, ресторани, ТРЦ та інша комерційна нерухомість по всій Україні.
            </p>
          </div>
          <div className="map-objects-block rounded-[24px] overflow-hidden aspect-[16/10] min-h-[280px]" aria-hidden />
        </section>

        {/* ========== 2. Пропозиції Inzhur ========== */}
        <section ref={proposalsRef} className={`animate-on-scroll content-section ${SECTION_PY} pt-3 md:pt-24 lg:pt-28 header:pt-12`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-4">
              Пропозиції Inzhur
            </h2>
            <p className="text-[14px] md:text-[16px] font-light text-[#10171f] max-w-[720px] mb-12">
              Inzhur пропонує зручні та надійні інвестиції в декількох напрямках: пайові фонди з великою комерційною нерухомістю, сучасними енергетичними об'єктами та державні цінні папери.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:items-stretch">
            <div className="border border-[rgba(19,65,105,0.2)] rounded-[26px] p-6 md:p-8 flex flex-col gap-4 hover:border-[#134169]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/60 min-h-0">
              <div className="flex flex-col gap-4 flex-1 min-h-0">
                <span className="text-[11px] font-medium text-[#134169] uppercase tracking-wide">Нерухомість</span>
                <h3 className="text-[17px] md:text-[20px] font-semibold text-[#10171f]">Фонд Inzhur REIT</h3>
                <p className="text-[13px] font-light text-[#10171f] leading-relaxed">
                  Співвласники фонду володіють землею та будівлями, які здаються в оренду відомим українським мережам супермаркетів та міжнародній мережі ресторанів швидкого харчування, а також великим ТРЦ. Inzhur — будує, купує, керує. Ти — інвестуєш, співволодієш, заробляєш.
                </p>
                <div className="space-y-2 py-3 border-y border-[rgba(19,65,105,0.12)]">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Дохідність, річних у USD</span>
                    <span className="text-[15px] font-medium text-[#134169]">від 9,5%</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Тип дохідності</span>
                    <span className="text-[12px] text-[#10171f]">щомісячні дивіденди + капіталізація</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Початкова інвестиція</span>
                    <span className="text-[12px] text-[#10171f]">від 10.74 ₴</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex w-full gap-2 shrink-0">
                <Link to="/account" className="flex-1 min-w-0 inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-white text-[#10171f] text-[13px] font-medium border border-[#10171f] hover:bg-[#f5f5f5] transition-colors">Про фонд</Link>
                <Link to="/account" className="flex-1 min-w-0 inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-[#10171f] text-white text-[13px] font-medium hover:bg-[#1a2330] transition-colors">Інвестувати</Link>
              </div>
            </div>
            <div className="border border-[rgba(19,65,105,0.2)] rounded-[26px] p-6 md:p-8 flex flex-col gap-4 hover:border-[#134169]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/60 min-h-0">
              <div className="flex flex-col gap-4 flex-1 min-h-0">
                <span className="text-[11px] font-medium text-[#134169] uppercase tracking-wide">Енергетика</span>
                <h3 className="text-[17px] md:text-[20px] font-semibold text-[#10171f]">Фонд Inzhur Energy</h3>
                <p className="text-[13px] font-light text-[#10171f] leading-relaxed">
                  Співвласники фонду долучаються до будівництва газопоршневої маневрової електростанції загальною потужністю 34 МВт за контрактом з НЕК «Укренерго» в Київській області. Inzhur — будує і керує. Ти — інвестуєш і заробляєш на здорожчанні вартості об'єкта (капіталізація).
                </p>
                <div className="space-y-2 py-3 border-y border-[rgba(19,65,105,0.12)]">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Дохідність, річних у USD</span>
                    <span className="text-[15px] font-medium text-[#134169]">15%</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Тип дохідності</span>
                    <span className="text-[12px] text-[#10171f]">капіталізація</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Початкова інвестиція</span>
                    <span className="text-[12px] text-[#10171f]">від 6 454.52 ₴</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex w-full gap-2 shrink-0">
                <Link to="/account" className="flex-1 min-w-0 inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-white text-[#10171f] text-[13px] font-medium border border-[#10171f] hover:bg-[#f5f5f5] transition-colors">Про фонд</Link>
                <Link to="/account" className="flex-1 min-w-0 inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-[#10171f] text-white text-[13px] font-medium hover:bg-[#1a2330] transition-colors">Інвестувати</Link>
              </div>
            </div>
            <div className="border border-[rgba(19,65,105,0.2)] rounded-[26px] p-6 md:p-8 flex flex-col gap-4 hover:border-[#134169]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/60 min-h-0">
              <div className="flex flex-col gap-4 flex-1 min-h-0">
                <span className="text-[11px] font-medium text-[#134169] uppercase tracking-wide">Державні облігації</span>
                <h3 className="text-[17px] md:text-[20px] font-semibold text-[#10171f]">Цінні папери ОВДП</h3>
                <p className="text-[13px] font-light text-[#10171f] leading-relaxed">
                  Державні цінні папери від Міністерства фінансів України, за якими держава на 100% гарантує виплату номінальної вартості та доходу. Inzhur — підбирає найкращі пропозиції та швидко додає їх до твого портфелю. Ти — підтримуєш обороноздатність України і заробляєш.
                </p>
                <div className="space-y-2 py-3 border-y border-[rgba(19,65,105,0.12)]">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Дохідність, річних у UAH</span>
                    <span className="text-[15px] font-medium text-[#134169]">до 17,4%</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Термін</span>
                    <span className="text-[12px] text-[#10171f]">від 1 міс до 3 років</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Вартість</span>
                    <span className="text-[12px] text-[#10171f]">від 1 009.83 ₴</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-[11px] text-[#10171f]/70">Достроковий продаж</span>
                    <span className="text-[12px] text-[#10171f]">так</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex w-full gap-2 shrink-0">
                <Link to="/account" className="flex-1 min-w-0 inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-white text-[#10171f] text-[13px] font-medium border border-[#10171f] hover:bg-[#f5f5f5] transition-colors">Про облігації</Link>
                <Link to="/account" className="flex-1 min-w-0 inline-flex items-center justify-center h-10 px-4 rounded-[12px] bg-[#10171f] text-white text-[13px] font-medium hover:bg-[#1a2330] transition-colors">Інвестувати</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 2a. CTA — звіт-2025 і плани-2026 (градієнт) ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY} py-8 md:py-10`}>
          <div className="cta-gradient-bg rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-[20px] md:text-[22px] font-normal text-[#10171f] mb-3">
                💼 Inzhur: звіт-2025 і плани-2026
              </h2>
              <p className="text-[14px] font-light text-[#10171f] max-w-[880px] leading-relaxed">
                30 січня засновник і СЕО Inzhur Андрій Журжий провів спеціальний стрім: підбив підсумки неймовірно успішного 2025 року і поділився детальними планами компанії на 2026 рік. Переглянь відео, щоб дізнатися максимум про досягнення і цілі Inzhur!
              </p>
            </div>
            <a href="https://www.youtube.com/@inzhur" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#10171f]/10 text-[#10171f] hover:bg-[#10171f]/20 transition-colors" aria-label="Переглянути відео">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            </a>
          </div>
        </section>

        {/* ========== 2a2. CTA — Звіт дохідності 5 фондів (градієнт) ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY} py-8 md:py-10 pt-0`}>
          <div className="cta-gradient-bg rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-[20px] md:text-[22px] font-normal text-[#10171f] mb-3">
                📈 Звіт: загальна дохідність 5 фондів Inzhur
              </h2>
              <p className="text-[14px] font-light text-[#10171f] max-w-[920px] leading-relaxed">
                У вересні 2025 року 5 фондів Inzhur — Inzhur 1001, Inzhur 2001, Inzhur Supermarket, Inzhur Житній та Inzhur Ocean — об'єдналися в новий мегафонд Inzhur REIT. Ми зібрали всі історичні дані про їх дохідність за 3,5 роки. Тисни на кнопку, щоб дізнатися, як компанія Inzhur впоралася з поставленими цілями і підтвердила всі інвестиційні прогнози! 👇
              </p>
            </div>
            <Link to="/account" className="shrink-0 inline-flex items-center justify-center h-14 px-8 rounded-[12px] bg-[#10171f] text-white text-[14px] font-medium hover:bg-[#1a2330] transition-colors">
              Дізнатися
            </Link>
          </div>
        </section>

        {/* ========== 2b. Як все влаштовано? (як на inzhur.reit) ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY}`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-6">
              Як все влаштовано?
            </h2>
            <ul className="space-y-4 max-w-[720px] text-[14px] font-light text-[#10171f] leading-relaxed list-none pl-0">
            <li><span className="font-medium text-[#134169]">Ти стаєш співвласником</span> усього майна, яким володіє обраний фонд Inzhur</li>
            <li>Розмір твоєї частини в майні фонду визначається кількістю інвестиційних сертифікатів у твоєму володінні</li>
            <li>Inzhur перераховує прибуток на картки співвласників, всі комісії та податки вже сплачено</li>
            <li>Майном в інтересах співвласників керує компанія з управління активами (КУА) – це Inzhur. Вона вирішує всі питання з орендарями та замовниками послуг</li>
            <li>З кожним орендарем і замовником послуг укладено договір з умовами оплати. Цей договір передбачає мінімальний платіж і граничні курси долара на кожен рік</li>
            <li>Орендар чи замовник послуг укладає з відповідним фондом Inzhur договір на 5–30 років без можливості дострокового розірвання</li>
            <li>А ти інвестуєш у гривнях — і отримуєш прив'язаний до актуального курсу долара США дохід у національній валюті :)</li>
            </ul>
            <p className="mt-6 text-[13px] font-light text-[#10171f]">
              <strong className="font-normal text-[#134169]">Як вийти з інвестиції:</strong> В особистому кабінеті Inzhur у кожного фонду є кнопка «Продати»: треба лише подати заявку, зачекати пару годин робочого дня — і фонд викупить сертифікати за актуальною ціною продажу.
            </p>
          </div>
        </section>

        {/* ========== 2c. Як вийти з інвестиції (градієнтний блок) ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY} py-8 md:py-10`}>
          <div className="cta-gradient-bg rounded-[32px] p-8 md:p-10">
            <h2 className="text-[20px] md:text-[22px] font-normal text-[#10171f] mb-4">
              Як вийти з інвестиції
            </h2>
            <p className="text-[14px] font-light text-[#10171f] max-w-[1232px] leading-relaxed">
              В особистому кабінеті Inzhur у кожного фонду є кнопка «Продати»: треба лише подати заявку, зачекати пару годин робочого дня — і фонд викупить сертифікати за актуальною ціною продажу, зазначеною в твоєму кабінеті, зарахувавши кошти.
            </p>
          </div>
        </section>

        {/* ========== 3. Головне про інвестиції / Як це працює ========== */}
        <section ref={mainInvestmentsRef} className={`animate-on-scroll content-section ${SECTION_PY}`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-6">
              Головне про інвестиції з Inzhur
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="text-[20px] md:text-[25px] font-light text-[#10171f] mb-3">Що таке Inzhur?</h3>
              <p className="text-[14px] font-light text-[#10171f] leading-relaxed">
                Inzhur — інвестиційна REIT-компанія, яка дає українцям змогу об'єднуватися для інвестицій у комерційну нерухомість і ставати її співвласниками, отримуючи дохід від орендних виплат та зростання її вартості (капіталізація). Так працюють фонди нерухомості — REIT (Real Estate Investment Trust). Inzhur — перша українська REIT-компанія.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[25px] font-light text-[#10171f] mb-3">Як це працює?</h3>
              <p className="text-[14px] font-light text-[#10171f] leading-relaxed">
                Дуже просто! Ти — спільно з іншими інвесторами володієш нерухомістю та отримуєш прибуток від орендних виплат, капіталізації об'єктів або всього разом. Ми — керуємо нерухомістю у твоїх інтересах. Модель REIT дозволяє всім українцям інвестувати в нерухомість, купуючи сертифікати фондів — та заробляти частку від їхнього прибутку. Почати можна від 10 гривень, і це дійсно пасивний дохід: не треба самостійно купувати нерухомість та управляти нею — все робить Inzhur.
              </p>
            </div>
          </div>
          {/* Як почати заробляти з Inzhur? — 4 кроки (як на inzhur.reit) */}
          <div className="mt-12 pt-10 border-t border-[rgba(19,65,105,0.15)]">
            <h3 className="text-[20px] md:text-[24px] font-normal text-[#10171f] mb-6">Як почати заробляти з Inzhur?</h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 list-none pl-0">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#134169] text-white flex items-center justify-center text-[14px] font-medium">01</span>
                <div>
                  <span className="block text-[15px] font-medium text-[#10171f] mb-1">Зареєструйся в кабінеті інвестора Inzhur</span>
                  <span className="text-[13px] font-light text-[#10171f]">та безкоштовно відкрий брокерський рахунок</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#134169] text-white flex items-center justify-center text-[14px] font-medium">02</span>
                <div>
                  <span className="block text-[15px] font-medium text-[#10171f] mb-1">Поповни брокерський рахунок</span>
                  <span className="text-[13px] font-light text-[#10171f]">по IBAN на необхідну суму та купуй сертифікати фонду</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#134169] text-white flex items-center justify-center text-[14px] font-medium">03</span>
                <div>
                  <span className="block text-[15px] font-medium text-[#10171f] mb-1">Заробляй на щомісячних дивідендах</span>
                  <span className="text-[13px] font-light text-[#10171f]">та зростанні вартості активів фондів (капіталізація)</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#134169] text-white flex items-center justify-center text-[14px] font-medium">04</span>
                <div>
                  <span className="block text-[15px] font-medium text-[#10171f] mb-1">Додатково: закритий Telegram-чат</span>
                  <span className="text-[13px] font-light text-[#10171f]">одразу після реєстрації — особисте запрошення в кабінеті (21+ тисяч реальних інвесторів)</span>
                </div>
              </li>
            </ol>
            <div className="mt-8">
                <Link to="/account" className="inline-flex items-center gap-2 h-12 px-6 rounded-[12px] bg-[#134169] text-white text-[14px] font-medium hover:bg-[#0f3352] transition-colors">
                  Почати зараз
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            {/* FAQ — розгортані питання */}
            <div className="mt-12 pt-10 border-t border-[rgba(0,0,0,0.07)]">
            <div className="rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white overflow-hidden">
              <details className="group border-b border-[rgba(0,0,0,0.07)] last:border-0">
                <summary className="list-none flex items-center justify-between gap-4 py-4 px-5 cursor-pointer text-[14px] font-normal text-[#10171f] hover:bg-[rgba(0,0,0,0.02)]">
                  <span>Які інвестиційні фонди є в Inzhur?</span>
                  <span className="text-[#10171f] transition-transform group-open:rotate-180" aria-hidden>▼</span>
                </summary>
                <div className="px-5 pb-6 text-[14px] font-light text-[#10171f] leading-relaxed">
                  Inzhur REIT (нерухомість), Inzhur Energy (енергетика) та ОВДП (державні облігації). Деталі — на сторінці пропозицій та в довіднику.
                </div>
              </details>
              <details className="group border-b border-[rgba(0,0,0,0.07)] last:border-0">
                <summary className="list-none flex items-center justify-between gap-4 py-4 px-5 cursor-pointer text-[14px] font-normal text-[#10171f] hover:bg-[rgba(0,0,0,0.02)]">
                  <span>Інвестування можливе тільки в гривні? Чи можу я провести оплату в USD? Куди та в якій валюті здійснюється виплата дивідендів?</span>
                  <span className="text-[#10171f] transition-transform group-open:rotate-180 shrink-0" aria-hidden>▼</span>
                </summary>
                <div className="px-5 pb-6 text-[14px] font-light text-[#10171f] leading-relaxed">
                  Інвестування та виплати — у гривні. Оплата по IBAN у UAH. Дивіденди зараховуються на картку в гривнях.
                </div>
              </details>
              <details className="group border-b border-[rgba(0,0,0,0.07)] last:border-0">
                <summary className="list-none flex items-center justify-between gap-4 py-4 px-5 cursor-pointer text-[14px] font-normal text-[#10171f] hover:bg-[rgba(0,0,0,0.02)]">
                  <span>Що я купую та які документи отримаю після оформлення?</span>
                  <span className="text-[#10171f] transition-transform group-open:rotate-180 shrink-0" aria-hidden>▼</span>
                </summary>
                <div className="px-5 pb-6 text-[14px] font-light text-[#10171f] leading-relaxed">
                  Ти купуєш інвестиційні сертифікати фонду. У кабінеті зберігаються виписки та документи; можна завантажити їх у зручний час.
                </div>
              </details>
              <details className="group border-b border-[rgba(0,0,0,0.07)] last:border-0">
                <summary className="list-none flex items-center justify-between gap-4 py-4 px-5 cursor-pointer text-[14px] font-normal text-[#10171f] hover:bg-[rgba(0,0,0,0.02)]">
                  <span>Як оподатковується мій дохід?</span>
                  <span className="text-[#10171f] transition-transform group-open:rotate-180 shrink-0" aria-hidden>▼</span>
                </summary>
                <div className="px-5 pb-6 text-[14px] font-light text-[#10171f] leading-relaxed">
                  Податки та комісії вже враховані: Inzhur перераховує прибуток на картки співвласників після сплати всього передбаченого законодавством.
                </div>
              </details>
              <details className="group border-b border-[rgba(0,0,0,0.07)] last:border-0">
                <summary className="list-none flex items-center justify-between gap-4 py-4 px-5 cursor-pointer text-[14px] font-normal text-[#10171f] hover:bg-[rgba(0,0,0,0.02)]">
                  <span>Які є гарантії для співвласника? Як захищені інтереси?</span>
                  <span className="text-[#10171f] transition-transform group-open:rotate-180 shrink-0" aria-hidden>▼</span>
                </summary>
                <div className="px-5 pb-6 text-[14px] font-light text-[#10171f] leading-relaxed">
                  Діяльність регулюється НКЦПФР та Законом про ІСІ. Майно фонду — у спільній власності; права захищені договорами та законодавством.
                </div>
              </details>
              <details className="group last:border-0">
                <summary className="list-none flex items-center justify-between gap-4 py-4 px-5 cursor-pointer text-[14px] font-normal text-[#10171f] hover:bg-[rgba(0,0,0,0.02)]">
                  <span>Як продати сертифікати та вийти з проєкту?</span>
                  <span className="text-[#10171f] transition-transform group-open:rotate-180 shrink-0" aria-hidden>▼</span>
                </summary>
                <div className="px-5 pb-6 text-[14px] font-light text-[#10171f] leading-relaxed">
                  В кабінеті у кожного фонду є кнопка «Продати»: подаєш заявку, за кілька годин робочого дня фонд викупить сертифікати за актуальною ціною та зарахує кошти.
                </div>
              </details>
            </div>
            <div className="mt-6">
                <Link to="/handbook" className="inline-flex items-center gap-2 h-14 px-6 rounded-[12px] border-2 border-[#10171f] text-[#10171f] text-[14px] font-medium hover:bg-[#10171f] hover:text-white transition-colors">
                  Всі питання та відповіді про Inzhur
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 3b. Ми — Inzhur: перша українська REIT-компанія ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-10 lg:gap-16 items-start">
            <div className="rounded-[64px] bg-white p-8 md:p-12 shrink-0 w-full lg:max-w-[472px]" />
            <div className={MOB_TEXT_INDENT}>
              <h2 className="text-[28px] md:text-[44px] font-normal text-[#10171f] tracking-[-1px] leading-tight mb-6">
                Ми — Inzhur: перша українська REIT-компанія
              </h2>
              <p className="text-[14px] font-light text-[#10171f] leading-relaxed mb-8 max-w-[712px]">
                Робимо інвестиції простими та прибутковими для всіх: даємо українцям та українкам змогу об'єднуватися для інвестицій у велику нерухомість і ставати її співвласниками — отримуючи дохід від орендних виплат та зростання її вартості. Від 10 гривень — і ти співвласник великої нерухомості, якою Inzhur керує у твоїх інтересах! 👉 Наша діяльність регулюється Законом України про Інститути спільного інвестування (ІСІ) та контролюється Національною комісією з цінних паперів та фондового ринку (НКЦПФР). Inzhur поєднує багаторічний досвід у будівництві, юриспруденції та інвестиціях, зібраний у наших успішних проєктах. За 18 років ми здобули головне — довіру людей, яка стала основою для розвитку.
              </p>
              <p className="text-[14px] font-normal text-[#10171f] mb-4">
                Дізнайся про Inzhur ще більше за кнопкою! 👇
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 h-14 px-6 rounded-[12px] border-2 border-[#10171f] text-[#10171f] text-[14px] font-medium hover:bg-[#10171f] hover:text-white transition-colors">
                Детальніше про Inzhur
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== 3c. Засновник Inzhur — Андрій Журжій ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY}`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[44px] font-normal text-[#10171f] tracking-[-1px] leading-tight mb-6">
              Засновник Inzhur — Андрій Журжій
            </h2>
            <p className="text-[14px] font-light text-[#10171f] leading-relaxed max-w-[470px] mb-8">
            Український підприємець та інвестор, юрист. Керує багатомільярдними активами українських інвесторів. Засновник та СЕО інвестиційної REIT-компанії Inzhur. Основні бізнес-інтереси — ринок інвестицій та будівництво. Inzhur здобув визнання, ставши переможцем у номінаціях «Прозорість бізнесу» та «Вибір аудиторії» престижної премії «Підприємець року 2024» від Forbes та «Найкраща інвестиційна пропозиція в альтернативні активи» від FinAwards 2025.
          </p>
          <Link to="/about#founder" className="inline-flex items-center justify-center h-14 px-8 rounded-[12px] border-2 border-[#10171f] text-[#10171f] text-[14px] font-medium hover:bg-[#10171f] hover:text-white transition-colors">
              Більше про Андрія Журжія
            </Link>
          </div>
        </section>

        {/* ========== 4. Подарункові сертифікати ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY}`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-8">
              Подарункові сертифікати
            </h2>
          </div>
          <div className="rounded-[28px] p-6 md:p-10 bg-gradient-to-br from-[#f8fedd] to-[#fee8dd] border border-[rgba(19,65,105,0.1)] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="text-[17px] md:text-[19px] font-normal text-[#10171f] mb-2">Подаруй близьким можливість інвестувати</h3>
              <p className="text-[13px] font-light text-[#10171f] max-w-[520px]">
                Сертифікат на суму від 500 ₴ — оригінальний подарунок з довгостроковою цінністю. Отримувач зможе обміняти його на паї фонду Inzhur REIT та почати отримувати дивіденди.
              </p>
            </div>
            <Link to="/account" className="shrink-0 h-12 px-6 rounded-[12px] bg-[#134169] text-white text-[14px] font-medium flex items-center justify-center hover:bg-[#0f3352] transition-colors">
              Обрати сертифікат
            </Link>
          </div>
        </section>

        {/* ========== 5. Відео та питання ========== */}
        <section ref={videoFaqRef} className={`animate-on-scroll content-section ${SECTION_PY}`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-6">
              Відео та питання
            </h2>
            <p className="text-[14px] font-light text-[#10171f] max-w-[640px] mb-8">
              Дивись відео про Inzhur та знаходь відповіді на часті питання про інвестиції, дивіденди та безпеку.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="aspect-video rounded-[24px] bg-[#e2ecf1] flex items-center justify-center relative group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-[#10171f]/90 flex items-center justify-center text-white group-hover:bg-[#134169] transition-colors" aria-hidden>
                <svg className="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="absolute bottom-4 left-4 text-[13px] text-[#10171f]/70 font-light">Відео про Inzhur</span>
            </div>
            <div className="rounded-[24px] border border-[rgba(19,65,105,0.2)] p-6 md:p-8">
              <h3 className="text-[17px] font-semibold text-[#10171f] mb-4">Питання та відповіді</h3>
              <ul className="space-y-3 text-[13px] font-light text-[#10171f]">
                <li><strong className="font-normal">Як купити паї?</strong> — Зареєструйся, поповни рахунок та обери фонд у кабінеті.</li>
                <li><strong className="font-normal">Як отримувати дивіденди?</strong> — Вони нараховуються щомісяця на брокерський рахунок.</li>
                <li><strong className="font-normal">Чи безпечно?</strong> — Inzhur — ліцензований менеджер, фонди регулюються НКЦПФР.</li>
                <li><strong className="font-normal">Від якої суми почати?</strong> — Поріг входу від 10 ₴.</li>
                <li><Link to="/account" className="text-[#134169] font-medium hover:underline">Відкрити повний FAQ →</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========== 6. Документи Inzhur ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY} border-t border-[rgba(19,65,105,0.15)]`}>
          <div className={MOB_TEXT_INDENT}>
          <div className="rounded-[22px] border border-[#10171f] p-6 md:p-8 mb-6 inline-block">
            <h2 className="text-[24px] md:text-[30px] font-normal text-[#10171f] tracking-[-1px] mb-4">
              Документи Inzhur
            </h2>
            <p className="text-[14px] font-light text-[#10171f] max-w-[1335px]">
              Тут можна ознайомитися з усіма документами, що стосуються діяльності Inzhur — і знаходяться у відкритому доступі.
            </p>
          </div>
          <ul className="space-y-0 mb-6">
            {[
              { title: 'Виписка Інжур 01.03.2024', href: '#' },
              { title: 'Інформація про надавача фінансових послуг', href: '#' },
              { title: 'Фінансова звітність та аудиторський висновок Inzhur від 30.12.2024', sub: 'ще 3 редакції', href: '#' },
              { title: 'Відомості про вартість чистих активів та перелік ІСІ від 30.12.2024', sub: 'ще 2 редакції', href: '#' },
              { title: 'Призначення суб\'єкта аудиторської діяльності від 05.10.2025', sub: 'ще 5 редакцій', href: '#' },
              { title: 'Схематичне зображення від 31.12.2025', sub: 'ще 2 редакції', href: '#' },
            ].map((doc, i) => (
              <li key={i} className="border-b border-[#dee0e0] last:border-0">
                <a href={doc.href} className="flex items-center justify-between gap-4 py-4 px-6 text-[14px] font-normal text-[#10171f] hover:bg-[#f5f5f5] transition-colors group">
                  <span className="flex flex-wrap items-center gap-2 min-w-0 flex-1">
                    <span>{doc.title}</span>
                    {doc.sub && <span className="text-[#10171f]/50 text-[13px] font-light border-b border-[#10171f]/30">{doc.sub}</span>}
                  </span>
                  <span className="w-9 h-9 shrink-0 rounded-full border border-[#10171f] flex items-center justify-center text-[12px] group-hover:bg-[#10171f] group-hover:text-white transition-colors" aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-[12px] bg-[rgba(222,224,224,0.2)] py-4 px-6 mb-8">
            <p className="text-[14px] font-normal text-[#10171f]">
              Застереження! Результати діяльності фонду у минулому не є гарантією доходів в майбутньому.
            </p>
          </div>
          <Link to="/account" className="inline-flex items-center gap-2 text-[#134169] text-[14px] font-medium hover:underline">
              Усі документи в кабінеті
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* ========== 6b. Долучайся до спільноти ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY} border-t border-[rgba(16,23,31,0.2)]`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-4">
              Долучайся до спільноти
            </h2>
            <p className="text-[14px] font-light text-[#10171f] mb-6 max-w-[720px]">
              Всі новини — там: нові емісії, статистика фондів, дати виплат дивідендів і багато іншого.
            </p>
            <div className="flex flex-wrap gap-3">
            <a href="https://t.me/inzhur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-6 rounded-[12px] border-2 border-[#10171f] text-[#10171f] text-[14px] font-medium hover:bg-[#10171f] hover:text-white transition-colors">
              Telegram
            </a>
            <a href="https://www.youtube.com/@inzhur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-6 rounded-[12px] border-2 border-[#10171f] text-[#10171f] text-[14px] font-medium hover:bg-[#10171f] hover:text-white transition-colors">
              YouTube
            </a>
            <a href="https://www.instagram.com/inzhur.reit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-6 rounded-[12px] border-2 border-[#10171f] text-[#10171f] text-[14px] font-medium hover:bg-[#10171f] hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/inzhur.reit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-6 rounded-[12px] border-2 border-[#10171f] text-[#10171f] text-[14px] font-medium hover:bg-[#10171f] hover:text-white transition-colors">
              Facebook
            </a>
            </div>
          </div>
        </section>

        {/* ========== 6c. Або заходь в наш затишний офіс ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY}`}>
          <div className={MOB_TEXT_INDENT}>
            <h2 className="text-[28px] md:text-[37px] font-normal text-[#10171f] tracking-[-1px] mb-6">
              Або заходь в наш затишний офіс
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-[14px] font-medium text-[#10171f] mb-2">Адреса офісу в Києві</h3>
              <p className="text-[14px] font-light text-[#10171f] leading-relaxed mb-4">
                вул. Жилянська, буд. 48,50А (БЦ «Прайм»), 7 поверх
              </p>
              <a href="https://maps.google.com/?q=Жилянська+48+Київ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#134169] text-[14px] font-medium hover:underline mb-4">
                Прокласти маршрут
                <span aria-hidden>↗</span>
              </a>
              <p className="text-[14px] font-light text-[#10171f]">
                Графік роботи офісу Пн–Пт: з 09:00 до 18:00 🕕
              </p>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#10171f] mb-2">Менеджер з продажів</p>
              <a href="tel:+380442907685" className="text-[20px] md:text-[24px] font-light text-[#10171f] hover:text-[#134169] transition-colors">
                  +38 044 290 76 85
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 7. CTA — Готові почати? ========== */}
        <section className={`animate-on-scroll content-section ${SECTION_PY} pt-12 pb-20`}>
          <div className="rounded-[28px] bg-[#134169] p-8 md:p-12 text-center">
            <h2 className="text-[22px] md:text-[28px] font-normal text-white tracking-[-1px] mb-3">
              Готові почати інвестувати?
            </h2>
            <p className="text-[14px] font-light text-white/90 max-w-[480px] mx-auto mb-6">
              Приєднуйтесь до тисяч співвласників Inzhur. Реєстрація займає кілька хвилин.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/account" className="inline-flex items-center justify-center h-12 px-8 rounded-[12px] bg-white text-[#134169] text-[14px] font-medium hover:bg-white/90 transition-colors">
                Увійти / Зареєструватися
              </Link>
              <a href="tel:+380442907685" className="inline-flex items-center gap-2 text-white text-[14px] font-light hover:underline">
                <span>+38 044 290 76 85</span>
                <span className="text-white/70">— консультація</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
