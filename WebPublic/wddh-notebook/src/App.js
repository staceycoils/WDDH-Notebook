import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Session from './components/Session';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/session/" element={<Session />} />
            <Route path="/*" element={<Error />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
