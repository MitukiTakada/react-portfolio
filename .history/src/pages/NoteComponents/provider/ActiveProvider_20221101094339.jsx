import { createContext } from "react";

export const ActiveContext = createContext({});
export const ActiveProvider = ({ children }) => {
  const [activeNote, setActiveNote] = useState(false)
  return (
    <ActiveContext.Provider value={{activeNote}}>
      {children}
    </ActiveContext.Provider>
  )
}