import React, {useContext } from 'react'
import SimpleTabs from './Tab'
import { GlobalContext2 } from "../GlobalContext/GlobalContext";

const TabList = () => {
    const {plus,minus,remove , cart } = useContext(GlobalContext2)
    const value = cart;
    const {id} = value
 
    return (
        <div>
                    {cart.map((value, i)=>(
                <SimpleTabs id={value.poolId} token={value.lpToken} points={value.allocPoint}
                 lastReward={value.lastRewardBlock} accShare={value.accBaconPerShare} 
                 uri={value.uri} value1={value} />
            ))}
        </div>
    )
}

export default TabList
