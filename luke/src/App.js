
import './App.css';
import Forms from './components/Forms';
import People from './components/People';
import {Routes, Route} from 'react-router-dom'
import Planet from './components/Planet';



function App() {
  return (
    <div className="App">
      <Forms/>
      <Routes>
        <Route path='/people/:starId' element={<People/>}/>
        <Route path='/planets/:starId' element={<Planet/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;

