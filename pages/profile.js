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
import { PrismaClient, Prisma } from '@prisma/client'
import { useEffect } from 'react'


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

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const readings = await prisma.reading.findMany()
  return {
    props: {
      readings,
    },
  }
}


function Profile({ readings }) {
  const [ session, loading ] = useSession();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/reading');
  }

  const sendToCardMeanings = () => {
    router.push('/cardmeanings');
  }

  console.log(readings)


  return (
    <div className={styles.container}>
      <Head>
        <title>Giotto Tarot</title>
        <meta name="description" content="reveal your fate with Giotto Tarot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.flexdisplay}>
        {!session && <h1 className={styles.title}>please log in: </h1>}
        {session && <h1 className={styles.title}> welcome back, {session.user.name}</h1>}
        <div>
            <h2>saved readings:</h2>
            <div>
              {session && readings.map((reading) => 
                <div key={reading.id}>
                    <h2 className={styles.displayitem}>{reading.question}</h2>
                    <div className={styles.displayrow}>
                      <p className={styles.displayitem}>{reading.card1}</p>
                      <p className={styles.displayitem}>{reading.card2}</p>
                      <p className={styles.displayitem}>{reading.card3}</p>
                    </div>
                </div>)}
              {!session && <p>sorry, you must be logged in to view saved readings</p>}
            </div>
          </div>
        <Box>
          <div className={styles.buttonbar}>
              {!session && <Button onClick={() => signIn()}>Sign In</Button>}
              {session && <Button onClick={() => signOut()}>Sign Out</Button>}
            </div>
            <div>
            </div>
        </Box>
        <div>
          <Button className={classes.basic} onClick={handleSubmit}>new reading</Button>
          <Button className={classes.basic} onClick={sendToCardMeanings}>card meanings</Button>
        </div>
      </main>
    </div>
  )
}

export default Profile
