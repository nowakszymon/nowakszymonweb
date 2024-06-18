/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nowak Szymon</title>
        <meta name="description" content="Nowak Szymon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        👋 Hi.
        </h1>
        <h2>Nice to e-meet you.
        </h2>

        <div className={styles.grid}>
          <a href="https://nscode.eu" className={styles.card}>
            <h2>NS Code &rarr;</h2>
            <p>Software Company</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>TBA &rarr;</h2>
            <p>SaaS company</p>
          </a>

          <a
            href="https://www.bosforcharter.com/home"
            className={styles.card}
          >
            <h2>Yachts &rarr;</h2>
            <p>I do charter 2 yachts in Croatia.</p>
          </a>

          <a
            href="https://pikantpolska.pl"
            className={styles.card}
          >
            <h2>Pikant Polska &rarr;</h2>
            <p>
              Brokerage company
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Let's talk: kontakt [at] nowakszymon.pl
      </footer>
    </div>
  )
}

export default Home
