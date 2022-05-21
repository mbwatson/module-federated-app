import React, { createContext, useContext, useState } from 'react'

const StoreContext = createContext(0)

export const StoreProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  return (
    <StoreContext.Provider value={{ count, increment }}>
      { children }
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
