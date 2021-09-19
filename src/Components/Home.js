import React, {useEffect} from 'react'
import {getMarsRoverDetails} from '../Redux/nasaReducer'
import {useDispatch,useSelector} from 'react-redux'
import Pictures from './Pictures'

export default function Home() {
    const {nasaDetails} = useSelector((state) => state.nasa)
    const dispatch = useDispatch()
    useEffect(() => {    
       dispatch(getMarsRoverDetails())
    },[dispatch])

    
    let pictures = nasaDetails.map(details => details.photos.map(details => <Pictures {...details}/>))
    
    

    return (
        <div>
        {/* Navbar */}
        {pictures}
        </div>
    )
}
