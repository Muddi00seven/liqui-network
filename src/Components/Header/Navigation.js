import React,{useEffect} from "react";
import Header from "./Header";
import RightDrawer from "./RighDrawer";
import { useStore } from '../../context/GlobalState'
import { loadChef } from '../../store/asyncActions';


const Navigation = () => {
  const [{web3,accounts,web3LoadingErrorMessage,web3Loadded,liquiChefContract,liquiCoinContract},dispatch] = useStore();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  useEffect(()=> {
    console.log("InNavigation",liquiChefContract);
    if(web3 && accounts[0]&&liquiChefContract&&liquiCoinContract){
    console.log("InNavigation");
     loadChef(web3,liquiChefContract,accounts,dispatch);
   }
},[web3,accounts,liquiChefContract,liquiCoinContract,dispatch])
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Header onMenuClickHandler={() => openDrawer()} />
      <RightDrawer open={drawerOpen} onClickHandler={() => closeDrawer()} />
    </>
  );
};

export default Navigation;
 