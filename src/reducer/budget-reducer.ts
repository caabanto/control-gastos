export type BudgetAction = 
    | { type: 'add_budget', payload: {budget:number} }


export type BudgetState = {
    budget: number
}

export const initialSate: BudgetState = {
    budget: 0
}

export const budgetReducer = (state: BudgetState = initialSate , action: BudgetAction): BudgetState => {

    if(action.type === 'add_budget') {

        return {
            ...state,
            budget: action.payload.budget
        }
        
    }

    return state
}
