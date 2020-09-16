import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './swap.css';
import ValueChart from './Charts/ValueChart';
import PriceChart from './Charts/PriceChart'
import TryChart from "./Charts/TryChart";
import CountUp from 'react-countup';

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  //   borderStyle: 'solid',
  //   borderRadius: '30px',
  //   borderColor: 'grey',
  //   marginLeft: '30px',
  //   marginRight: '30px',
  //   borderWidth: '1px',
  //   opacity: '0.8',
  //   border: '10px 10px 19px -1px',

  //   '@media (max-width: 1387px)' : {
  //     marginLeft:'0px',
  //     marginRight: '0px'
  //   },
    
    

  // },
  bullet: {
    display: 'inline-block',
    // margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    marginTop: '-5px',
    fontFamily: "'Helvetica Neu', Helvetica, 'Segoe UI', Arial , sans-serif",
    color : 'grey',
    // fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
  value: {
    color: '#3c3d40',
    fontSize: 16,
    fontFamily: "'Helvetica Neu', Helvetica, 'Segoe UI', Arial , sans-serif",
    fontWeight: 'bold',
    marginBottom: '7px'


  },
  heading: {
    fontFamily: "'Helvetica Neu', Helvetica, 'Segoe UI', Arial , sans-serif",
    color: 'black'
  },

  farmButton : {
    backgroundColor: '#27ade6',
    transition: 'color 0.5s linear',
    width: '100px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  },

  buyButton: {
    backgroundColor: '#27ade6',
    transition: 'color 0.5s linear',
    width: '100px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  }
  
});

export default function Swap() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
      <>
    
    <Grid container spacing={0} justify="center" >
  <div class="column">
    <div class="card">
    <CardContent>
        <Typography className={classes.title} >
        Total Value Staked
        </Typography>
        <Typography className={classes.value}  gutterBottom>
          $
          <CountUp 
              start={0}
              end={50564456}
              duration={1.5}
              separator=','
              />  
        </Typography>
        <div>
        <TryChart/>

        </div>
      </CardContent>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <CardContent>
        <Typography className={classes.title} color="textSecondary" >
            LQN Price
        </Typography>
        <Typography className={classes.value}  gutterBottom>
          $
          <CountUp 
              start={0}
              end={50.75}
              duration={1.5}
              decimals={2}
              />  
        </Typography>
      <div>
        {/* <PriceChart/> */}
        <TryChart/>

      </div>
      </CardContent>
    </div>
  </div>
  
  <div class="column" >
    <div class="card3">
    <CardContent>
      <Typography className={classes.title} >
          Max. Total Supply
     </Typography>
        <Typography className={classes.value}  gutterBottom>

          <CountUp 
              start={0}
              end={48090}
              duration={1.5}
              separator=','
              />  
              <span> LQN </span>
        </Typography>

        <Typography className={classes.title} >
          Circulating Supply
     </Typography>
        <Typography className={classes.value}  gutterBottom>
        <CountUp 
              start={0}
              end={15000}
              duration={1.5}
              separator=','
              />  
              <span> LQN </span>        </Typography>
        <Typography className={classes.title} >
          Burned 🔥
     </Typography>
        <Typography className={classes.value}  gutterBottom>
        <CountUp 
              start={0}
              end={5510}
              duration={1.5}
              separator=','
              />  
              <span> LQN </span>        </Typography>
    
      </CardContent>
    </div>
  </div>
  
  <div class="column" >
    <div class="card4" >
    <CardContent> 
      <Typography className={classes.title}  variant="h5" >
          Your Total Staked Value
     </Typography>
        <Typography className={classes.value}    gutterBottom>
          $<CountUp 
              start={0}
              end={323564.17}
              duration={1.5}
              separator=','
              decimals={2}

              />  
              <span>  </span>
        </Typography>

        <Typography className={classes.title} >
        Estimated 24h Rewards
     </Typography>
        <Typography className={classes.value}    gutterBottom>
        <CountUp 
              start={0}
              end={1.23}
              duration={1.5}
              separator=','
              decimals={4}

              />  
             <span> LQN </span>  ($<CountUp 
              start={0}
              end={3564}
              duration={1.5}
              separator=','

              />)
              <span>  </span>
        </Typography>
        <Typography className={classes.title} >
          Your Total Rewards
     </Typography>
        <Typography className={classes.value} variant="h6" component="h3"  gutterBottom>
        <CountUp 
              start={0}
              end={12.73}
              duration={1.5}
              separator=','
              decimals={4}

              />  <span> LQN </span>
              ($<CountUp 
              start={0}
              end={63564}
              duration={1.5}
              separator=','

              />)
        </Typography>
      </CardContent>
    </div>
  </div>
  <div>
    </div>
    
</Grid>
{/* <div class="bubbles">

    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
  
    </div> */}
    </>
  );
}
