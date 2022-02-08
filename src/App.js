import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharsReg from './match/CharsReg';
import Values from './match/Values';
import Music from './match/Music';
import Sports from './match/Sports';
import CharsRegFinal from './match/CharsRegFinal';
import Notfound from './Notfound';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/get-your-match" exact element={<CharsReg />} />
          <Route path="/desc-your-ideal-match" exact element={<Values />} />
          <Route path="/music" exact element={<Music />} />
          <Route path="/sports" exact element={<Sports />} />
          <Route path="/happy-for-you" exact element={<CharsRegFinal />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;