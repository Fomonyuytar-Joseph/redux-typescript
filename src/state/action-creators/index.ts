import { ActionType } from "../action-type"


export const DepositMoney=(amount:number)=>{

    return (dispatch)=>{

        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })

    }

    
}