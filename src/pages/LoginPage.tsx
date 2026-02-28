import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./index.css";
import { useAuth } from "../context/AuthContext";

const COUNTRY_CODES = [
  { value: "+1", label: "+1 🇺🇸 🇨🇦" },
  { value: "+61", label: "+61 🇦🇺" },
  { value: "+30", label: "+30 🇬🇷" },
  { value: "+31", label: "+31 🇳🇱" },
  { value: "+32", label: "+32 🇧🇪" },
  { value: "+33", label: "+33 🇫🇷" },
  { value: "+34", label: "+34 🇪🇸" },
  { value: "+351", label: "+351 🇵🇹" },
  { value: "+352", label: "+352 🇱🇺" },
  { value: "+353", label: "+353 🇮🇪" },
  { value: "+356", label: "+356 🇲🇹" },
  { value: "+357", label: "+357 🇨🇾" },
  { value: "+358", label: "+358 🇫🇮" },
  { value: "+359", label: "+359 🇧🇬" },
  { value: "+36", label: "+36 🇭🇺" },
  { value: "+370", label: "+370 🇱🇹" },
  { value: "+371", label: "+371 🇱🇻" },
  { value: "+372", label: "+372 🇪🇪" },
  { value: "+385", label: "+385 🇭🇷" },
  { value: "+386", label: "+386 🇸🇮" },
  { value: "+39", label: "+39 🇮🇹" },
  { value: "+40", label: "+40 🇷🇴" },
  { value: "+420", label: "+420 🇨🇿" },
  { value: "+421", label: "+421 🇸🇰" },
  { value: "+43", label: "+43 🇦🇹" },
  { value: "+45", label: "+45 🇩🇰" },
  { value: "+46", label: "+46 🇸🇪" },
  { value: "+48", label: "+48 🇵🇱" },
  { value: "+49", label: "+49 🇩🇪" },
  { value: "+380", label: "+380 🇺🇦" },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [showError, setShowError] = useState(false);

  if (isLoggedIn) return <Navigate to="/dashboard" replace />;

  const goToStep2 = () => {
    if (phone.trim()) setStep(2);
    else setShowError(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      goToStep2();
      return;
    }
    const hasError = !phone.trim() || !smsCode.trim();
    setShowError(hasError);
    if (hasError) return;
    login();
    navigate("/dashboard", { replace: true });
  };

  /* Стиль плашки = біла підкладка під блоком (як на оригіналі) */
  const plashkaClass = "bg-white rounded-[24px] shadow-sm p-6 md:p-8 lg:p-10";

  return (
    <div className="main-container w-full min-h-screen bg-[#e2ecf1]/30 relative pb-32">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto pt-6 md:pt-10 relative z-20">
        {/* Плашка 1: форма входу (login-step1 або login-step2); хедер тільки з Layout */}
        <section className={`${plashkaClass} max-w-[640px] mx-auto mb-8 md:mb-12`}>
          <h1 className="text-[22px] md:text-[28px] font-normal leading-tight text-[#10171f] mb-6 font-e-ukraine-head text-left">
            Увійдіть до свого кабінету інвестора
          </h1>

          <form onSubmit={handleSubmit} className="text-left">
            {step === 1 ? (
              <div className="login-step1" data-section="login-step1">
                <div className="flex rounded-[16px] overflow-hidden bg-[#f5f0ee] border border-[rgba(16,23,31,0.08)] mb-4">
                  {/* Код країни: код + прапор, по центру */}
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="h-[56px] min-w-[6.5rem] w-[6.5rem] pl-2 pr-8 bg-transparent text-[13px] text-[#10171f] border-0 outline-none cursor-pointer appearance-none bg-no-repeat bg-[length:12px] bg-[right_0.75rem_center] border-r border-[rgba(16,23,31,0.08)] text-center [direction:ltr]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2310171f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")" }}
                    aria-label="Код країни"
                  >
                    {COUNTRY_CODES.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="00 123 45 67"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setShowError(false); }}
                    className="flex-1 min-w-0 h-[56px] px-3 bg-transparent text-[13px] text-[#10171f] placeholder:text-[#10171f]/50 border-0 outline-none"
                    autoComplete="tel"
                    aria-label="Номер телефону"
                  />
                  <button
                    type="button"
                    onClick={goToStep2}
                    className="h-[56px] w-14 shrink-0 bg-[#10171f] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Далі"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
                {showError && <p className="text-[10px] text-[#d9453b] mb-4">Введіть номер телефону</p>}
              </div>
            ) : (
              <div className="login-step2" data-section="login-step2">
                <div className="flex rounded-[16px] overflow-hidden bg-[#f5f0ee] border border-[rgba(16,23,31,0.08)] mb-3">
                  <span className="h-[56px] min-w-[6.5rem] w-[6.5rem] pl-2 pr-2 flex items-center justify-center text-[13px] text-[#10171f]/70 border-r border-[rgba(16,23,31,0.08)] bg-transparent text-center">
                    {COUNTRY_CODES.find((c) => c.value === countryCode)?.label ?? countryCode}
                  </span>
                  <input
                    type="text"
                    readOnly
                    value={phone}
                    className="flex-1 min-w-0 h-[56px] px-4 bg-transparent text-[13px] text-[#10171f]/70 border-0 outline-none"
                    aria-label="Номер телефону"
                  />
                  <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="h-[56px] min-w-[5.5rem] shrink-0 flex items-center justify-start pl-4 pr-3 text-left text-[#10171f] text-[13px] hover:bg-[#10171f]/5"
                >
                  очистити
                </button>
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Код з SMS"
                  value={smsCode}
                  onChange={(e) => { setSmsCode(e.target.value); setShowError(false); }}
                  className="w-full h-[56px] px-4 bg-[#f5f0ee] rounded-[16px] mb-3 text-[13px] text-[#10171f] placeholder:text-[#10171f]/50 border border-[rgba(16,23,31,0.08)] outline-none"
                  autoComplete="one-time-code"
                  aria-label="Код з SMS"
                />
                <div className="min-h-[13px] flex justify-between items-center text-[10px] mb-4">
                  <span className="underline cursor-pointer text-[#10171f]">Забули пароль?</span>
                  {showError && <span className="text-[#d9453b]">Введіть код з SMS</span>}
                </div>
                <button
                  type="submit"
                  className="w-full hero:w-auto bg-[#10171f] text-white px-8 py-4 rounded-[12px] text-[13px] hover:opacity-90"
                >
                  Отримати код з SMS
                </button>
                <p className="mt-3 text-[13px] text-[#10171f]/60">Ще не зареєстровані?</p>
              </div>
            )}

            <div className="mt-6 text-[11px] text-[#10171f]/60 leading-relaxed">
              <p className="mb-2">
                Ми не передаємо твої дані третім особам, номер телефону потрібен тільки для отримання коду авторизації.
              </p>
              <p className="mb-2">
                З правилами обробки персональних даних можна ознайомитись за <span className="underline cursor-pointer">посиланням</span>.
              </p>
              <p className="text-[10px] text-[#10171f]/50">
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
                <span className="underline cursor-pointer">Terms of Service</span> apply.
              </p>
            </div>
          </form>
        </section>

        {/* Секція «Ще немає реєстрації?» — на фоні сторінки, без білої плашки */}
        <section className="max-w-[640px] mx-auto mb-10 md:mb-14">
          <h2 className="text-[18px] md:text-[20px] font-normal text-[#10171f] mb-3 font-e-ukraine-head text-left">
            Ще немає реєстрації?
          </h2>
          <p className="text-[13px] text-[#10171f]/80 mb-6">
            Зареєструйся, щоб відкрити рахунок і отримати доступ до всіх функцій — <span className="inline-block w-4 h-4 text-[#429243]">✓</span> онлайн за 15 хвилин.
          </p>
          <button
            type="button"
            className="w-full bg-[#10171f] text-white py-4 rounded-[12px] text-[13px] font-normal hover:opacity-90 mb-8"
          >
            Зареєструватися та відкрити рахунок
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-[16px] p-4 text-[11px] text-[#134169] border border-[rgba(16,23,31,0.06)]">
              Безкоштовне відкриття та обслуговування рахунку
            </div>
            <div className="bg-white/80 rounded-[16px] p-4 text-[11px] text-[#134169] border border-[rgba(16,23,31,0.06)]">
              Купуй сертифікати фондів Inzhur та ОВДП за кілька кліків
            </div>
            <div className="bg-white/80 rounded-[16px] p-4 text-[11px] text-[#134169] border border-[rgba(16,23,31,0.06)]">
              Дохід від дивідендів та зростання вартості активів
            </div>
            <div className="bg-white/80 rounded-[16px] p-4 text-[11px] text-[#134169] border border-[rgba(16,23,31,0.06)]">
              Закритий чат інвесторів та підтримка
            </div>
          </div>
        </section>

        {/* Плашки Крок 1, Крок 2, Крок 3 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={plashkaClass}>
            <span className="text-[10px] uppercase text-[#10171f]/50 tracking-wide">Крок 1</span>
            <h3 className="text-[17px] font-normal text-[#10171f] mt-2 mb-3 font-e-ukraine-head">Рахунок Inzhur</h3>
            <p className="text-[13px] text-[#10171f]/80 leading-relaxed">
              Відкрий рахунок, завантаж документи через Дію або BankID НБУ та заповни анкету — це займе кілька хвилин.
            </p>
          </div>
          <div className={plashkaClass}>
            <span className="text-[10px] uppercase text-[#10171f]/50 tracking-wide">Крок 2</span>
            <h3 className="text-[17px] font-normal text-[#10171f] mt-2 mb-3 font-e-ukraine-head">Інвестування та дохід</h3>
            <p className="text-[13px] text-[#10171f]/80 leading-relaxed">
              Обери фонд та проінвестуй за кілька хвилин. Отримуй дивіденди та пасивний дохід від зростання вартості.
            </p>
          </div>
          <div className={plashkaClass}>
            <span className="text-[10px] uppercase text-[#10171f]/50 tracking-wide">Крок 3</span>
            <h3 className="text-[17px] font-normal text-[#10171f] mt-2 mb-3 font-e-ukraine-head">Закритий чат інвесторів Inzhur</h3>
            <p className="text-[13px] text-[#10171f]/80 leading-relaxed">
              Після реєстрації приєднуйся до чату в Telegram — спільнота інвесторів та поради в реальному часі.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}