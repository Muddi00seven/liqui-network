export default (state, action) => {
    switch(action.type) {
      
              case 'SET_Pools':
          return {
            ...state,
            pools: action.payload
          }
        case 'SET_RESULT':
          return {
            ...state,
            result: action.payload
          }

          case 'SET_REWARD':
            return {
              ...state,
              currentReward: action.payload
            }
            case 'SET_PENDING_REWARD':
            return {
              ...state,
              pendingLqns: action.payload
            }
            case 'SET_LAST_BLOCK':
            return {
              ...state,
              lastBlock: action.payload
            }
            case 'SET_HALVE_PERIOD':
              return {
                ...state,
                halvePeriod: action.payload
              }
        
              case 'SET_MAX_SUPPLY':
                return {
                  ...state,
                  maxSupply: action.payload
                }
                case 'SET_CIRCULATING_SUPPLY':
                return {
                  ...state,
                    circulatingSupply:action.payload
                }
                case 'SET_BLOCK_IN_DAY':
                return {
                  ...state,
                  blockInADay:action.payload
                }
                case 'SET_LQN_BALANCE':
                  return {
                    ...state,
                      liqnBalance:action.payload
                  }
      case 'SETUP_WEB3':
        return {
          ...state,
          web3: action.payload,
          web3LoadingErrorMessage: "",
          web3Loadded: true
        }
      case 'SETUP_CONTRACT':
        return {
          ...state,
          liquiChefContract: action.payload
        }
        case 'SETUP_TOKEN':
        return {
          ...state,
          liquiCoinContract: action.payload
        }
        case 'SET_TOKEN_BALANCE':
        return {
          ...state,
          liqnBalance: action.payload
        }
      case 'ADD_ETHEREUM_ACCOUNTS':
        return {
          ...state,
          accounts: action.payload
        }
      case 'WEB3_LOADING_ERROR':
        return {
          ...state,
          web3LoadingErrorMessage: action.errorMessage,
          web3Loadded: false
        }
      default:
        return state;
    }
    
  }