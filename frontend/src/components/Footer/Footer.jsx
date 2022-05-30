import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
       <p>All rights reserved by Georgi Zdravkov</p>
       <div className="social-media">
           <i className="fa-solid fa-bars"></i>
           <i className="fa-solid fa-bars"></i>
           <i className="fa-solid fa-bars"></i>
           <i className="fa-solid fa-bars"></i>
           <i className="fa-solid fa-bars"></i>
       </div>
    </footer>
  )
}

export default Footer