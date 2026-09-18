import Home from './Home';
import Admin from './components/Admin';

function App() {
  if (window.location.pathname === '/admin' || window.location.pathname === '/admin/') {
    return <Admin />;
  }

  return (
    <Home />
  );
}

export default App;