import React, { createContext, useState } from "react";


export const UserDataContext = createContext();

function UserDataContextProvider(props){

    // data about the user account...
    const [account, setAccount] = useState();

    return(
        <UserDataContext.Provider value={{account, setAccount}}>
            {props.children}
        </UserDataContext.Provider>
    )

}

export default UserDataContextProvider;





