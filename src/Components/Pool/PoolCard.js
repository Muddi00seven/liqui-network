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

}));

export default function PoolCards() {
  const classes = useStyles();

  return (
      <>
        <div className="Swap">
        <Swap/>
        </div>
      <Timer/>
    <div className="pool-section-main">
      {/* TOP CARD SECTION */}
    <div class="rowTop">
  <div class="columnTop">
    <div class="cardTop">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
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
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  <div class="columnRight">
    <div class="cardRight">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  </div>
  
  </div>
  

  
</div>

    </div>

    </>
  );
}
