import Footer from './components/template/Footer/Footer';
import Header from './components/template/Header/Header';
import Teste from './pages/Teste/Teste';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'

function App() {
  return (
    <>
    <Teste>
    <Router>
        <Routes/>
      </Router>
    <Footer/></Teste>
    </>
  );
}

export default App;
