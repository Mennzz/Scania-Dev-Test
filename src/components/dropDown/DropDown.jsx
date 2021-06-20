import React,{useRef} from "react";
import "./dropDown.css"
import { useDetectOutsideClick } from '../useDetectOutsideClick';

function DropDown(props) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className="flex-conatiner">
        <div className={`dropdown-container ${isActive ? 'active' : 'inactive'}`}>
        <button onClick={onClick} className="dropdown-title dropdown-item dropdown-arrow">
        <span>{props.selected.label}</span>
        </button>
        <div ref={dropdownRef} className="dropdown-option">
        <ul>
          {props.options.filter(option => option.value !== "title").map(option => (
              <li 
              className={`dropdown-item ${props.selected.value === option.value ? 'selected' : 'notSelected'}`} 
              key={option.value}
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