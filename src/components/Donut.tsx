import { Box } from '@mui/material';
import Plot from 'react-plotly.js';

export const Donut = () => {

    const data  = [{
                values: [2, 10],
                labels: ['US', 'China' ],
                marker: {colors: ['#fff', '#1d4ed8']},
                domain: {column: 0},
                hoverinfo: 'label+percent',
                hole: .5,
                type: 'pie'
            }]

    return (
        <Box component='div'>
            <Plot
                data={data as never} 
                layout={

                    {   
                        autosize: true,
                        title: 'Global',
                        annotations: [
                            {
                                font: {
                                    size: 20
                                },
                                showarrow: false,
                                text: 'GHG',
                                xanchor: 'center',
                                yanchor: 'middle',
                            }
                        ],
                        showlegend: false,
                        grid: {rows: 1, columns: 1},
                        margin: {
                            l: 0,
                            r: 0,
                            b: 0,
                            t: 0,
                            pad: 0
                        },
                    }
                }
                config={
                    {
                        displayModeBar: false,                
                    }
                }
                style={{width: '100%', height: '20vh'}}
                useResizeHandler={true}
            />
        </Box>
    )
}
