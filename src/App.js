import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import RegisterCompany from './Components/RegisterCompany';
import Test from './Components/Test';
import Auth from './Components/Auth';
import GetTrains from './Components/GetTrains';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test></Test>}></Route>
          <Route path='/auth' element={<Auth></Auth>}></Route>
          <Route path='/trains' element={<GetTrains></GetTrains>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
