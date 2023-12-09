import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Auth } from '../services';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true)
  const { logout, register, signIn, signInWithGoogle, stateListening } = Auth;

  useEffect(() => {
    const unsubscribe = stateListening((currentUser) => {
      setUser(currentUser)
      setLoadingUser(false)
    })
    return () => unsubscribe()
  }, [stateListening])

  return (
    <AuthContext.Provider value={{user, loadingUser, logout, register, signIn, signInWithGoogle}}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
