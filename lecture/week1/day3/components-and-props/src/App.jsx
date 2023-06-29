import './App.css';
import Nav from './components/Nav';
import Shows from './components/Shows';

// rafce from JS JSX snippets!
// paste bootstrap cdn into head of index.html

function App() {

  return (
    <div className='App'>
       <Nav />

       <Shows title={'Breaking Bad'} releaseYear={'2008'} />
       <Shows title={'Attack on Titan'} releaseYear={'2013'} />
       <Shows title={'The Office'} releaseYear={'2005'} />
       <Shows title={'GoT'} releaseYear={'2011'} />
      </div>
    
  );
}

export default App;
