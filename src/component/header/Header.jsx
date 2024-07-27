import React from 'react';
import './header.css';
// import { Container } from 'react-bootstrap';
import headerImg from '../../images/header.png'; 

export default function Header() {
  return (
    <div className="headerImg">
   
        <img src={headerImg} alt="Header" />

    </div>
  );
}
