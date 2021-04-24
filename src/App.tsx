import { BrowserRouter as Router, Link } from 'react-router-dom';

import './App.css';
import Routes from './routes'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/sports">Sports</Link></li>
        </ul>
      </nav>
      <Routes />
    </Router>
  );
}

export default App;
