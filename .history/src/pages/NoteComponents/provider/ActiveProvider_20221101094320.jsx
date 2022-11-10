import { createContext } from "react";

export const ActiveContext = createContext({});
export const ActiveProvider = ({ children }) => {
  const [activeNote, setActiveNote]
  return (
    <ActiveContext.Provider>
      {children}
    </ActiveContext.Provider>
  )
}