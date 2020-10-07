import React, {useEffect , useState , useRef, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import {CardActionArea,CardContent,CardActions,Button,CardMedia,Typography,Card,Grid,} from "@material-ui/core";
import Swap from '../LandingPage/TokenSwap/Swap';
// import Timer from '../LandingPage/Timer/Timer'
import TimerPool from '../LandingPage/Timer/TimerPool'
 import SimpleTabs from './Tabs/Tab';
 import { GlobalContext2 } from "./GlobalContext/GlobalContext";
import Logo from '../Header/logo.png'
import TabList from './Tabs/TabList'

import {useStore } from '../../context/GlobalState';
import { claim} from "../../store/asyncActions";

// ICONS



import './Pool.css'
const useStyles = makeStyles((theme) => ({  

}));

export default function PoolCards({value, i}) {

  const [{web3,lastBlock,currentReward ,accounts, blockInADay,liquiChefContract},dispatch] = useStore();

  let hoursReward = currentReward * 1;

  let fullCycle = hoursReward * 30

  let halfCycle = fullCycle / 2

  // const {plus,minus,remove , cart } = useContext(GlobalContext2)


  const classes = useStyles();

  const handleClaim = async() => {
    console.log("in Claim",value);
    console.log("this is", value.poolId);
   let id=value.poolId;
   let amount = value.pendingRewards;
    if(web3){
    
    try{
     // console.log("Before claim");
     const approval= await  claim(web3,liquiChefContract,id,amount,accounts,dispatch);
     console.log("afterapproval",approval);
    }catch(error){
      console.log("Error",error);
    }
  }
  else{
    alert("No Web3");
  }
  }


  return (
      <>
        <div className="Swap">
        <Swap/>
        </div>
      <TimerPool/>
    <div className="pool-section-main">
      {/* TOP CARD SECTION */}
    <div class="rowTop">
  <div class="columnTop">
    <div class="cardTop">
        {/* left side */}
        <div className="all-top-container">
      <div className="left-top-container">
      <img src={`${value.uri}.png`} className="icon-pool-image"/>
      <img src={Logo} className="icon-logo-image"/>

      <div className="vl"></div>
      <div className="top-icon-text">
  <h3 className="uniswap-heading">UNISWAP LQN/{value.uri}</h3>
      <p className="lqn-price">1 LQN = 34.43 ETH</p>
      </div>
      </div>

      <div className="top-right-container">
      <div className="top-right-text">
      <p className="stake-heading">Your Staked</p>
      <p className="stake-value">1.9832 LQN</p>
      <p className="stake-value">400.98 ETH</p>

      </div>
      </div>
      
      <div className="top-right-container2">
      <div className="top-right-text2">
      <p className="stake-heading">Your Balance</p>
      <p className="stake-value">4.9832 LQN</p>
      <p className="stake-value">400.98 ETH</p>
      </div>
      </div>

      <div className="top-right-container3">
      <div className="top-right-text3">
      <p className="stake-heading1">Your Rewards</p>
      <p className="stake-value1">{value.pendingRewards} LQN</p>
      <p className="stake-value">$44,000.98</p>
      </div>
      </div>

      <div className="top-right-container4">
      <div className="top-right-text4">
      <button className="claimButton" onClick={handleClaim}>Claim</button>
      </div>
      </div>

      </div>
    {/* Right Side */}
    
    </div>
  </div>
    {/* <br/><br/><br/><br/> */}
 



</div>
    {/* BOTTOM LEFT */}
<div > 
<div className="bottomLeft">
    <div class="rowLeft">
  <div class="columnLeft">
    <div class="cardLeft">
      <TabList/>
      {/* <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p> */}
    </div>
  </div>



  {/* BOTTOM RIGHT */}
  <div class="columnRight">
    <div class="cardRight">
      <h3 className="uni-heading">Uniswap Pool</h3>
      <div className="line1">
      <p className="line1-text1">Your Estimated 24h Rewards</p>
      <p className="line1-text2">{hoursReward} LQN ($5,374)</p>
      </div>
      <hr className="hr"/>

      <div className="line1">
      <p className="line2-text1">Current Cycle Rewards</p>
      <p className="line2-text2">{fullCycle} LQN ($435,374)</p>
      </div>
      <hr className="hr"/>

      <div className="line1">
      <p className="line3-text1">Next Cycle Rewards</p>
      <p className="line3-text2">{halfCycle} LQN ($125,374)</p>
      </div>
      <hr className="hr"/>

      <div className="line1">
      <p className="line4-text1">Next Reward Halving</p>
      <p className="line4-text2">5d 14h 59m 58s</p>
      </div>
      {/* <hr className="hr"/>
      <br/><br/>
      <hr className="hr1"/>


      <div className="line5">
      <p className="line5-text1">Staked</p>
      <p className="line5-text2">Underlying Tokens</p>
      <p className="line5-text3">Total Value Locked</p>
      <p className="line5-text4">Claimable</p>
      <p className="line5-text5">Yield Per $1000</p>
      <p className="line5-text6">ROI</p>
      </div>
      <br/>
      <hr className="hr1"/> */}

{/* 
      <div className="line5">
      <p className="line5-text1">0.00 (0.00%) of</p>
      <p className="line5-text2">44,493.86 USDT</p>
      <p className="line5-text3">$96,431.25 <span>(24.71)</span></p>
      <p className="line5-text4">0.00</p>
      <p className="line5-text5">0.129626</p>
      <p className="line5-text6">Hourly </p>
      </div>
      <div className="line5">
      <p className="line5-text1">0.00 UNI</p>
      <p className="line5-text2">2,671.56 ULU</p>
      <p className="line5-text3">3.0% of TVL</p>
      <p className="line5-text4">Claimed 0.0</p>
      <p className="line5-text5">ULU/hour</p>
      <p className="line5-text6">ROI</p>
      </div> */}
    </div>


    
  </div>
  </div>
  
  </div>
  

  
</div>

    </div>

    </>
  );
}
