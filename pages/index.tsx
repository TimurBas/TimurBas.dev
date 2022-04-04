import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timur Bas</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}>
        <p>© Copyright 2022 by Timur Bas</p>
      </footer>
    </div>
  )
}

export default Home
