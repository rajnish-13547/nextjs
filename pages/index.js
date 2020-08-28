import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rajnish Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://rajnish-aiml.com">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Thank you for visiting{' '}
          <code className={styles.code}>https://rajnish-aiml.com</code> !
        </p>

          <a 
            href="https://nextjs.org/learn" 
            className={styles.card}
           >
            <h3>Projects &rarr;</h3>
            <p>Data Science Projects done by me: </p>
          </a>
            
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
