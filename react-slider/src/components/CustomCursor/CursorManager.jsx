import React, { createContext, useState } from 'react'

export const CursorContext = createContext({
    type: "default",
    setType: () => {}
})

export const CursorManager = (props) => {
    const [type, setType] = useState("default")

  return (
    <CursorContext.Provider value={{ type, setType }}>
        {props.children}
    </CursorContext.Provider>
  )
}
