import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Links from './Links';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </HashRouter>
  );
}

export default App;