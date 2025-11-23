import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Links from './Links';


function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/ju-lit-hein.github.io/'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;