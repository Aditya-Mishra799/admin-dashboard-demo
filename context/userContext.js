'use client'
import React, {createContext, useContext, useState} from "react";
const permissions = {
    dashboard : {
        analytics : {
            panel : true,
        }
    },
    posts : {
        editPosts: true,
    },
    categories : true,
}
export const UserContext = createContext()

const UserContextProvider = ({children}) => {
  return (
    <UserContext.Provider value={{permissions}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider