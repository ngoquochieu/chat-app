import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {auth} from '../Firebase/config'

export const AuthContext = createContext()
function AuthProvider({children}) {
    const navigate = useNavigate()

    const [user, setUser] = useState({})
    useEffect(() => {
        const unsubscibed = auth.onAuthStateChanged(user => {
                if(user) {
                    const {displayName, email, uid, photoURL} = user
                    setUser({displayName, email, uid, photoURL})
                    navigate('/home')
                }
                navigate('/')
            })
        return() => {
            unsubscibed()
        }
    }, [])
    return <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider 
