/**
 * Конфеті при успішній дії (реєстрація, інвестиція тощо).
 * Підключено локально: /lib/confetti.browser.min.js
 */
export function fireConfetti(options?: { particleCount?: number; spread?: number; origin?: { x: number; y: number } }) {
  if (typeof window === "undefined" || !window.confetti) return;
  window.confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    ...options,
  });
}
