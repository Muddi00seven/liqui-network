
import { setPools,setLastBlock,setReward,setHalvePeriod,setMaxSupply,setCirculatingSupply,setBlockinADay,setLqnBalance, setPendingReward } from "../store/actions";



export const  getPools = async(liquiChefContract, account,dispatch)=>{

  console.log("before fetching total pools",liquiChefContract,account);

const totalPools =  await totalpools(liquiChefContract, account,dispatch);

let pools=[];
for (var i=0; i<totalPools;i++){

let poolInfo= await viewPoolsbyId(liquiChefContract, account,i);
console.log("Pools by Id",liquiChefContract,i);
let orpools=[];
pools.push(poolInfo);
}
 dispatch(setPools(pools));
 console.log("After fetching total pools",pools);
return pools;
}

export const  totalpools = async(liquiChefContract,accounts,dispatch )=>{

  console.log("before fetching total pools",liquiChefContract,accounts);
  const totalPools =  await liquiChefContract.methods.poolLength().call({from: accounts[0]});
console.log("After total pools",totalPools);
// dispatch
return totalPools;
}

export const  viewPoolsbyId = async(liquiChefContract,accounts,_pid)=>{

const pending = await getPendingLqns(liquiChefContract,_pid,accounts);
    const response =  await liquiChefContract.methods.poolInfo(_pid).call({from: accounts[0]});
console.log("POOL Details",response);
let poolInfo={
  poolId:_pid,
    lpToken:response[0],
    allocPoint :response[1], 
    lastRewardBlock:response[2], 
    accBaconPerShare:response[3],
    uri: response[4]

}
return poolInfo;
}


export const  lastBlock = async(web3,liquiChefContract,accounts,dispatch)=>{

  console.log("last halved block",liquiChefContract);
  const lastblock =  await liquiChefContract.methods.lastHalveBlock().call({from: accounts[0]});

console.log("last halved block",lastblock);
const block= await web3.eth.getBlock(lastblock);
let timestamp= block.timestamp;
let time= parseInt(timestamp);
let date = new Date(time*1000);
console.log("time",date);
dispatch(setLastBlock(timestamp));
return lastblock;
}
export const  currentReward = async(web3,liquiChefContract,accounts,dispatch)=>{

  console.log("before Reweard",liquiChefContract);
  const response =  await liquiChefContract.methods.lqnPerBlock().call({from: accounts[0]});

console.log("after Reward",response);
let reward = web3.utils.fromWei(response,'ether');
dispatch(setReward(reward));

return reward;
}

export const  halvePeriod = async(web3,liquiChefContract,accounts,dispatch)=>{

  console.log("before callingalve period h",liquiChefContract);
  const period =  await liquiChefContract.methods.halvePeriod().call({from: accounts[0]});

console.log("after alve period",period);

dispatch(setHalvePeriod(period));

return period;
}
export const  blockinADay = async(web3,liquiChefContract,accounts,dispatch)=>{

  console.log("before calling block in day",liquiChefContract);
  const blocks =  await liquiChefContract.methods.blockInADay().call({from: accounts[0]});

console.log("after block in a day",blocks);

dispatch(setBlockinADay(blocks));

return blocks;
}

export const  getPendingLqns = async(liquiChefContract,pId,accounts)=>{

  console.log("before calling pending Lqns",liquiChefContract);
  const rewards =  await liquiChefContract.methods.pendingLqns(pId,accounts[0]).call({from: accounts[0]});

console.log("after calling Pending reward",rewards);

//dispatch(setPendingReward(rewards));

return rewards;
}
//----- LQN coin  view functions
export const  maxSupply = async(web3,liquiCoinContract,accounts,dispatch)=>{

  console.log("before max suply",liquiCoinContract);
  const amount =  await liquiCoinContract.methods.maxSupply().call({from: accounts[0]});

  let coin=web3.utils.fromWei(amount,'ether')
console.log("after max supply",coin);

dispatch(setMaxSupply(coin));

return coin;
}

export const  circulatingSupply = async(web3,liquiCoinContract,accounts,dispatch)=>{

  console.log("before max suply",liquiCoinContract);
  const amount =  await liquiCoinContract.methods.totalSupply().call({from: accounts[0]});

  let coin=web3.utils.fromWei(amount,'ether')
console.log("after max supply",coin);

dispatch(setCirculatingSupply(coin));

return coin;
}
export const  lqnBalance = async(web3,liquiCoinContract,accounts,dispatch)=>{

  console.log("before lqnBalance",liquiCoinContract);
  const amount =  await liquiCoinContract.methods.balanceOf(accounts[0]).call({from: accounts[0]});

  let coin=web3.utils.fromWei(amount,'ether')
console.log("after lqn balancey",coin);

dispatch(setLqnBalance(coin));

return coin;
}