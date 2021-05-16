import { createContext, useState, useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    netlifyIdentity.on("login", user => {
      setUser(user)
      netlifyIdentity.close()
    })
    netlifyIdentity.init()
  }, [])
  const login = () => {
    netlifyIdentity.open()
  }
  const context = { user, login }
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
