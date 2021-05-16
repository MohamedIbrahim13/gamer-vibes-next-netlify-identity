import Navbar from "./Navbar"


const Layout = ({ children }) => {
  

  return (
    <div className="content">
      <Navbar user={user} login={login} />
      {children}
      
    </div>
  )
}

export default Layout
