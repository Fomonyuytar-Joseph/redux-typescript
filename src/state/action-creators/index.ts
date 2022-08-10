import { ActionType } from "../action-type"
import { Dispatch } from "react"
import { Action } from "../actions"


export const depositMoney=(amount:number)=>{

    return (dispatch:Dispatch<Action>)=>{

        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })

    }

    
}

export const withdrawMoney=(amount:number)=>{

    return (dispatch:Dispatch<Action>)=>{

        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })

    }

    
}

export const bankrupt=(amount:number)=>{

    return (dispatch:Dispatch<Action>)=>{

        dispatch({
            type:ActionType.BANKRUPT
          
        })

    }

    
}
