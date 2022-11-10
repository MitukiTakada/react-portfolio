import { createContext } from "react";

export const ActiveContext = createContext({});
export const ActiveProvider = ({ children }) => {
  const [activeNote, setActi]
  return (
    <ActiveContext.Provider>
      {children}
    </ActiveContext.Provider>
  )
}