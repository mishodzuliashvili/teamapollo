import { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext();

export function MainState({children}) {
  const [user, setUser] = useState("Jesse Hall");
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(
          () => { setLoading(false) }, 1000
      )
  }, [])
  return (
    <MainContext.Provider value={{user,isLoading,setLoading}}>
      {children}
    </MainContext.Provider>
  );
}


export const useMain = () => useContext(MainContext);
