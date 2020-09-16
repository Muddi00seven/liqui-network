
import { setPools } from "../store/actions";



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

