import React from 'react'
import "./Title.css"



function Title(props) {
  return (
    <div className='title'> 
      <h1>{props.bigtitle}</h1>
      <p>{props.smalltitle}</p>
    </div>
  )
}

export default Title
