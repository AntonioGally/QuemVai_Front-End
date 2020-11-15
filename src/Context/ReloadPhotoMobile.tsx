import React, { createContext, useState, useContext } from "react";

const PhotosContext = createContext({});

export default function PhotosProvider({ children }: any) {
  const [reload, setReload] = useState(0);

  return (
    <PhotosContext.Provider value={{ reload, setReload } as any}>
      {children}
    </PhotosContext.Provider>
  );
}

export function usePhotosContext() {
  const context = useContext(PhotosContext);
  const { reload, setReload }: any = context;
  return { reload, setReload };
}
