import React, { useState } from 'react';
import ShowForm from './components/ShowForm';
import DisplayShows from './components/DisplayShows';
import './styles.css';
import './App.css';

function App() {

  const [showList, setShowList] = useState([]);
  

  return (
    
      <div className='App'>
      
      
      {/* Passing the showlist down via props */}
      {/* Note: we can pass functions down */}
      <ShowForm showList={showList} setShowList={setShowList}/>

      <DisplayShows showList={showList} setShowList={setShowList}/>



      </div>
    
  );
}

export default App;