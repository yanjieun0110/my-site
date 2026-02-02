// import logo from './logo.svg';
import './App.css';

import { Routes, Route, NavLink } from 'react-router-dom' 

import Home from './pages/Home';
import About from './pages/About';
import Trends from './pages/Trends';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>VOGUE</h1>
        <nav className="gnb">
          <NavLink className='gnb_list' to='/'>Home</NavLink>
          <NavLink className='gnb_list' to='/about'>About</NavLink>
          <NavLink className='gnb_list' to='/trends'>Trends</NavLink>
          <NavLink className='gnb_list' to='/contact'>Contact</NavLink>
        </nav>
      </header>
      <hr />
      <main className="wrap">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <hr />

      <footer className="footer">
        <h1>VOGUE</h1>
        <ul className='footer_gnb'>
          <li><NavLink to="/" className='f_gnb'>Home</NavLink></li>
          <li><NavLink to="/about" className='f_gnb'>About</NavLink></li>
          <li><NavLink to="/trends" className='f_gnb'>Trends</NavLink></li>
          <li><NavLink to="/contact" className='f_gnb'>Contact</NavLink></li>
        </ul>
        <p>&copy; VOGUE.CO.KR IS OPERATED BY DOOSAN MAGAZINE</p>
      </footer>

    </div>
  );
}

export default App;
