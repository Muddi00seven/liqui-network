
import { setPools,setLastBlock,setReward,setHalvePeriod,setMaxSupply } from "../store/actions";



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
  const response =  await liquiChefContract.methods.lastHalveBlock().call({from: accounts[0]});

console.log("last halved block",response);
// const block= await web3.eth.getBlock(response);
// let timestamp= block.timestamp;
// console.log("last halved block time",timestamp);
// let time= new Date(parseInt(timestamp));
// let time1= new Date(parseInt(1490045811));

// console.log("Time",time,"time2",time1);
// dispatch(setLastBlock(time));
return response;
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
//----- LQN coin  view functions
export const  maxSupply = async(web3,liquiCoinContract,accounts,dispatch)=>{

  console.log("before max suply",liquiCoinContract);
  const amount =  await liquiCoinContract.methods.maxSupply().call({from: accounts[0]});

  let coin=web3.utils.fromWei(amount,'ether')
console.log("after max supply",coin);

dispatch(setMaxSupply(coin));

return coin;
}