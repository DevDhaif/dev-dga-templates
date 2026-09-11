import { createContext, useContext } from 'react';

export type Mode = 'light' | 'dark';

export interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const ModeContext = createContext<ModeContextValue>({ mode: 'light', setMode: () => {} });

export function useMode(): ModeContextValue {
  return useContext(ModeContext);
}
