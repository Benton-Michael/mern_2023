import React, { useState } from 'react';

const FormObject = () => {

    


    const [show, setShow] = useState({
        title: '',
        releaseYear: 1920,
        genre: '',
    })

    // We can now use just one change handler
    // with our Show object
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
            
            {
                show.title.length < 3?
                <p>The title must be at least 3 characters</p> :
                null
            }

            <label>Release Year: </label>
            <input type="number" name="releaseYear" onChange={changeHandler}/>
            {
                show.releaseYear < 1920? 
                <p>The release year must be 1920 or newer</p> :
                null
            }

            <label>Genre: </label>
            <input type="text" name="genre" onChange={changeHandler}/>
            {
                show.genre.length < 3? 
                <p>The show genre must be at least 3 characters</p> :
                null
            }

        </form>
        <button className=''>Add show</button>
    </div>
    );
}

export default FormObject;