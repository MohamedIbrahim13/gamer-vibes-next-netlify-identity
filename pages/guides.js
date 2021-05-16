import styles from "../styles/Guides.module.css"
import Head from "next/head"

const Guides = () => {
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
