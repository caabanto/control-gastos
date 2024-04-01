import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { BudgetAction, BudgetState, budgetReducer, initialSate } from "../reducer/budget-reducer"
import { FC } from "react"

type Props = {
    children: ReactNode
}

type BudgetContextType = {
    state: BudgetState,
    dispatch: Dispatch<BudgetAction>
}


export const BudgetContext = createContext<BudgetContextType>({} as BudgetContextType)

export const BudgetProvider: FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(budgetReducer, initialSate)

    return (
        <BudgetContext.Provider value={{state, dispatch}}>
            {children}
        </BudgetContext.Provider>
    )
}

