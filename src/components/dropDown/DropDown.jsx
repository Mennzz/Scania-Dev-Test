import React,{useRef} from 'react';
import './dropDown.css';
import { useDetectOutsideClick } from '../useDetectOutsideClick';

function DropDown(props) {
    //reference of the dropdown for detect outside click
    const dropdownRef = useRef(null);

    //useDetectOutsideClick: set the dropdown inactive when user click outside of it
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const onClick = () => setIsActive(!isActive);

    return (
        <div className="flex-conatiner">
        <div className={`dropdown-container ${isActive ? 'active' : 'inactive'}`}>
        <button onClick={onClick} className="dropdown-title dropdown-item dropdown-arrow">
        <span>{props.selected.label}</span>
        </button>
        <div ref={dropdownRef} className="dropdown-option">
        <ul onClick={onClick}>
          {props.options.filter(option => option.value !== "title").map(option => (
              <li 
              //apply selected class to the selected option
              className={`dropdown-item ${props.selected.value === option.value ? 'selected' : 'notSelected'}`} 
              key={option.value}
              //return the selected value to App
              onClick={() => props.onSelectedChange(option)}
              >
              {option.label}
              </li>
          ))}
        </ul>
        </div>
        </div>
        <div className="reset" onClick={() => props.onSelectedChange(props.options[0])}>Reset</div>
        </div>
    )

}


export default DropDown;