import { createContext } from "react";

export const ActiveContext = createContext({});
export const ActiveProvider = ({ children }) => {
  
  return (
    <ActiveContext.Provider>
      {children}
    </ActiveContext.Provider>
  )
}