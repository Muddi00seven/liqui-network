import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

const Item = ({ name, icon, onClickHandler }) => (
  <ListItem button onClick={onClickHandler}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

const RightDrawer = ({ open, onClickHandler }) => {
  const classes = useStyles();
//   const navigate = useNavigate();

  const iconSize = 24;
  const scrollToBottom = () =>
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClick={onClickHandler}
    >
      <List>
      <Link to="/"><Button>Home</Button> </Link>
             <br/>
             <Button onClick={scrollToBottom}>Stake</Button>

           
            <br/>
           <Button>Trade</Button> 

            <br/>
            <Button>Learn</Button>
      
            <br/>
            <Button>Connect</Button>
      {/* <Link to="/" style={{textDecoration: 'none'}}>  <Button>Home  </Button> </Link>
      <br/> 
      <Link style={{textDecoration: 'none'}}> 
              <Button onClick={scrollToBottom}> Stake </Button> 
      </Link> 
      <br/>
            <Button> Trade </Button>
            <br/>
            <Button > Learn </Button>
            <br/>
            <Button > Contract </Button>
            <br/>
            <Button  > Connect </Button>
            <br/> */}
      </List>
    </Drawer>
  );
};

export default RightDrawer;
