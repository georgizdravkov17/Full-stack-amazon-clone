import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
        <Link to="/" className="logo">
           <h1><span><i className="fa-solid fa-bars"></i></span>Amazon</h1>
        </Link> 
        <div className="nav">
            <ul className="list">
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/products">Products</Link></li>
            </ul>
        </div>
        <form className="search-box">
           <input type="text" name="searchQuery" placeholder="Search..." onChange={(e) => { setSearchQuery(e.target.value) }} />
           <Button variant="success" onClick={() => { console.log(searchQuery) }}>Search</Button>
        </form>
        <div className="buttons">
           <Button variant="primary" onClick={() => { navigate("/login") }}>Sign in</Button>
           <Button variant="primary" onClick={() => { navigate("/register") }}>Sign up</Button>
           {/* <Button onClick={() => { navigate("/cart") }}><i class="fa-solid fa-cart-shopping"></i></Button> */}
           <Button onClick={() => { navigate("/cart") }}>Cart 0</Button>
        </div>
    </header>
  )
}

export default Header