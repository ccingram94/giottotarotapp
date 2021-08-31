import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giotto Tarot</title>
        <meta name="description" content="reveal your fate with Giotto Tarot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Giotto Tarot
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
