import React, {useReducer , createContext , useState , useEffect} from 'react';
import GlobalReducer from './GlobalReducer';
// import { loadBlockchain,loadContract } from '../../../store/asyncActions';
// import AppReducer from '../../../store/AppReducer';
// import { ShoesData } from '../Shoes/ShoesData/ShoesData';

const initialState = {
    pools:[],
    cart:[]
} 
    
export const GlobalContext2 = createContext(initialState);


export const GlobalProvider2 = ({ children }) =>{
    
    let [state, dispatch] = useReducer(GlobalReducer, initialState);
    // for ether
    const [watchList, setWatchList] = useState(
        localStorage.getItem("watchList") || [
          "ethereum",
         
        ]
      );
      useEffect(() => {
        localStorage.setItem("watchList", watchList);
      }, [watchList]);
    
    const addItem = (product)=> {
        dispatch({
            type:'ADD_TO_CART',
            payload:product
        })
    }

    const remove = (id)=>{
        dispatch({
            type:'REMOVE',
            payload:id
        })
    }
 
    return(
        <GlobalContext2.Provider value={{
            pools:state.pools,
            cart:state.cart,
            watchList,
            addItem,
            remove,
          
        }}>
            {children}
        </GlobalContext2.Provider>
    )

}