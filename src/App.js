
import './App.css';import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentSwitcher from './components/ComponentSwitcher'
import MatchFinder from './components/MatchFinder'
import Results from './components/Results'
import Notfound from './Notfound'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" exact element={<ComponentSwitcher />} />
          <Route path="/desc-your-match" exact element={<MatchFinder />} />
          <Route path="/results" exact element={<Results />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;