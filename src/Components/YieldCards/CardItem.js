import React, {useState} from 'react'
// import {useStore } from '../../context/GlobalState';

// import { requestRevote } from '../../store/asyncActions';
import { makeStyles } from "@material-ui/core/styles";
import {CardActionArea,CardContent,CardActions,Button,CardMedia,Typography,Card,Grid,} from "@material-ui/core";
import {Link} from 'react-router-dom';

import './list.css'
// ICONS
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';



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
    marginTop: '20px',
    marginRight:'20px',
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
    marginBottom: '4px',
    color: 'grey',
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
    marginTop: '20px',
    marginLeft:'20px',
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




export const CardItem = ({id , contractAddress , name ,status ,isActive ,legit ,downVotes  ,remarks , upVotes ,url})=>{
  const classes = useStyles();

   const[ review,setReview]= useState('');


    return(
      <>

    

{/* <Grid container spacing={2} justify="space-between" > */}

<div class="columnItem">
    <div class="cardItem">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" width="75px" height="100px" />
            <Typography className={classes.addressHeading}>UNISWAP LQN </Typography>  <Typography className={classes.contractAddress}>APY  4545%</Typography>
            <div className="btnContainer"> 
          <Link to="/Pool" style={{textDecoration: 'none'}}> 
          <Button variant="contained" className={classes.stakeBtn } color="secondary">
          STAKE
          </Button>  
          </Link>
          <Button variant="contained" className={classes.tradeBtn} color="secondary"  >
          TRADE
        </Button>  
        </div>
        </div>
  </div>


{/* </Grid> */}

      <br/>
      </>
    );

}
