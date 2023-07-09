import React, { useState } from 'react';

const Form = (props) => {
  return (
    <div>
        <form>
            <label>Title: </label>
            <input type="text" name="title"/>

            <label>Release Year: </label>
            <input type="number" name="releaseYear"/>

            <label>Genre: </label>
            <input type="text" name="genre"/>

        </form>
    </div>
  )
}

export default Form;