import React, { createContext, useState } from "react";

const context = createContext(1);

function NavBarContext({ childreen }: any) {
  const [gerenciarUser, setGerenciarUser] = useState(true);
  const [historicoUser, setHistoricoUser] = useState(false);

  function switchContext() {
    if (gerenciarUser) {
      setGerenciarUser(false);
      setHistoricoUser(true);
    }
    if (!gerenciarUser) {
      setGerenciarUser(true);
      setHistoricoUser(false);
    }
  }

  return (
    <context.Provider
      value={{ gerenciarUser, historicoUser, switchContext } as any}
    >
      {childreen}
    </context.Provider>
  );
}

export { context, NavBarContext };
