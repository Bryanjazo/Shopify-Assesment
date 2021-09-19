import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './Pictures.css'

export default function Pictures(props) {
  
   console.log(props)

    return (
        <div>
        <h1>{props.camera.full_name}</h1>
         <img className="ImageMars" src={props.img_src} alt={props.id} />
        </div>
    )
}
