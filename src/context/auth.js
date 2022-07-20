import { createContext, useState, useEffect } from 'react';
import UnauthApp from '../unauth-app';
import App from '../App';

export const AuthContext = createContext();

const AuthProvider = () => {
    
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() =>{
        if(token){
            localStorage.setItem("token", token)
        }else{
            localStorage.removeItem('token')
        }
    },[token])

    return (
        <AuthContext.Provider value={{token,setToken}} >
            {token ? <App /> : <UnauthApp />}
        </AuthContext.Provider>
    );
};

export default AuthProvider;