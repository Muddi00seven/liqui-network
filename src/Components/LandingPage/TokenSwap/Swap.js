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
    color : 'grey',
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
  value: {
    color: '#3c3d40',
    fontWeight: 'bold',

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
    
    <Grid container spacing={0} justify="space-between" >
  <div class="column">
    <div class="card">
    <CardContent>
        <Typography className={classes.title}  gutterBottom>
        Total Value Staked
        </Typography>
        <Typography className={classes.value} variant="h6" component="h2">
          $50,564,456,23
        </Typography>
    
      </CardContent>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            LQN Price
        </Typography>
        <Typography className={classes.value} variant="h6" component="h2">
          $50,75
        </Typography>
    
      </CardContent>
    </div>
  </div>
  
  <div class="column" >
    <div class="card3">
    <CardContent>
      <Typography className={classes.title} >
          Max. Total Supply
     </Typography>
        <Typography className={classes.value} variant="h6" component="h2" gutterBottom>
          48,090,68 LQN
        </Typography>

        <Typography className={classes.title} >
          Circulating Supply
     </Typography>
        <Typography className={classes.value} variant="h6" component="h2" gutterBottom>
          15,000,45 LQN
        </Typography>
        <Typography className={classes.title} >
          Burned 🔥
     </Typography>
        <Typography className={classes.value} variant="h6" component="h2" gutterBottom>
          5,510,32 LQN
        </Typography>
    
      </CardContent>
    </div>
  </div>
  
  <div class="column" >
    <div class="card4" >
    <CardContent> 
      <Typography className={classes.title}  variant="h5" >
          Your Total Stake
     </Typography>
        <Typography className={classes.value} variant="h6" component="h2"   gutterBottom>
          $323,564,17 LQN
        </Typography>

        <Typography className={classes.title} >
        EST 24Th Rewards
     </Typography>
        <Typography className={classes.value} variant="h6" component="h2"   gutterBottom>
          1,23 LQN ($3,564)
        </Typography>
        <Typography className={classes.title} >
          Your Total Rewards
     </Typography>
        <Typography className={classes.value} variant="h6" component="h3"  gutterBottom>
          12,73 LQN ($63,564)
        </Typography>
      </CardContent>
    </div>
  </div>
</Grid>
    </>
  );
}
