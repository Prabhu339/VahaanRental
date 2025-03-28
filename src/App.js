import logo from './logo.svg';
import './App.css';
import 'animate.css'
import Header from './Components/Header';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Home from './Components/Home';
import Start from './Components/Start';
import Routing from './Components/Routing';
import Waste from './Components/Waste';
import Electric from './Components/Electric';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
   <div>
 <Start/> 
<Header/>
<Routing/>
<Footer/>

   </div>
  )
}

export default App;
