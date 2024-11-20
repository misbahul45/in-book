'use client'
import { createLayoutStore, LayoutStore } from "@/zustand/layout-store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";


export type LayoutStoreApi = ReturnType<typeof createLayoutStore>;

export const LayoutStoreContext = createContext<LayoutStoreApi | null>(null);

export interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const layoutRef = useRef<LayoutStoreApi | undefined>(undefined);
  
  if (!layoutRef.current) {
    layoutRef.current = createLayoutStore();
  }

  return (
    <LayoutStoreContext.Provider value={layoutRef.current}>
      {children}
    </LayoutStoreContext.Provider>
  );
};

export default LayoutProvider;

export const useLayoutStore = <T,>(selector: (state: LayoutStore) => T): T => {
  const layoutStoreContext = useContext(LayoutStoreContext);
  if (!layoutStoreContext) {
    throw new Error("useLayoutStore must be used within a <LayoutProvider />");
  }
  return useStore(layoutStoreContext, selector);
};

