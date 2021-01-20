import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { OtherPage } from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/otherpage'>Other Page</Link>
        <br />
        <div>
          <br />
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
