import { Box, Button } from "@mui/material"
import { pink } from "@mui/material/colors"
import { Donut } from "./Donut"


export const BudgetTracker = () => {

    return (
        <Box component='div' className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Box component='div'>
                <Donut />
            </Box>
            <Box component='div' className='flex flex-col justify-center items-center gap-4'>
                <Button variant='contained' sx={{backgroundColor: pink[600]}} className='hover:bg-pink-500'>
                    Reset App
                </Button>

            </Box>
            
        </Box>
    )
}
