import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {CardActionArea,CardContent,CardActions,Button,CardMedia,Typography,Card,Grid,} from "@material-ui/core";
import Swap from '../LandingPage/TokenSwap/Swap';
import Timer from '../LandingPage/Timer/Timer'


// ICONS
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


import './Pool.css'
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // textAlign: 'center',
    marginTop: '70px',

  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mainContainer: {

    // marginLeft: '100px'
  },
  card : {
    borderStyle : 'solid',
    
    borderRadius : '20px',
    // borderWidth: '5px',
    borderColor : 'grey',
    marginLeft: '5px',
    marginRight:'5px',
    width: '500px'
  },

  card1: {
    backgroundColor: '#def0fa',
    borderBottom: '1px solid #838687',


  },
  card2: {
backgroundColor: '#def0fa',

  },
  card4 : {
    borderStyle : 'solid',
    
    borderRadius : '20px',
    // borderWidth: '5px',
    borderColor : 'grey',
    marginLeft: '5px',
    marginRight:'5px',
    width: '780px',

    '@media (max-width: 500px)' : {
        // display: 'flex',
        // justifyContent: 'flex-start',
        
        width: '200px',

    },
  },

  card5: {
    backgroundColor: '#def0fa',
    borderTop: '1px solid #838687',

  },



  action: {
    textAlign: 'center',
    marginTop: '10px',
    width: "100%",
  },
  hr: {
    marginTop: '10px',
  },
  address: {
    borderStyle : 'dashed',
    borderColor: 'red',
 
    borderRadius : '10px',

  },
  addressHeading:{
fontSize: '20px',
marginBottom: '10px',
color: 'black'
  },

  contractAddress : {
    fontSize: '14px'
  },
  remarksHeading:{
    color: '#ba1e1e'
  },
  remarks:{
    fontWeight: 'bold'
    
  },
  stakeBtn : {
    backgroundColor: '#0099ff',
    transition: 'color 0.5s linear',
    width: '150px',
    color: 'white',
    borderStyle: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    // marginLeft:'20px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  },

  tradeBtn: {
    backgroundColor: '#0099ff',
    transition: 'color 0.5s linear',
    width: '100px',
    color: 'white',
    borderStyle: 'none',
    borderRadius: '20px',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  },

  sixDiv: {
    //   justifyContent: 'center',
      
 '@media (max-width: 2229px)' : {
    justifyContent: 'center',},

    '@media (max-width: 500px)' : {
        justifyContent: 'space-between',}


  },
  


  Swap: {
    backgroundColor: '#27ade6',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '20px',
    paddingRight: '20px'

}

}));

export default function PoolCards() {
  const classes = useStyles();

  return (
      <>
        <div className="Swap">
        <Swap/>
        </div>
      <Timer/>
    <div className={classes.root}>
      <Grid container justify="center">
        {/* CLAIM */}
        <Grid item xs={6}>
        <Card className={classes.card1}>
          <CardActionArea >
          </CardActionArea>
          <CardActions>
            <div className={classes.action}>
            <Typography className={classes.addressHeading}>LQN CLAIM </Typography>  <Typography className={classes.contractAddress}>4545</Typography>
           <div className="review-container">
        </div>
          <div align="center"> 
          <Button variant="contained" className={classes.stakeBtn} color="secondary">
          CLAIM
          </Button>  
             </div>
         </div>
          </CardActions>
        </Card>    
        </Grid>
        </Grid>

        {/* YOUR WALLET */}
        <Grid container justify="center">
        <Grid item xs={3}>
        <Card className={classes.card2} style={{borderRight: '1px solid #838687'}}>
          <CardActionArea >
          </CardActionArea>
          <CardActions>
            <div className={classes.action}>
            <Typography className={classes.addressHeading}>YOUR WALLET </Typography>  <Typography className={classes.contractAddress}>4545</Typography>
           <div className="review-container">
        </div>
          <div align="center"> 
          <Button variant="contained" className={classes.stakeBtn} color="secondary">
            APPROVE
          </Button>  
             </div>
         </div>
          </CardActions>
        </Card>    
        </Grid>
        {/* STAKE TOKEN */}
        <Grid item xs={3}>
        <Card className={classes.card2}>
          <CardActionArea >
          </CardActionArea>
          <CardActions>
            <div className={classes.action}>
            <Typography className={classes.addressHeading}>STAKED TOKEN </Typography>  <Typography className={classes.contractAddress}>4545</Typography>
           <div className="review-container">
        </div>
          <div align="center"> 
          <Button variant="contained" className={classes.stakeBtn} color="secondary">
          UNSTAKE
          </Button>  
             </div>
         </div>
          </CardActions>
        </Card>    
        </Grid>
        </Grid>
        
        {/* GET GLP TOKEN */}
        <Grid container className={classes.sixDiv}>

        <Grid item xs={6} >
        <Card className={classes.card5}>
          <CardActions>
            <div className={classes.action}>
           <div className="review-container">
        </div>
          <div align="center"> 
          <Button variant="contained" className={classes.stakeBtn}>
          GET LQN TOKEN
          </Button>  
             </div>
         </div>
          </CardActions>
        </Card>    
        </Grid>
        </Grid>

        
    </div>
    </>
  );
}
