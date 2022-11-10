import { createContext } from "react";

export const ActiveContext = createContext({});
export const ActiveProvider = () => {
  return (
    <ActiveContext.Provider>
      
    </ActiveContext.Provider>
  )
}