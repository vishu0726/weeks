import './App.css';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Week from './Component/Week/Week';
import Timezone from './Component/Timezone/Timezone';
import Workingdays from './Component/WorkingDays/Workingdays';
import moment from 'moment';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className='heading'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
            <Link to={'/weeks'}><h2>Weeks</h2></Link>
            <Link to={'/timezone'}><h2>Timezone</h2></Link>
            <Link to={'/workingdays'}><h2>Working days</h2></Link>
            <hr/>
          <Routes>
            <Route path='/weeks' element={<Week/>}/>
            <Route path='/timezone' element={<Timezone/>}/>
            <Route path='/workingdays' element={<Workingdays/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
