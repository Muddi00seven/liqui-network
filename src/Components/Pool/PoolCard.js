import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {CardActionArea,CardContent,CardActions,Button,CardMedia,Typography,Card,Grid,} from "@material-ui/core";
import Swap from '../LandingPage/TokenSwap/Swap';
// import Timer from '../LandingPage/Timer/Timer'
import TimerPool from '../LandingPage/Timer/TimerPool'
import ETH from '../YieldCards/ETH-USDC.png'
 import SimpleTabs from './Tabs/Tab';



// ICONS
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


import './Pool.css'
const useStyles = makeStyles((theme) => ({  

}));

export default function PoolCards() {
  const classes = useStyles();

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
      <img src="/sushi.png" className="icon-pool-image"/>
      <div className="vl"></div>
      <div className="top-icon-text">
      <h3>Card 1</h3>
      <p>Some text</p>
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
      <p className="stake-value1">0.98324 LQN</p>
      <p className="stake-value">$44,000.98</p>
      </div>
      </div>

      <div className="top-right-container4">
      <div className="top-right-text4">
      <button className="claimButton">Claim</button>
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
      <SimpleTabs/>
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
      <p className="line1-text2">0.05434 LQN ($5,374)</p>
      </div>
      <hr className="hr"/>

      <div className="line1">
      <p className="line2-text1">Current Cycle Rewards</p>
      <p className="line2-text2">4,000 LQN ($435,374)</p>
      </div>
      <hr className="hr"/>

      <div className="line1">
      <p className="line3-text1">Next Cycle Rewards</p>
      <p className="line3-text2">2,000 LQN ($125,374)</p>
      </div>
      <hr className="hr"/>

      <div className="line1">
      <p className="line4-text1">Next Reward Halving</p>
      <p className="line4-text2">5d 14h 59m 58s</p>
      </div>
      <hr className="hr"/>
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
      <hr className="hr1"/>

      <div className="line5">
      <p className="line5-text1">0.00 (0.00%) of</p>
      <p className="line5-text2">Underlying Tokens</p>
      <p className="line5-text3">Total Value Locked</p>
      <p className="line5-text4">Claimable</p>
      <p className="line5-text5">Yield Per $1000</p>
      <p className="line5-text6">ROI</p>
      </div>
      <div className="line5">
      <p className="line5-text1">0.00 UNI</p>
      <p className="line5-text2">2,671.56 ULU</p>
      <p className="line5-text3">3.0% of TVL</p>
      <p className="line5-text4">Claimed 0.0</p>
      <p className="line5-text5">ULU/hour</p>
      <p className="line5-text6">ROI</p>
      </div>
    </div>


    
  </div>
  </div>
  
  </div>
  

  
</div>

    </div>

    </>
  );
}
