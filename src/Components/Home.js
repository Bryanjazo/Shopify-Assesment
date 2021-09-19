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

    
    let pictures = nasaDetails.map(details => details.photos.slice(0,100).map(marsDetails => <Pictures {...marsDetails}/>))
 

    console.log(pictures)
    

    return (
        <div>
        {/* Navbar */}
        {pictures}
        </div>
    )
}
