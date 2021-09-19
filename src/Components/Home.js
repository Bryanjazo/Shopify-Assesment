import React, {useEffect} from 'react'
import {getMarsRoverDetails} from '../Redux/nasaReducer'
import {useDispatch,useSelector} from 'react-redux'

export default function Home() {

    const dispatch = useDispatch()
    const {nasaDetails} = useSelector((state) => state.nasa)
    useEffect(() => {    
       dispatch(getMarsRoverDetails())
    },[dispatch])

    console.log(nasaDetails)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
