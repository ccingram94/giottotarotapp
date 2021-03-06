import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import router from 'next/router'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { signIn, signOut, useSession } from 'next-auth/client'
import Question from '../components/Question.js'
import { useState } from 'react'

const useStyles = makeStyles({
  basic: {
    padding: '20px',
    margin: '10px',
    backgroundColor: 'black',
    color: 'white',
  },
  flexdisplay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '50vw',
  },
  textfield: {
    width: '50vw',
  },
})

export default function Home({ question, setQuestion }) {
  const [ session, loading ] = useSession();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/reading');
  }

  function apiEndpoints () {
    router.push('/apiendpoints')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Giotto Tarot</title>
        <meta name="description" content="reveal your fate with Giotto Tarot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.flexdisplay}>
        <h1 className={styles.title}>
          Giotto Tarot
        </h1>
        <Box>
          <Question></Question>
          <div className={styles.buttonbar}>
              {!session && <Button onClick={() => signIn()}>Sign In</Button>}
              {!session && <Button onClick={apiEndpoints}>API Endpoints</Button>}
              {session && <Button onClick={() => signOut()}>Sign Out</Button>}
              {session && <Link href="/profile"><Button>My Profile</Button></Link>}
            </div>
        </Box>
      </main>
    </div>
  )
}
