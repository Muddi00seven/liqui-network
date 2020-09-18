import React, {useState , useContext} from 'react';
// import {useStore } from '../../context/GlobalState';
import Logo from '../Header/logo.png'

// import { requestRevote } from '../../store/asyncActions';
import { makeStyles } from "@material-ui/core/styles";
import {CardActionArea,CardContent,CardActions,Button,CardMedia,Typography,Card,Grid,} from "@material-ui/core";
import {Link} from 'react-router-dom';
import ETHUSD from './ETH-USDC.png';
import './list.css'
// ICONS
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


const addToTrade = () => {
console.log('trade button')
}

const addToStake = () => {
  console.log('stake button')

}

const useStyles = makeStyles(  ({
  root: {
    // minWidth: 275,
    // width: '250px',
    // backgroundColor: '#f2e6d9'
    borderStyle: 'solid',
    borderRadius: '30px',
    borderColor: 'grey',
    marginLeft: '30px',
    marginRight: '30px',
    hieght: '404px',
    borderWidth: '2px',
    // backgroundColor: 'red'
    // opacity: '0.9',
    border: '10px 10px 19px -1px',

    '@media (max-width: 1447px)' : {
      marginLeft:'0px',
      marginRight: '0px',
    },

    
    '@media (max-width: 1207px)' : {
      marginLeft:'0px',
      marginRight: '0px',
      // maxwidht: '20'
    },
    

  },
  bullet: {
    display: 'inline-block',
    // margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  action: {
    textAlign: 'center',
    marginTop: '10px',
    width: "100%",
  },

  stakeBtn : {
    backgroundColor: 'rgb(131, 128, 128)',
    transition: 'background 0.5s linear',
    width: '100px',
    fontFamily: ' Arial, Helvetica, sans-serif, Times New Roman',
    color: 'white',
    borderStyle: 'none',
    borderRadius: '20px',
    fontSize: '15px',
    marginTop: '20px',
    // marginRight:'20px',
    fontWeight: 'bold',
    width: '110px',
    height: '30px',
    textTransaform: 'capitalize',
    // marginBottom: '12px',
    // float: 'left',
    '@media (max-width: 1454px)' : {
      marginRight:'3px',
    },

    '@media (max-width: 834px)' : {
      marginTop: '10px',
      marginLeft:'0px',
    },
    '@media (max-width: 500px)' : {
      marginRight:'5px',
      marginTop: '10px'
    },
    
    '&:hover': {
      backgroundColor: '#27ade6',      
      
    },
  },
  addressHeading:{
    fontSize: '20px',
    marginBottom: '8px',
    color: 'grey',
    marginTop: '16px'
      },
      contractAddress : {
        fontSize: '20px',
        marginBottom: '14px',
        fontWeight: 'bolder',
        fontFamily: ' Arial, Helvetica, sans-serif, Times New Roman',

        color: 'rgb(85, 84, 84)'
    
      },

  tradeBtn: {
    backgroundColor: 'rgb(131, 128, 128)',
    transition: 'background 0.5s linear',
    width: '100px',
    color: 'white',
    fontFamily: ' Arial, Helvetica, sans-serif, Times New Roman',
    borderStyle: 'none',
    borderRadius: '20px',
    fontSize: '15px',
    width: '110px',
    height: '30px',
    marginTop: '20px',
    marginLeft:'20px',
    fontWeight: 'bold',

    // marginBottom: '12px',
    // float: 'right',
    '@media (max-width: 1454px)' : {
      marginLeft:'3px',
    },

    '@media (max-width: 834px)' : {
      marginTop: '5px',
      marginLeft:'0px',
    },
    '@media (max-width: 500px)' : {
      marginLeft:'5px',
      marginTop: '12px',

    },
    '&:hover': {
      backgroundColor: '#27ade6',
            // color: 'black'
    },
  }

}));




export const CardItem = ({id, token , points, lastReward, uri , accShare, name})=>{
  const classes = useStyles();

   const[ review,setReview]= useState('');


    return(
      <>

    

{/* <Grid container spacing={2} justify="space-between" > */}

<div class="columnItem">
    <div class="cardItem">

    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" width="75px" height="100px" /> */}
    {/* <Typography className={classes.addressHeading}>{accShare} </Typography>  <Typography className={classes.contractAddress}>{accShare}</Typography> */}

    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" width="75px" height="100px" /> */}
    {/* <img src=`/static/media/ETH-USD.6594b16f.png` width="100px" height="100px" /> */}
    <div className="icon-container">
    <img src={`/static/media/${uri}.6594b16f.png`} className="icon-image" />
    <img src={Logo} className="logo-img" />
    </div>
    {/* <img src={ETHUSD} width="100px" height="100px" /> */}

    <Typography className={classes.addressHeading}>UNISWAP {uri} </Typography>  <Typography className={classes.contractAddress}>APY {points} %</Typography>

    {/* <Typography className={classes.addressHeading}>{name} </Typography>  <Typography className={classes.contractAddress}>{name}</Typography> */}

            <div className="btnContainer"> 
          <Link to="/Pool" style={{textDecoration: 'none',}}> 
          <button onClick={addToStake} variant="contained" className={classes.stakeBtn }>
          Stake
          </button>  
          </Link>
          <button onClick={addToTrade}  className={classes.tradeBtn}  >
          Trade
        </button>  
        </div>
        </div>
  </div>
  {/* /static/media/ETH-USDC.6594b16f.png */}

{/* </Grid> */}

      <br/>
      </>
    );

}
