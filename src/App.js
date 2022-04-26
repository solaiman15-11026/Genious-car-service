
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Servicedetails from './Pages/Servicedetails/Servicedetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Registar from './Pages/Login/Registar/Registar'
import CheackOut from './Pages/CheackOut/CheackOut/CheackOut';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<Servicedetails></Servicedetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
        <Route path='/cheackout' element={
          <RequiredAuth> <CheackOut></CheackOut></RequiredAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
