import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';


function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home}/>
       <Route path="/About" component={About}/>
       <Route path="/Services" component={Services}/>
     </Switch>
 
   </Router>
  );
}

export default App;
