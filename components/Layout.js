import Navbar from "./Navbar"
import { useContext } from "react"
import AuthContext from "../context/authContext"

const Layout = ({ children }) => {
  const { user, login, logout, authReady } = useContext(AuthContext)

  return (
    <div className="content">
      <Navbar user={user} login={login} logout={logout} authReady={authReady} />
      {children}
    </div>
  )
}

export default Layout
