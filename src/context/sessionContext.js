import { useContext, createContext, useState } from "react";

const sessionContext = createContext([])

export const UseSessionContext = () => useContext(sessionContext)

export default function SessionContextProvider ({children}){
    const [profileObj, setProfileObj ] = useState({})

    if(localStorage.getItem('profile') === '{}' || localStorage.getItem('profile') === null){
        localStorage.setItem('profile', JSON.stringify(profileObj))
    }
    
return(
    <sessionContext.Provider value={{profileObj, setProfileObj}}>
        {children}
    </sessionContext.Provider>
)
}

