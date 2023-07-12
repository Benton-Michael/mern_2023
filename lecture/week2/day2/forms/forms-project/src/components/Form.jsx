import React, { useState } from 'react';

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [releaseYear, setReleaseYear] = useState(1920)
    const [genre, setGenre] = useState('')

    const handleTitle = (event) => {
        console.log(event);
    }
  return (
    <div>
        <form>
            <label>Title: </label>
            <input type="text" name="title" onChange={handleTitle}/>

            <label>Release Year: </label>
            <input type="number" name="releaseYear"/>

            <label>Genre: </label>
            <input type="text" name="genre"/>

        </form>
    </div>
  )
}

export default Form;