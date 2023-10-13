import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import PropTypes from 'prop-types'
import { auth } from '../firebase/utils.js'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState({})
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [dietPlan, setDietPlan] = React.useState([])

  React.useEffect(() => {
    if (!auth.currentUser) setCurrentUser(auth.currentUser)
  }, [auth.currentUser?.uid])

  React.useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setIsLoggedIn(user ? true : false)
    })

    return () => unsubsribe()
  }, [])

  const value = {
    isLoggedIn,
    currentUser,
    dietPlan,
    setDietPlan,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
