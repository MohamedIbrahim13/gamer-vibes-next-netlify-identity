import styles from "../styles/Guides.module.css"
import Head from "next/head"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../context/authContext"

const Guides = () => {
  const { user, authReady, login } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)
  /*useEffect(() => {
    if (authReady) {
      fetch(
        "",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then(res => {
          if (!res.ok) {
            login()
            throw Error("You must login to view the content")
          }
          return res.json()
        })
        .then(data => {
          setGuides(data)
          setError(null)
        })
        .catch(err => {
          setGuides(null)
          setError(err.message)
        })
    }
  }, [user, authReady])*/
  return (
    <div>
      <Head>
        <title>Gamer Vibes | Guides</title>
        <meta name="description" content="Guide for every gamer" />
      </Head>
      <div className={styles.guides}>
        <h2>All Guides</h2>
      </div>
    </div>
  )
}

export default Guides
