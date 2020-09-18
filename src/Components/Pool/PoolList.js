import React from 'react'
import {PoolCards} from './PoolCard'
const PoolList = () => {
    return (
        <div>
                    {list.map((list , lcs)=>(
                <PoolCards id={list.poolId} token={list.lpToken} points={list.allocPoint}
                 lastReward={list.lastRewardBlock} accShare={list.accBaconPerShare} 
                 uri={list.uri} name={lcs.name} />
            ))}
        </div>
    )
}

export default PoolList
