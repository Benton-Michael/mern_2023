import React, { useState } from 'react';

const ShowForm = (props) => {
    const [showList, setShowList] = useState([])
    const [show, setShow] = useState({
        title: '',
        releaseYear: 1920,
        genre: '',
    })

    // We can now use just one change handler
    // with our Show object
    const changeHandler = (e) => {
        // console.log(e.target.value);
        
        // console.log('Name', e.target.name);
        // console.log('Title', e.target.value);
        setShow({ ...show, [e.target.name] : e.target.value });
        // setShow(prevState => ({...prevState, [e.target.name] : e.target.value}))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('This is the new show' + show)
        // This can also be done with a template literal, as below:
        console.log(`This is the new show ${JSON.stringify(show)}`)
        // Here we are using 2-way data binding:
        setShowList([...showList, show])
        setShow({
            title: '',
            releaseYear: 1920,
            genre: ''
        })
    }
    
    return (
    <div className='container-sm' style={{ backgroundColor: '#f2f2f2' }}>
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
            <label htmlFor='title' className='form-label'>Title: </label>
            <input type="text" className="form-control" name="title" onChange={changeHandler} value={show.title}/>
            
            {
                show.title.length > 0 && show.title.length < 3?
                <p className='text-danger'>The title must be 3 or more characters</p> :
                null
            }
            </div>
            <div className='mb-3'>
            <label htmlFor='releaseYear' className='form-label'>Release Year: </label>
            <input type="number" className="form-control"name="releaseYear" onChange={changeHandler} value={show.releaseYear}/>
            {
                show.releaseYear > 0 && show.releaseYear < 1920? 
                <p className='text-danger'>The release year must be 1920 or newer</p> :
                null
            }
            </div>
            <div className='mb-3'>
            <label htmlFor='genre' className='form-label'>Genre: </label>
            <input type="text" className="form-control" name="genre" onChange={changeHandler} value={show.genre}/>
            {
                show.genre.length < 3? 
                <p className='text-danger'>The show genre must be at least 3 characters</p> :
                null
            }
            </div>
            <button type='submit' className='btn btn-primary'>Add show</button>
        </form>
        
    </div>
    );
}

export default ShowForm;