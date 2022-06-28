import './App.css';
import About from './About';
import Home from './Home';
import {Route} from 'wouter'

function App() {
  return (
    <div className="App">
      <Route component={Home} path="/" />
      <Route component={About} path="/about" />
    </div>
  );
}

export default App;
