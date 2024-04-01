import { Box, Paper, Toolbar } from "@mui/material"
import AppBar from "@mui/material/AppBar/AppBar"
import { BudgetForm, BudgetTracker } from "./components"
import { useBudget } from "./hooks/useBudget"
import { useMemo } from "react"


export const App = () => {
    
    const { state } = useBudget()

    const isValidBudget = useMemo(() => state.budget > 0, [state.budget])
    
    return (
        <>
            <AppBar position="static" className='bg-blue-600'>
                <Toolbar disableGutters>
                    <Box component='div' className='w-2/4 mx-auto'>
                        <h1 className='uppercase text-center font-black text-2xl text-white'>
                            Planificador de Gastos
                        </h1>
                    </Box>
                </Toolbar>
            </AppBar>
            
                <Box component='div' className='max-w-3xl mx-auto mt-10'>
                    <Paper className='p-10'>
                        { isValidBudget ? (<BudgetTracker/>) : (<BudgetForm />) }
                    </Paper>
                </Box>
            
        </>
    )
}