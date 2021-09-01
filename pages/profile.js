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
  const readings = await prisma.user.findUnique({
    include: { readings: true,},
    where: { email: "constanceingram94@gmail.com", },
  });
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
        <div>
          <Button className={classes.basic} onClick={handleSubmit}>new reading</Button>
          <Button className={classes.basic} onClick={sendToCardMeanings}>card meanings</Button>
        </div>
        {!session && <h1 className={styles.title}>please log in: <Button className={classes.basic} onClick={()=> signIn()}>Log In</Button></h1>}
        {session && <h1 className={styles.title}> welcome back, {session.user.name}</h1>}
        <div>
            <h2>your saved readings:</h2>
            <div>
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
      </main>
    </div>
  )
}

export default Profile
