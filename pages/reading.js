import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import styles from '../styles/Reading.module.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useState } from 'react'
import background from '../public/back.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import {cards} from '../cards.js'
import Question from '../components/Question.js'


const useStyles = makeStyles({
  root: {
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
  },
  button: {

  }
})

function redirectHome () {
  router.push("/");
}

function redirectReading() {
  router.push("/reading");
}

function redirectCards() {
  router.push("/cardmeanings");
}

function redirectProfile() {
  router.push("/profile");
}

function pickCard(max) {
  return Math.floor(Math.random() * max);
}

const card1 = pickCard(21);
const card2 = pickCard(21);
const card3 = pickCard(21);

export default function Reading() {

  const [visibility, setVisibility] = useState(false);
  const [ flipped1, flipCard ] = useState(false);
  const [ flipped2, flipCard2 ] = useState(false);
  const [ flipped3, flipCard3 ] = useState(false);
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Head>
        <title>Giotto Tarot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.buttbonbar}>
          <Button onClick={redirectHome}>Home</Button>
          <Button onClick={redirectCards}>Card Meanings</Button>
          <Button onClick={redirectProfile}>My Profile</Button>
        </div>
        {!visibility &&  <h2> Click the deck to deal your cards: </h2>}
        <div className={styles.row} layout="true">
          <div className={styles.deck}>
            <Image src={background} className={styles.deck} onClick={() => setVisibility(!visibility)}></Image>
          </div>
          <motion.div className={styles.modal}>
            <AnimatePresence>
              {visibility && (
                <motion.div className={styles.row}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}>
                    <div className={styles.card}>
                      <h2> Past </h2>
                      {!flipped1 && <Image src={background} onClick={ () => flipCard(!flipped1)}></Image>}
                      {!flipped1 && <p>Click to reveal your card.</p>}
                      {flipped1 && <motion.div>
                        <Image className={styles.card} src={cards[card1].image} height="400" width="300"></Image>
                        <h2>{ cards[card1].title }</h2>
                        <p>{ cards[card1].description }</p>
                        </motion.div>}
                    </div>
                    <div className={styles.card}>
                      <h2> Present </h2>
                      {!flipped2 && <Image src={background} onClick={ () => flipCard2(!flipped2)}></Image>}
                      {!flipped2 && <p>Click to reveal your card.</p>}
                      {flipped2 && <motion.div>
                        <Image className={styles.card} src={cards[card2].image} height="400" width="300"></Image>
                        <h2>{ cards[card2].title }</h2>
                        <p>{ cards[card2].description }</p>
                        </motion.div>}
                    </div>
                    <div className={styles.card}>
                      <h2> Future </h2>
                      {!flipped3 && <Image src={background} onClick={ () => flipCard3(!flipped3)}></Image>}
                      {!flipped3 && <p>Click to reveal your card.</p>}
                      {flipped3 && <motion.div>
                        <Image className={styles.card} src={cards[card3].image} height="400" width="300"></Image>
                        <h2>{ cards[card3].title }</h2>
                        <p>{ cards[card3].description }</p>
                        </motion.div>}
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
