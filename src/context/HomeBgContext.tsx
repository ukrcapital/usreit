import React, { createContext, useContext, useState, useCallback } from "react";

const DEFAULT_HOME_BG = "#E3EDF2";
const PROPOSALS_BG = "#DDE7D0";

type HomeBgContextType = {
  homeBg: string;
  setHomeBg: (color: string) => void;
  defaultHomeBg: string;
  proposalsBg: string;
};

const HomeBgContext = createContext<HomeBgContextType | null>(null);

export function HomeBgProvider({ children }: { children: React.ReactNode }) {
  const [homeBg, setHomeBgState] = useState(DEFAULT_HOME_BG);
  const setHomeBg = useCallback((color: string) => setHomeBgState(color), []);

  return (
    <HomeBgContext.Provider
      value={{
        homeBg,
        setHomeBg,
        defaultHomeBg: DEFAULT_HOME_BG,
        proposalsBg: PROPOSALS_BG,
      }}
    >
      {children}
    </HomeBgContext.Provider>
  );
}

export function useHomeBg() {
  const ctx = useContext(HomeBgContext);
  return ctx;
}

/** Змішує два HEX-кольори; t in [0,1] */
export function mixHex(hex1: string, hex2: string, t: number): string {
  const r1 = parseInt(hex1.slice(1, 3), 16),
    g1 = parseInt(hex1.slice(3, 5), 16),
    b1 = parseInt(hex1.slice(5, 7), 16);
  const r2 = parseInt(hex2.slice(1, 3), 16),
    g2 = parseInt(hex2.slice(3, 5), 16),
    b2 = parseInt(hex2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * t),
    g = Math.round(g1 + (g2 - g1) * t),
    b = Math.round(b1 + (b2 - b1) * t);
  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
  );
}

export { DEFAULT_HOME_BG, PROPOSALS_BG };
