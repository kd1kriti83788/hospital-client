import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Navbar from'./components/Navbar';
import Homepage from'./components/HomePage';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState("Home");
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "Home" && (<Homepage page={page}/>)}
      {page === "DoctorsLogin" && (<Homepage  page={page}/>)}
      {(page !== "Home" && page !=="DoctorsLogin") && (<div>This is {page} page </div>)}
      <Footer/>
    </>
  )
}

export default App;
