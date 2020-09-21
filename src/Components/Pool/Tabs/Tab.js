import React, {useContext } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { GlobalContext2 } from "../GlobalContext/GlobalContext";

import './Tab.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs({value1,i}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleApprove = async() => {
    console.log("in Approve");
  };


  const {cart } = useContext(GlobalContext2)

      // this is value of pool object
  const Addstake =  () => {
    console.log('this is' + value1.uri )
  }
  

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs
        className="tab-header"
          variant="fullWidth"
          value={value}
          textColor="primary"
          onChange={handleChange}
          // aria-label="nav tabs example"
          indicatorColor="primary"
          centered

        >
          <LinkTab className="tabs" label="STAKE" href="/drafts" {...a11yProps(0)} />
          <LinkTab className="tabs" label="UNSTAKE" href="/trash" {...a11yProps(1)} />
          {/* <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
        <div className="tab-value-container">
          <div className="column1">
            <p className="tab-number">{value1.uri}</p>
            <TextField id="standard-basic" className="tab-number2"  />

            {/* <p className="tab-number2">0</p> */}
          </div>
          <div className="column2">
            <p className="tab-text">Balance: 0.0000 UNI </p>
            <p className="tab-text2">UNI</p>
          </div>
        </div>

        <div className="tab-button-container">
          <button  onClick={Addstake} className="stake-button">Stake</button>
          <button className="liquidity-button"onClick={handleApprove}>Approve</button>
        </div>

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
        <div className="tab-value-container2">
          <div className="unstake-column2">
            <p className="tab2-number">Input</p>
              {/* <p ></p> */}
            <TextField id="standard-basic" className="tab2-number2"  />

          </div>
          <div className="unstake-column3">
            <p className="tab2-text">Staked: 0.0000 ULU </p>
            <p className="tab2-text2">ULU</p>
          </div>
        </div>

        <div className="tab-button-container2">
          <button className="unstake-button">Unstake</button>
          <button className="liquidity-button2">Claim + Unstake All</button>
        </div>

        </div>


      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Page Three
      </TabPanel> */}
    </div>
  );
}
