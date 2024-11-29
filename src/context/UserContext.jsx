import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ( { children } )=>{
    const [ user, setUser ] = useState( {} );

    useEffect(() => {
        console.log("Usuario actualizado:", user);
      }, [user]);

    return (
        <UserContext.Provider value={ {user, setUser} }>
            { children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };