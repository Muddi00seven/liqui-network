import React from 'react'
import './css/landingPage.css';
import Timer from './Timer/Timer'
        // LIBRARIES
import Swap from './TokenSwap/Swap'
import { makeStyles } from '@material-ui/core/styles';
import {CardList} from '../YieldCards/CardList';
import './Landing.css'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      // backgroundColor: '#f2e6d9'
      borderStyle: 'solid',
      borderRadius: '40px',
    },

    Card: {
        marginLeft: '100px',
        marginRight: '100px'
    },
    Swap: {
        backgroundColor: '#27ade6',
        paddingTop: '50px',
        paddingBottom: '50px',
        paddingLeft: '20px',
        paddingRight: '20px'

    }
    
  });

const Landing = () => {
    const classes = useStyles();

    return (
        <>
        <div>
       <div className="Swap ">
        <Swap/>
        </div>
            <Timer/>
         <div className="cardList "> 
           <CardList />
        </div>
        </div>
     
        </>
    )
}

export default Landing
