import React from 'react'

const Shows = (props) => {
    // console.log(props.title);
  return (
    // Bootstrap styling added for demonstration purposes
    <div className='bg-secondary text-light'>
        <h2>Title: {props.title}</h2>
        <h3>Released In: {props.releaseYear}</h3>
    </div>
  )
}

export default Shows;