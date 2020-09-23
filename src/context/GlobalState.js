import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { loadBlockchain,loadContract } from '../store/asyncActions';
import AppReducer from '../store/AppReducer';





// Initial state
const initialState = {
 
  web3: null,
  accounts: [],
  liquiChefContract: null,
  liquiCoinContract: null,
  pools:[],
  totalPools: 0,
   lastBlock:0,
   currentReward:0,
   pendingLqns:0,
   halvePeriod:0,
    blockInADay:0,
  maxSupply:0,
  circulatingSupply:0,
  lqnBalance:0,

  

  

}

// Create context.
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(()=> {
        loadBlockchain(dispatch);
        console.log("Loaded BC")
    },[])


    return (<GlobalContext.Provider value={[state,dispatch]}>
        {children}
    </GlobalContext.Provider>);
}

export const useStore = () => useContext(GlobalContext);