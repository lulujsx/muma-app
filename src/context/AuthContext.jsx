import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ( { children } )=>{
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

    // const saveLogin = ( token ) => {
    //     setAuthToken( token );
    //     console.log("Guardaremos el token!")
    // }

    const saveLogin = (token, userData, rememberMe) => {
        setAuthToken(token);
        setUser(userData);
    
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem('authToken', token);
        storage.setItem('user', JSON.stringify(userData));
    };

    // const logout = ()=>{
    //     setAuthToken(null);
    //     localStorage.removeItem('authToken');
    //     navigate("/");
    // }

    const logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('user');
        navigate("/");
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        const userData = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
    
        if (token && userData) {
          setAuthToken(token);
          setUser(userData);
        }
    }, []);

    return (
        <AuthContext.Provider value={ {authToken, user, saveLogin, logout} }>
            { children }
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };