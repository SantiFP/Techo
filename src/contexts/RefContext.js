import React, { createContext, useState, useContext } from 'react'

const RefContext = createContext()

export const useRefContext = () => useContext(RefContext)

export const RefContextProvider = ({ children }) => {
  const [refs, setRefs] = useState({})
  const handleScroll = ref => {
    console.log('Clicked')
    ref.current.scrollIntoView({ block: 'center' })
  }

  return (
    <RefContext.Provider value={{ handleScroll, refs, setRefs }}>
      {children}
    </RefContext.Provider>
  )
}
