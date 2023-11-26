import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookListPage from './components/BookListPage';
import BookDetailsPage from './components/BookDetailsPage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserOrdersPage from './components/UserOrdersPage';
import LibrarianDashboardPage from './components/LibrarianDashboardPage';
import AdminDashboardPage from './components/AdminDashboardPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/my-orders" element={<UserOrdersPage />} />
          <Route path="/librarian-dashboard" element={<LibrarianDashboardPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          {/* Ajoutez d'autres routes au besoin */}
        </Routes>
      </div>
  );
}

export default App;
