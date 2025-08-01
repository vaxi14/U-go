import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = createContext()

const UserContext = ({ children }) => {
    const [user, setuser] = useState({
        email: '',
        fullname: {
            firstName: '',
            lastName: ''
        }
    })
    return (
        <UserDataContext.Provider value={{ user, setuser }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext
