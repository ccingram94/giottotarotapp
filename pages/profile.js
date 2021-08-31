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

export default function Profile() {
  const [ session, loading ] = useSession();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/reading');
  }

  const sendToCardMeanings = () => {
    router.push('/cardmeanings');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Giotto Tarot</title>
        <meta name="description" content="reveal your fate with Giotto Tarot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.flexdisplay}>
        {!session && <h1 className={styles.title}>please log in: <br /><Button className={classes.basic} onClick={()=> signIn()}>Log In</Button></h1>}
        {session && <h1 className={styles.title}> welcome back, {session.user.name}</h1>}
        <Box>
          <Button className={classes.basic} onClick={handleSubmit}>new reading</Button>
          <Button className={classes.basic} onClick={sendToCardMeanings}>card meanings</Button>
          <div className={styles.buttonbar}>
              {!session && <Button onClick={() => signIn()}>Sign In</Button>}
              {session && <Button onClick={() => signOut()}>Sign Out</Button>}
              {session && <Link href="/profile"><Button>My Profile</Button></Link>}
            </div>
        </Box>
      </main>
    </div>
  )
}
