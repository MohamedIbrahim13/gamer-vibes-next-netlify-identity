import Navbar from "./Navbar"
import { useContext } from "react"
import AuthContext from "../context/authContext"

const Layout = ({ children }) => {
  const { user, login } = useContext(AuthContext)

  return (
    <div className="content">
      <Navbar user={user} login={login} />
      {children}
      
    </div>
  )
}

export default Layout
