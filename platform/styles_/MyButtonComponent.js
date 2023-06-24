// MyButtonComponent.js
import React, { Component } from 'react';
import './styles.css';
    
const MyButton = (props) => {
    return (
        <button className="btn">{ props.children }</button>
    );
}
    
export default MyButton;
