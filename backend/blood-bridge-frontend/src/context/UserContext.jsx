import axios from 'axios';
import React, { createContext, useState } from 'react'

const UserContext = createContext();


export const UserProvider = ({children}) => {
    const [userLoginDetail,setUserLoginDetail] = useState({email:'sample@gmail.com',password:'sample'})
    const [userDetails,setUserDetails] = useState(null)


    

  return (
    <div>
        <UserContext.Provider value={{userLoginDetail,setUserLoginDetail,userDetails,setUserDetails}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContext
