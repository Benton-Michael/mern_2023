import React, { useState } from 'react';

const FormObject = () => {

    const [show, setShow] = useState({
        title: '',
        releaseYear: 1920,
        genre: '',
    })

    // We can now use just one change handler
    // with out Show object
    const changeHandler = (e) => {
        // console.log(e.target.value);
        
        console.log('Name', e.target.name);
        console.log('Title', e.target.value);
        setShow({ ...show, [e.target.name] : e.target.value });
        // setShow(prevState => ({...prevState, [e.target.name] : e.target.value}))
    }
    
    return (
    <div>
        <form>
            <label>Title: </label>
            <input type="text" name="title" onChange={changeHandler}/>

            <label>Release Year: </label>
            <input type="number" name="releaseYear" onChange={changeHandler}/>

            <label>Genre: </label>
            <input type="text" name="genre" onChange={changeHandler}/>

        </form>
    </div>
    );
}

export default FormObject;