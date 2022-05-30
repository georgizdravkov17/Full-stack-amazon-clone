import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components/components.js';
import { CartScreen, HomeScreen, LoginScreen, NotFoundScreen, ProductScreen, ProductsScreen, RegisterScreen } from './screens/screens.js';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<HomeScreen />}/>
                <Route exact path="/cart" element={<CartScreen />}/>
                <Route exact path="/products" element={<ProductsScreen />}/>
                <Route path="/products/:id" element={<ProductScreen />}/>
                <Route exact path="/login" element={<LoginScreen />}/>
                <Route exact path="/register" element={<RegisterScreen />}/>
                <Route path="/*" element={<NotFoundScreen />}/>
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
