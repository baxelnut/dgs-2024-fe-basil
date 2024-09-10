import './App.css';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div className="app-container">
      <div className="nav-container">
        <Navbar />
        <Sidebar />
      </div>
      <Heading />
      <Wallet />
    </div>
  );
}

export default App;
