
import './App.css';import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharsReg from './match/CharsReg';
import Searching from './match/Searching';
import ComponentSwitcher from './components/ComponentSwitcher'
import Values from './match/Values';
import Music from './match/Music';
import Sports from './match/Sports';
import Creativity from './match/Creativity';
import Interests from './match/Interests';
import Social from './match/Social';
import Notfound from './Notfound';
function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" exact element={<ComponentSwitcher />} />
          <Route path="/get-your-match" exact element={<Searching />} />
          <Route path="/xtics" exact element={<CharsReg />} />
          <Route path="/desc-your-ideal-match" exact element={<Values />} />
          <Route path="/music" exact element={<Music />} />
          <Route path="/sports" exact element={<Sports />} />
          <Route path="/creativity" exact element={<Creativity />} />
          <Route path="/interests" exact element={<Interests />} />
          <Route path="/social" exact element={<Social />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;