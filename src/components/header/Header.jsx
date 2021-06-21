import React from 'react';
import './header.css';

function Header(props){
    return(
        <div className="header">
        <div className="app-title">{props.headerTitle}</div>
        <div className="scania-symbol" />
      </div>
    )
}

export default Header;