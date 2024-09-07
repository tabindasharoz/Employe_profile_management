
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Registration from './component/Registration';
import Showall from './component/Showall';
import View from './component/View';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './component/Edit';


function App() {
  return (
    <>
  <div className='container-fluid'>
    {/*navbar start*/}
  <Navbar/>
     {/*navbar end*/}

     {/*main*/}
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Registration/>}/>
      <Route exact path='/showall' element={<Showall/>}/>
      <Route exact path='/view/:id' element={<View/>}/>
      <Route exact path='/Edit/:id' element={<Edit/>}/>
          </Routes>
    </BrowserRouter>
    
     {/*main end*/}
     
     {/*footer start*/}
     <Footer></Footer>
     {/*footer end*/}
  </div>
   </>
  );
}

export default App;
