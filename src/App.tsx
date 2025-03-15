import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Repair from './pages/Repair';
import Shop from './pages/Shop';
import Sell from './pages/Sell';
import Professionals from './pages/Professionals';
import Community from './pages/Community';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfessionalRegister from './pages/ProfessionalRegister';
import Remake from './pages/Remake';
import Payment from './pages/Payment';
import Chat from './pages/Chat';
import SearchPage from './pages/Search';
import Notifications from './pages/Notifications';
import UsedItemSearch from './pages/UsedItemSearch';
import RepairRequestSearch from './pages/RepairRequestSearch';
import CategorySearch from './pages/CategorySearch';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/professional-register" element={<ProfessionalRegister />} />
        <Route path="/remake" element={<Remake />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/chat/:sellerId" element={<Chat />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/used-items" element={<UsedItemSearch />} />
        <Route path="/repair-requests" element={<RepairRequestSearch />} />
        <Route path="/category-search" element={<CategorySearch />} />
      </Routes>
    </div>
  );
}

export default App;