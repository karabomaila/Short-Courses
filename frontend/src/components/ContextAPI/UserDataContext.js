import React, { createContext, useState, useEffect } from "react";

export const UserDataContext = createContext();

function UserDataContextProvider(props) {
  // data about the user account...
  const [user, setUser] = useState(null);

  useEffect(() => {
    const temp = window.sessionStorage.getItem("user");
    if (temp !== null) {
      const obj = JSON.parse(temp);
      setUser(obj);
    }
  }, []);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserDataContext.Provider>
  );
}

export default UserDataContextProvider;
