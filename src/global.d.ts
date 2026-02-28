/* Глобальні бібліотеки, підключені через <script> в index.html */

interface GSAPCore {
  registerPlugin(...plugins: unknown[]): void;
  fromTo(target: unknown, fromVars: object, toVars: object, vars?: object): unknown;
  to(target: unknown, vars: object): unknown;
  from(target: unknown, vars: object): unknown;
  timeline(vars?: object): { to(target: unknown, vars: object): unknown; fromTo(a: unknown, b: object, c: object): unknown };
}

interface ScrollTriggerInstance {
  kill(): void;
}

interface ScrollTriggerStatic {
  create(vars: object): unknown;
  getAll(): ScrollTriggerInstance[];
}

declare global {
  interface Window {
    gsap: GSAPCore;
    ScrollTrigger: ScrollTriggerStatic;
    anime: (params: object) => unknown;
    confetti: (options?: object) => void;
    SimpleBar: new (element: HTMLElement, options?: object) => { unMount(): void };
  }
}

declare module "*.webp" {
  const src: string;
  export default src;
}

export {};
