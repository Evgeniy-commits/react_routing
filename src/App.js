import './App.css';
import Header from './components/Header';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li>  <NavLink to="/">          Home      </NavLink>  </li>
          <li>  <NavLink to="/about">     About     </NavLink>  </li>
          <li>  <NavLink to="/articles">  Articles  </NavLink>  </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/'         element={ <Home /> }      />
        <Route path='/about'    element={ <About /> }     />
        <Route path='/articles' element={ <Articles /> }  />
      </Routes>
    </div>
  );
}

export default App;
