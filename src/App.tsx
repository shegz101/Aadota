import './App.css'
import AadotaPage from './components/home/AadotaPage'
import { Routes, Route } from "react-router";
import RegistrationPage from './components/register/RegistrationPage';
import PaymentProcess from './components/register/PaymentProcess';
import ThanksPage from './components/register/ThanksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AadotaPage/>}/>
      <Route path="/register" element={<RegistrationPage/>}/>
      <Route path="/payment" element={<PaymentProcess/>}/>
      <Route path="/registrationSuccessful" element={<ThanksPage/>}/>
    </Routes>
  )
}

export default App
