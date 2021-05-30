import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { OtherPage } from './OtherPage';
import Fib from './Fib';
import Header from './header';

function App() {
  return (
  
  
    <Router>
      <div className='App'>
          <Header/>
        
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={OtherPage} />

      </div>
    </Router>
    
  );
}

export default App;
