import { createContext, useState } from "react";

export const ActiveContext = createContext({});
export const ActiveProvider = ({ children }) => {
  const [activeNote, setActiveNote] = useState("aaaa")
  return (
    <ActiveContext.Provider value={{activeNote, setActiveNote}}>
      {children}
    </ActiveContext.Provider>
  )
}