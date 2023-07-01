import {  createContext, useState } from "react";

import { items } from "../Data";

export const Context = createContext();

const ContextFile = ({children}) => {

    const [data , setData ] = useState(items);
    const [searchChoice , setSearchChoice] = useState("Name")
    const [inpData , setInpData] = useState("")

  return (
    <Context.Provider value={{data , setData , searchChoice , setSearchChoice , inpData , setInpData}}>
        {children}
    </Context.Provider>
  )
}

export default ContextFile