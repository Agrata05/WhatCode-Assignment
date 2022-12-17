import React from 'react'
import './Display.css'
import loaderIMG from '../../Assets/images/loader.svg'
const Display = (props) => {
  let loader = props.loading
  let data = props.data

  console.log("here in display")
  console.log(props)
  if(loader){
    console.log("loader")
    return (
      <div className='Display-Container'>
        <img src={loaderIMG} alt='loader' />
      </div>
    )
  }

  if(data){
    return (
      <div className='Display-Container'>
        <div>
        <div>Open Price: {data.open}</div>
        <div>Previous Close Price: {data.previousClose}</div>
        </div>
      </div>
    )
  }
  
  return (
    <div className='Display-Container'>
      <div>No Values to show</div>
    </div>
  )
}

export default Display;