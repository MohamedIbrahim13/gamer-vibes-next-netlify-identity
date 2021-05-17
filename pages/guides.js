import styles from "../styles/Guides.module.css"
import Head from "next/head"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../context/authContext"

const Guides = () => {
  const { user, authReady, login } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guides",
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
  }, [user, authReady])
  return (
    <div>
      <Head>
        <title>Gamer Vibes | Guides</title>
        <meta name="description" content="Guide for every gamer" />
      </Head>
      <div className={styles.guides}>
        {!authReady && <div>Loading...</div>}

        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}

        {guides &&
          guides.map(guide => (
            <div key={guide.title} className={styles.card}>
              <h3>{guide.title}</h3>
              <h4>written by {guide.author}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                corrupti iste ab magnam dignissimos id maxime rerum quae minima.
                Delectus maxime culpa est consequatur veritatis, perspiciatis
                cum corrupti possimus quis?
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Guides
