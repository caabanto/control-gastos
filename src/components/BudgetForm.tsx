import { Button, FormControl, FormLabel, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import { ChangeEvent, useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"


export const BudgetForm = () => {

    const [budget, setBudget] = useState(0)

    const {dispatch} = useBudget()


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBudget(parseInt(e.target.value))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: 'add_budget', payload: {budget}})
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget]) 


    return (
        <Box component='form' className='flex flex-col space-y-4' onSubmit={handleSubmit}>
            <FormControl fullWidth className='space-y-2'>
                <FormLabel 
                    htmlFor='name'
                    className=' text-2xl text-blue-600 font-bold text-center'
                >
                    Definir Presupuesto
                </FormLabel>
                <TextField
                    id="name"
                    type="number"
                    variant="outlined"
                    placeholder='Define tu presupuesto'
                    size="small"
                    name='budget'
                    value={budget}
                    onChange={handleChange}
                />
            </FormControl>
            <Button 
                fullWidth className='font-black' 
                variant='contained' type='submit'
                disabled={isValid}
            >
                Definir Presupuesto
            </Button>

        </Box>
    )
}
