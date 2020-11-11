import React, { createContext, useState, useContext } from "react";

const FriendList = createContext({});

export default function FriendListProvider({ children }: any) {
  const [reload, setReload] = useState(0);

  return (
    <FriendList.Provider value={{ reload, setReload } as any}>
      {children}
    </FriendList.Provider>
  );
}

export function useFriendListContext() {
  const context = useContext(FriendList);
  const { reload, setReload }: any = context;
  return { reload, setReload };
}