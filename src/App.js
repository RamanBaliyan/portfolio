import logo from './logo.svg';
import './App.css';
import {NavBar} from "./MyComponents/NavBar";
import {Banner} from "./MyComponents/Banner";
import {Skills} from "./MyComponents/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner/>
     <Skills/>
     </div>
  );
}

export default App;
