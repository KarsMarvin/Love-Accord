import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharsReg from './CharsReg';
import Notfound from './Notfound';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/get-your-match" exact element={<CharsReg />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;