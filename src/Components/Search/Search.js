import React, {useState} from 'react'
import {getAstrologyPic} from '../../Redux/nasaReducer'
import {useDispatch,useSelector} from 'react-redux'
import SearchCard from './SearchCard'

function Search() {

    const dipatch = useDispatch()
    const {astrologyPic} = useSelector((state) => state.nasa)
    const [year, setYear] = useState('')
    const [card,setCard] = React.useState(false)
    const [month, setmonth] = useState('')
    const [day, setDay] = useState('')
    const [picture, setPicture] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=0gy1oqP1DslGJv9aV7euxFtg7yAt81uoBnUPXrae`)
        .then(resp => resp.json())
        .then(data => setPicture(data))
        setCard(!card)
    }

    console.log(picture)

    return (
        <div>
            <div className="header">
            <h1>Search By Date To See How The Universe Looked.</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}> 
                <label for="year">Year</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)}></input><br></br>

                <label for="year">Month</label>
                <input type="text" value={month} onChange={(e) => setmonth(e.target.value)}></input><br></br>

                <label for="year">Day</label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)}></input>
                <button type="submit">Search</button>
                </form>
                {card === true ? <SearchCard {...picture}/> : ''}
            </div>


        </div>
    )
}


export default Search

