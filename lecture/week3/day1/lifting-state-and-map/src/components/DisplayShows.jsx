import React, {useState} from 'react';

const DisplayShows = (props) => {

    const { showList } = props;

    return (
        
        <div>
        <h1>📡Here are your favorite Shows!📡</h1>
            {
                showList.map((show, idx) => ( // WE need the key prop here to do the map
                   
                    <div key={idx}>
                    
                        <br />
                        <h2>Title: {show.title}</h2>
                        <h2>Release Year: {show.releaseYear}</h2>
                        <h2>Genre:{show.genre}</h2>

                    </div>
                ))
            }
        </div>
    );
}

export default DisplayShows;