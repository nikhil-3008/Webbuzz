import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/Herosection';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <TeamSection/>
    </div>
  );
}

export default App;
