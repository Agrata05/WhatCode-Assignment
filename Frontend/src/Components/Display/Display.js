import React from 'react'
import './Display.css'
import loaderIMG from '../../Assets/images/loader.svg'
const Display = (props) => {
  let loader = props.loading
  let data = props.data

  if(loader){
    return (
      <div className='Display-Container'>
        <img src={loaderIMG} alt='loader' />
      </div>
    )
  }

  if(data){
    return (
      <div className='Display-Container'>
        <div className='Display-Name'>{data.name}</div>
        <div>
        <div style={{margin:"10px"}}><strong>Open Price:</strong> {data.open} USD</div>
        <div style={{margin:"10px"}}><strong>Previous Close Price:</strong> {data.previousClose} USD</div>
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