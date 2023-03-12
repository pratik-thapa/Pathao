import logo from './logo.svg';
import './App.css';
import './style.scss'
import './responsive.scss'
import Nav from './Components/Nav'
import Banner from './Components/Banner';
import Earn from './Components/Earn';
import Top from './Components/Top'
import Download from './Components/Download';
import Rider from './Components/Rider';
import Headlines from './Components/Headlines';

function App() {
  return (
    <>
    <Nav/>
    <Banner/>
    <Top/>
    <Earn/> 
    <Download/>
    <Rider/>
    <Headlines/>
    </>
  );
}

export default App;
