import { setupWeb3, setupContract,setupToken, addEthereumAccounts, setResult, web3LoadingError,  } from "./actions";
import Web3 from "web3";
import { LQN_CHEF_CONTRACT_ABI, LQN_CHEF_CONTRACT_ADDRESS  } from '../ABI/LiquiChef';
 import { LQN_COIN_CONTRACT_ABI,LQN_COIN_CONTRACT_ADDRESS  } from "../ABI/liquiCoin";
 import {getPools,lastBlock, currentReward,halvePeriod  } from '../API/viewTransactions';



export const loadBlockchain = async(dispatch) =>{
    try {
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(LQN_CHEF_CONTRACT_ABI, LQN_CHEF_CONTRACT_ADDRESS);
                               
            dispatch(setupContract(contract));

            const token = new web3.eth.Contract(LQN_COIN_CONTRACT_ABI, LQN_COIN_CONTRACT_ADDRESS);
                               
            dispatch(setupToken(token));
           
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            console.log("contract = ",contract);
            console.log("contract.methods = ",contract.methods);
            
         
           
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            
            dispatch(web3LoadingError(error.message));
        }
    }
}
export const loadChef = async(web3,liquiChefCountract,accounts,dispatch) =>{

    console.log("IN LOADING liquibChef",liquiChefCountract);
    
   
        const pools = await   getPools(liquiChefCountract,accounts,dispatch);
    console.log("pools",pools);
 
    if(liquiChefCountract){
    const block = await   lastBlock(web3,liquiChefCountract,accounts,dispatch);
    console.log("halving",block);
 

  const period = await   halvePeriod(web3,liquiChefCountract,accounts,dispatch);
    console.log("Reward",period);

    const reward = await   currentReward(web3,liquiChefCountract,accounts,dispatch);
    console.log("Reward",reward);
    } 
    }

export const setNumber= async(contract, accounts,number)=>{
    console.log("before setting Number",number);
 
   const receipt =  await contract.methods.setNumber(number).send({from : accounts[0]});
   console.log("after  setting number ", receipt);
  

}
export const viewBoth = async(contract, accounts, dispatch)=>{
    console.log("before virewing",contract.methods, accounts, dispatch);

   const receipt =  await contract.methods.getBoth().call({from : accounts[0]});
   console.log("after  viewing  ", receipt);
   dispatch(setResult(receipt));

}



