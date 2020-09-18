// Actions to be usedwith Reducers
export const setTokenBalance = (amount)=> {
    return {
        type: 'SET_TOKEN_BALANCE',
        payload: amount
    };
}



export const setPools = (pools)=> {
    return {
        type: 'SET_Pools',
        payload: pools
    };
}
   
export const setLastBlock = (block)=> {
    return {
        type: 'SET_LAST_BLOCK',
        payload: block
    };
}
export const setReward = (reward)=> {
    return {
        type: 'SET_REWARD',
        payload: reward
    };
}
export const setHalvePeriod = (period)=> {
    return {
        type: 'SET_HALVE_PERIOD',
        payload: period
    };
}

export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
}

export const setupContract = (contract) => {
    return {
        type: 'SETUP_CONTRACT',
        payload: contract
    };
}

export const setupToken = (tokenContract) => {
    return {
        type: 'SETUP_TOKEN',
        payload: tokenContract
    };
}
export const setResult = (arg) => {
    return {
        type: 'SET_RESULT',
        result: arg
    };
}
export const addEthereumAccounts = (accounts) => {
    return {
        type: 'ADD_ETHEREUM_ACCOUNTS',
        payload: accounts
    };
}

export const web3LoadingError = (errorMessage) => {
    return {
        type: 'WEB3_LOADING_ERROR',
        errorMessage: errorMessage
    };
}