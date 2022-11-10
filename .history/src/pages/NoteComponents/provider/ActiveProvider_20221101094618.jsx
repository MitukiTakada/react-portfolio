import { createContext, useState } from "react";

export const ActiveContext = createContext({});
export const ActiveProvider = ({ children }) => {
  const [activeNote, setActiveNote] = useState("oppai")
  return (
    <ActiveContext.Provider value={{activeNote, setActiveNote}}>
      {children}
    </ActiveContext.Provider>
  )
}