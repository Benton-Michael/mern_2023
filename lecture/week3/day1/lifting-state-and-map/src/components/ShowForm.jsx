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
    <div className='container-sm' style={{ backgroundColor: '#f2f2f2' }}>
        <form>
            <div className='mb-3'>
            <label className='form-label'>Title: </label>
            <input type="text" className="form-control" name="title" onChange={changeHandler}/>
            
            {
                show.title.length < 3?
                <p className='text-danger'>The title must be at least 3 characters</p> :
                null
            }
            </div>
            <div className='mb-3'>
            <label className='form-label'>Release Year: </label>
            <input type="number" className="form-control"name="releaseYear" onChange={changeHandler}/>
            {
                show.releaseYear < 1920? 
                <p className='text-danger'>The release year must be 1920 or newer</p> :
                null
            }
            </div>
            <div className='mb-3'>
            <label htmlFor='genre' className='form-label'>Genre: </label>
            <input type="text" className="form-control" name="genre" onChange={changeHandler}/>
            {
                show.genre.length < 3? 
                <p className='text-danger'>The show genre must be at least 3 characters</p> :
                null
            }
            </div>
        </form>
        <button className='btn btn-primary'>Add show</button>
    </div>
    );
}

export default FormObject;