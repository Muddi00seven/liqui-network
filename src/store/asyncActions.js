import { setupWeb3, setupContract,setupToken, addEthereumAccounts, setResult, web3LoadingError,  } from "./actions";
import Web3 from "web3";
import { LQN_CHEF_CONTRACT_ABI, LQN_CHEF_CONTRACT_ADDRESS  } from '../ABI/LiquiChef';
 import { LQN_COIN_CONTRACT_ABI,LQN_COIN_CONTRACT_ADDRESS  } from "../ABI/liquiCoin";
    import {getPools,lastBlock, currentReward,halvePeriod ,maxSupply,circulatingSupply,blockinADay,lqnBalance } from '../API/viewTransactions';



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
export const loadChef = async(web3,liquiCoinContract,liquiChefCountract,accounts,dispatch) =>{

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

    const blockperDay = await   blockinADay(web3,liquiChefCountract,accounts,dispatch);
    console.log("Reward",blockperDay);
    } 
    
//-- coin 
    if(liquiCoinContract){
        const amount = await  maxSupply(web3,liquiCoinContract,accounts,dispatch);
        console.log("max supply",amount);

        const supply = await  circulatingSupply(web3,liquiCoinContract,accounts,dispatch);
        console.log("circulating supply",supply);
        const balance = await  lqnBalance(web3,liquiCoinContract,accounts,dispatch);
        console.log("LQN Balance",balance);
    }
    }

    export const approve = async(web3,poolContract,spender, amount,accounts,dispatch) =>{

        console.log("before approval",poolContract,amount);
       try{
                  const response = await   poolContract.methods.approve(spender,amount).send({from: accounts[0]});
            console.log("after approval",response);
return
       }catch(error){
        console.log("error in approval",error);
       }


    }

    export const stake = async(web3,liquiChefContract,poolId, amount,accounts,dispatch) =>{

        console.log("before deposit",liquiChefContract,poolId,amount);
       try{
                  const response = await   liquiChefContract.methods.deposit(poolId,amount).send({from: accounts[0]});
            console.log("after deposit",response);
return
       }catch(error){
        console.log("error in approval",error);
       }


    }
    export const claim = async(web3,liquiChefContract,poolId,accounts,dispatch) =>{

        console.log("before claim",liquiChefContract,poolId);
       try{
                  const response = await   liquiChefContract.methods.claim(poolId,0).send({from: accounts[0]});
            console.log("after deposit",response);
return
       }catch(error){
        console.log("error in approval",error);
       }


    }