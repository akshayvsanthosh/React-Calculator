import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Cal() {

    const contentDisplay = (content) =>{
        calculSreen.value+=content
    }

    const clearDisplay = () => {
        calculSreen.value=""
        calculSreen.placeholder="0"
    }

    const delDisplay = () => {
        calculSreen.value=calculSreen.value.slice(0,-1)
    }

    const resultDisplay = () =>{
        try {
            calculSreen.value=eval(calculSreen.value)        
        } catch{
            calculSreen.value=''
            calculSreen.placeholder="Invalid expression!!"
        }
    }

    return (
        <div className='containerDiv d-flex justify-content-center align-items-center'>
            <div className='calculator'>
                <Grid container spacing={2} className="w-100" sx={{ height: "100%" }}>
                    <Grid xs={12} className=' d-flex justify-content-center'>
                        <input id='calculSreen' type="text" className='calScreen' placeholder='0'/>
                    </Grid>
                    <Grid className="gridDiv" xs={12} sx={{ paddingLeft: "35px", paddingRight: "33px", paddingTop:"13px" }}>

                        <Stack className='firstStack' direction="row" spacing={2} sx={{ height: "100%", paddingLeft: "74px"}}>
                            <Button className='symblBttn rounded-circle d-none ' variant="contained"></Button>
                            <Button onClick={clearDisplay} className='symblBttn rounded-circle ' variant="contained">AC</Button>
                            <Button onClick={delDisplay} className='symblBttn rounded-circle clrBttn' variant="contained">Del</Button>
                            <Button onClick={()=>contentDisplay("/")} className='symblBttn rounded-circle ' variant="contained"><i class="fa-solid fa-divide"></i></Button>
                        </Stack>

                    </Grid>
                    <Grid className="gridDiv" xs={12} sx={{ paddingLeft: "35px", paddingRight: "33px", }}>
                        <Stack direction="row" spacing={2} sx={{ height: "100%" }}>
                            <Button onClick={()=>contentDisplay("7")} className='symblBttn rounded-circle nrmlBttn' variant="contained">7</Button>
                            <Button onClick={()=>contentDisplay("8")} className='symblBttn rounded-circle nrmlBttn' variant="contained">8</Button>
                            <Button onClick={()=>contentDisplay("9")} className='symblBttn rounded-circle nrmlBttn' variant="contained">9</Button>
                            <Button  onClick={()=>contentDisplay("*")} className='symblBttn rounded-circle ' variant="contained"><i class="fa-solid fa-xmark"></i></Button>
                        </Stack>
                    </Grid>
                    <Grid className="gridDiv" xs={12} sx={{ paddingLeft: "35px", paddingRight: "33px", }}>
                        <Stack direction="row" spacing={2} sx={{ height: "100%" }}>
                            <Button onClick={()=>contentDisplay("4")} className='symblBttn rounded-circle nrmlBttn' variant="contained">4</Button>
                            <Button onClick={()=>contentDisplay("5")} className='symblBttn rounded-circle nrmlBttn' variant="contained">5</Button>
                            <Button onClick={()=>contentDisplay("6")} className='symblBttn rounded-circle nrmlBttn' variant="contained">6</Button>
                            <Button onClick={()=>contentDisplay("-")} className='symblBttn rounded-circle ' variant="contained">-</Button>
                        </Stack>
                    </Grid>
                    <Grid className="gridDiv" xs={12} sx={{ paddingLeft: "35px", paddingRight: "33px", }}>
                        <Stack direction="row" spacing={2} sx={{ height: "100%" }}>
                            <Button onClick={()=>contentDisplay("1")} className='symblBttn rounded-circle nrmlBttn' variant="contained">1</Button>
                            <Button onClick={()=>contentDisplay("2")} className='symblBttn rounded-circle nrmlBttn' variant="contained">2</Button>
                            <Button onClick={()=>contentDisplay("3")} className='symblBttn rounded-circle nrmlBttn' variant="contained">3</Button>
                            <Button onClick={()=>contentDisplay("+")} className='symblBttn rounded-circle ' variant="contained">+</Button>
                        </Stack>
                    </Grid>
                    <Grid className="gridDiv" xs={12} sx={{ paddingLeft: "35px", paddingRight: "33px", }}>
                        <Stack direction="row" spacing={2} sx={{ height: "100%" }}>
                            <Button onClick={()=>contentDisplay("00")} className='symblBttn rounded-circle nrmlBttn' variant="contained">00</Button>
                            <Button onClick={()=>contentDisplay("0")} className='symblBttn rounded-circle nrmlBttn' variant="contained">0</Button>
                            <Button onClick={()=>contentDisplay(".")} className='symblBttn rounded-circle nrmlBttn' variant="contained">.</Button>
                            <Button onClick={resultDisplay} className='symblBttn rounded-circle eqlBttn' variant="contained">=</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Cal
