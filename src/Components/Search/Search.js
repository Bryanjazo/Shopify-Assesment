import React, {useState} from 'react'
import {getAstrologyPic} from '../../Redux/nasaReducer'
import {useDispatch,useSelector} from 'react-redux'
import SearchCard from './SearchCard'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './Search.css'
import Alert from '@mui/material/Alert';

import { FormControl,InputLabel,Input, FormHelperText} from '@mui/material';


function RedBar() {
    return (
      <Box
        sx={{
          height: 20,
          paddingLeft: 20
        }}
      />
    );
  }
  

function Search() {

    const dipatch = useDispatch()
    const {astrologyPic} = useSelector((state) => state.nasa)
    const [error, setError] = useState(false)
    const [year, setYear] = useState('')
    const [card,setCard] = React.useState(false)
    const [month, setmonth] = useState('')
    const [day, setDay] = useState('')
    const [picture, setPicture] = useState({})
   
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=0gy1oqP1DslGJv9aV7euxFtg7yAt81uoBnUPXrae`)
        .then(resp => resp.json())
        .then(data => {
            if(data.code === 400){
                setPicture(data)
                setError(!error)
            }else{
                setError(false)
                setPicture(data)
            }
        })
        setCard(!card)
    }
    const handleClick = (e) =>{
        e.preventDefault()
        setCard(!card)
    }

    console.log(picture)

    return (
        <div>
            <div >
            {error === true ?<Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{picture.msg}</Alert>
            </Stack> : null}
            <form className="header" onSubmit={handleSubmit}> 
            <RedBar />
            <FormControl >
                <InputLabel htmlFor="my-input">Year</InputLabel>
                <Input value={year} color="secondary" onChange={(e) => setYear(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Month</InputLabel>
                <Input value={month} color="secondary" onChange={(e) => setmonth(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Day</InputLabel>
                <Input type="text" color="secondary" value={day} onChange={(e) => setDay(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormHelperText id="my-helper-text"><b>Please Enter A Year Month And Date For Your Card.</b></FormHelperText>
            <Stack direction="row" spacing={2}>
                {card === false ?<Button type="submit" variant="contained" endIcon={<SearchIcon />}>
                  Search
                    </Button> :
                    <Button type="submit" onClick={handleClick} variant="contained" endIcon={<SearchIcon />}>
                  Search New Date
                    </Button>}
                </Stack>
            </form>
            </div>
            <div>
               
             
                
                {card === true && error === false ? <SearchCard {...picture}/> : null}
            </div>


        </div>
    )
}


export default Search

