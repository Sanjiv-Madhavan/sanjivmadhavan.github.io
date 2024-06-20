import React from 'react'
import { hourglass } from 'ldrs'



export default function Preloader(props) {

  hourglass.register()
  return (
       props.load ? <l-hourglass
       id = "preloader"
       size="40"
       bg-opacity="0.1"
       speed="1.75" 
       color="black" 
     ></l-hourglass> : <div></div>
  )
}
