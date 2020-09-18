import React, {useContext } from 'react'
import PoolCards from './PoolCard'
import { GlobalContext2 } from "./GlobalContext/GlobalContext";

const PoolList = () => {
    const {plus,minus,remove , cart } = useContext(GlobalContext2)
    const value = cart;
    const {id} = value
 
    return (
        <div>
                    {cart.map((value, i)=>(
                <PoolCards id={value.poolId} token={value.lpToken} points={value.allocPoint}
                 lastReward={value.lastRewardBlock} accShare={value.accBaconPerShare} 
                 uri={value.uri} value={value} />
            ))}
        </div>
    )
}

export default PoolList
