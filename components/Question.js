import router from 'next/router'
import Link from 'next/link'
import Component, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { QuestionContext } from '../QuestionContext'

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
      margin: '2vh',
    },
    textfield: {
      width: '50vw',
    },
  })

export default function Question () {
  const { question, setQuestion} = useContext(QuestionContext)
  const classes = useStyles();

  function handleChange (e) {
    console.log(e.target.value);
    setQuestion(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    router.push('/reading');
  }

    return (
        <div className={classes.flexdisplay}>
            <form onSubmit={handleSubmit}>
                <TextField className={classes.textfield} onChange={handleChange}></TextField>
                <Button className={classes.basic} type="submit">reveal my fate</Button>
            </form>
        </div>
    )
}
