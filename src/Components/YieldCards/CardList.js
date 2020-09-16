
import React from 'react';
import {CardItem} from './CardItem';
import './list.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {useStore} from '../../context/GlobalState'
// import TabSection from './Selectors/forHome';
// import {useStore } from '../../context/GlobalState';



const useStyles = makeStyles({

});



export const CardList = () => {
  // const [{accounts ,contract,dappsList}, dispatch] = useStore();
  const classes = useStyles();

  // const [{dappsList}] = useStore();
  const lcs = [{
    id: "1",
    contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  name: "Dapp2",
  uri: "URI",
  },
  
  {
    id: "2",
    contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  name: "Dapp2",
  uri: "URI",
  },
  {
    id: "2",
    contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  name: "Dapp2",
  uri: "URI",
  },
  {
    id: "2",
    contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  name: "Dapp2",
  uri: "URI",
  },
  // {
  //   id: "2",
  //   contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  // name: "Dapp2",
  // uri: "URI",
  // },
  // {
  //   id: "2",
  //   contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  // name: "Dapp2",
  // uri: "URI",
  // },
  // {
  //   id: "2",
  //   contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  // name: "Dapp2",
  // uri: "URI",
  // },
  // {
  //   id: "2",
  //   contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  // name: "Dapp2",
  // uri: "URI",
  // },
  // {
  //   id: "2",
  //   contractAddress: "0x16F20464398463DC5AfA784657b027Aca8a5bF30",
  // name: "Dapp2",
  // uri: "URI",
  // },
  
  ]
 
  const [{pools}] = useStore();
  let list = pools;
   
    return (
      <>       

<br/><br/><br/>

 <Grid container spacing={0} justify="center" >
              {list.map((list)=>(
                <CardItem id={list.poolId} token={list.lpToken} points={list.allocPoint}
                 lastReward={list.lastRewardBlock} accShare={list.accBaconPerShare} 
                 uri={list.uri} />
            ))}
            <br/>
        </Grid> 

    

      </>
    ) }