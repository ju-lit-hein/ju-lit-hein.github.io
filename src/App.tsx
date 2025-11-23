import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Links from './Links';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  );
}

export default App;