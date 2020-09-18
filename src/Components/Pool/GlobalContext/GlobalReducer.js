export default (state, action)=>{

    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[action.payload.product , ...state.cart],
                
            }
        
        case 'REMOVE':   
            return{ 
                ...state,
                   cart: state.cart.filter((e)=>e.id !== action.payload),
                    
            }
      
            default:return state
    }
    
}