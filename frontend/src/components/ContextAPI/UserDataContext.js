import React, { createContext, useState } from "react";


export const UserDataContext = createContext();

function UserDataContextProvider(props){

    // data about the user account...
    const [user, setUser] = useState();

    return(
        <UserDataContext.Provider value={{user, setUser}}>
            {props.children}
        </UserDataContext.Provider>
    )

}

export default UserDataContextProvider;





