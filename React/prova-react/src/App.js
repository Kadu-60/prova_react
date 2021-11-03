import Footer from './components/template/Footer/Footer';
import Header from './components/template/Header/Header';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'

function App() {
  return (
    <>
    <Header>
    <Router>
        <Routes/>
      </Router>
    <Footer/>
    </Header>
    </>
  );
}

export default App;
