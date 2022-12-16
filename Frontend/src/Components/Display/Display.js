import React from 'react'
import './Display.css'

const Display = (props) => {
  let data = props.data

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