import React, { createContext, useState, useContext } from "react";

const SideBarContext = createContext({});

export default function SideBarProvider({ children }: any) {
  const [reload, setReload] = useState(0);
  return (
    <SideBarContext.Provider value={{ reload, setReload } as any}>
      {children}
    </SideBarContext.Provider>
  );
}
export function useSideBarContext() {
    const context = useContext(SideBarContext);  
    const {reload, setReload} : any = context;
    return {reload, setReload};
}