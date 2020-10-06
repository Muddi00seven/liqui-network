import React, {useContext,useState } from 'react'
import './Header.css'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
// import CoinList from './Price/CoinList'
import Logo from './logo.png'
import {Link} from 'react-router-dom';
import { loadBlockchain} from "../../store/asyncActions";
import {useStore } from '../../context/GlobalState';


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#efefef',
    boxShadow : 'none',
  },

  navButton : {
    color : 'grey',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    transition: 'color 0.4s linear',
    textDecoration: 'none',
    marginLeft: '28px',
    fontFamily: ' Arial, Helvetica, sans-serif, Times New Roman',
    '@media (max-width: 1462px)' : {
      marginLeft:'140px',
    },
    
'@media (max-width: 1462px)' : {
  marginLeft:'25px',
},
    '@media (max-width: 1400px)' : {
      marginLeft:'25px',
    },
    
    '@media (max-width: 1368px)' : {
      marginLeft:'24x',
    },
    
    '@media (max-width: 1332px)' : {
      marginLeft:'24px',
    },
    
    '@media (max-width: 1276px)' : {
      marginLeft:'20px',
    },
    
    '@media (max-width: 1246px)' : {
      marginLeft:'20px',
    },
    '@media (max-width: 1026px)' : {
      marginLeft:'0px',
    },
    '@media (max-width: 834px)' : {
      marginLeft:'0px',
      fontSize: '15px',

    },
    
    
  '&:hover' :{
      color : '#27ade6'
  },
  },
    
  navButton1 : {
    color : 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    transition: 'background 0.5s linear',
    textDecoration: 'none',
    marginLeft: '66px',
    width: '150px',
    backgroundColor: 'rgb(131, 128, 128)',
    fontFamily: ' Arial, Helvetica, sans-serif, Times New Roman',
    borderRadius: '30px',
    borderStyle: 'none',
    '@media (max-width: 1400px)' : {
      marginLeft:'50px',
    },
    
    '@media (max-width: 1368px)' : {
      marginLeft:'43px',
    },
    
    '@media (max-width: 1332px)' : {
      marginLeft:'34px',
    },
    
    '@media (max-width: 1276px)' : {
      marginLeft:'31px',
    },
    
    '@media (max-width: 1246px)' : {
      marginLeft:'16px',
    },
    '@media (max-width: 1026px)' : {
      marginLeft:'5px',
    },

    '@media (max-width: 834px)' : {
      marginLeft:'10px',
    },
    '@media (max-width: 768px)' : {
      marginLeft:'0px',
      fontSize: '15px',

    },
    
    
  '&:hover' :{
      // color : 'white',
      backgroundColor: '#27ade6'
  },
  },

  links: {
    display: "flex",
    
  },
  linkContainer:{
    textAlign: 'center',
    marginLeft: '300px',


    '@media (max-width: 1024px)' : {
      marginLeft:'220px',
    },


    '@media (max-width: 834px)' : {
      marginLeft:'10px',
    },
  },
logo: {
marginLeft: '170px',

'@media (max-width: 1462px)' : {
  marginLeft:'140px',
},

'@media (max-width: 1400px)' : {
  marginLeft:'118px',
},

'@media (max-width: 1368px)' : {
  marginLeft:'100px',
},

'@media (max-width: 1332px)' : {
  marginLeft:'80px',
},

'@media (max-width: 1276px)' : {
  marginLeft:'31px',
},

'@media (max-width: 1246px)' : {
  marginLeft:'16px',
},
'@media (max-width: 1026px)' : {
  marginLeft:'0px',
},
'@media (max-width: 500px)' : {
  marginLeft:'5px',
},

},
logoHeading: {
color: "grey",
marginLeft: '-65px',
fontSize: '22px',
fontFamily: ' Arial, Helvetica, sans-serif, Times New Roman',
fontWeight: '500',


'@media (max-width: 1570px)' : {
  marginLeft:'-46px',
},

'@media (max-width: 1462px)' : {
  marginLeft:'-1px',
},

'@media (max-width: 1400px)' : {
  marginLeft:'0',
},

'@media (max-width: 1368px)' : {
  marginLeft:'0',
},

'@media (max-width: 1332px)' : {
  marginLeft:'0px',
},


'@media (max-width: 1276px)' : {
  marginLeft:'0px',
},

'@media (max-width: 1246px)' : {
  marginLeft:'0px',
},
'@media (max-width: 1026px)' : {
  marginLeft:'0px',
},

'@media (max-width: 834px)' : {
  marginLeft:'-50px',
},
'@media (max-width: 768px)' : {
  marginLeft:'-30px',
},




'@media (max-width: 500px)' : {
  marginLeft:'-130px',
},
'@media (max-width: 418px)' : {
  marginLeft:'-150px',
},

'@media (max-width: 375px)' : {
  marginLeft:'-120px',
},

'@media (max-width: 366px)' : {
  marginLeft:'-120px',
},

'@media (max-width: 330px)' : {
  marginLeft:'-90px',
},
},


  menuButton: {
    // color: theme.palette.primary.contrastText,
    color: '#4b4b4d'

  },
  rightContainer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 80,
    },
  }
}
));
const Header = ({ onMenuClickHandler }) => {
  const [{dispatch}] = useStore();

  const scrollToBottom = () =>
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
  const classes = useStyles();
  // Connect button  State
  const [connect , setConnect] = useState()
    // connect button function
  const OnConnect = async() => {
    setConnect(connect)
    console.log('this is connect button',dispatch);
   await loadBlockchain(dispatch);
  }

  return (
    <div>
      <AppBar position="sticky" className={classes.appBar}  >
        <Toolbar className={classes.container }>
          {/* <Link to="/">
          </Link> */}
                    <a href="http://liqui.network/">  <img className={classes.logo} src={Logo} alt="logo" width="50px" height='50px'/> </a>
                   <a  href="http://liqui.network/" style={{textDecoration: 'none'}}><p className={classes.logoHeading}> liqui.network</p> </a> 

          <Hidden xsDown>
            <div className={classes.links} style={{textAlign: 'center'}}>
            {/* LINKS WILL BE PUT HERE */}
         
          <div className={classes.linkContainer} >
        <Link to="/" style={{textDecoration: 'none'}}>  <Button className={classes.navButton}>Home  </Button> </Link> 
              {/* <Link style={{textDecoration: 'none'}}>  */}
              <Button onClick={scrollToBottom} className={classes.navButton}> Stake </Button> 
              {/* </Link>  */}
            <Button className={classes.navButton} > Trade </Button>
            <Button className={classes.navButton} > Learn </Button>
            <Button className={classes.navButton} > Contract </Button>
            <Button onClick={OnConnect}  className={classes.navButton1} > Connect </Button>


              {/* <div className="app-button">
              <Link to="/BuyerList"> <Button className={classes.navButton} > App </Button></Link>
           </div> */}
           </div>
           {/* <Button className={classes.navButton} style={{color: 'white' , marginLeft: '280px',backgroundColor: 'grey'}}  >  Connect </Button> */}

            </div>
          </Hidden>


          <div className={classes.rightContainer}>

            <Hidden smUp>
              <IconButton
                className={classes.menuButton}
                edge="end"
                aria-label="menu"
                onClick={onMenuClickHandler}
              >
                <MenuIcon />
              </IconButton>
              {/* <p className={classes.menuButton}>sdasd</p> */}

            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
