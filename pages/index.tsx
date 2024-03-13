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
        👋 Cześć.
        </h1>
        <h2>Nazywam się Szymon Nowak, 24 lata.
        </h2>
        <p className={styles.description}>
        🏢 Buduję różne firmy oraz pomagam innym głównie za pomocą programowania.
        </p>

        <div className={styles.grid}>
          <a href="https://nscode.eu" className={styles.card}>
            <h2>NS Code &rarr;</h2>
            <p>Mój Software House</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>TBA &rarr;</h2>
            <p>Aplikacja SaaS</p>
          </a>

          <a
            href="https://www.bosforcharter.com/home"
            className={styles.card}
          >
            <h2>Jachty &rarr;</h2>
            <p>Wynajmuje 2 jachty na Chorwacji.</p>
          </a>

          <a
            href="https://pikantpolska.pl"
            className={styles.card}
          >
            <h2>Pikant Polska &rarr;</h2>
            <p>
              Firma handlowa
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
  
          Porozmawiajmy: kontakt [at] nowakszymon.pl
        
      </footer>
    </div>
  )
}

export default Home
