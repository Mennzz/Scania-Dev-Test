import React,{ useState} from "react";
import "./dropDown.css"

function DropDown(props){
    const options =[
        {value:'smallerThan200', label:'<= 200.000km'},
        {value:'biggerThan200', label:'> 200.000km'},
    ]

    const [selectedDistance,setSelectedDistance] = useState([]);

    function handleSelectChange(event) {
        setSelectedDistance(event.target.value);
    }

    var selectOption = option(options);

    return (
        <select onChange={handleSelectChange} className="dropdown">
            {selectOption}
        </select>
    )

}

function option(options){
    var selectOptions = [];

    for(let i = 0; i < options.length;i++ )
    {
        selectOptions.push(
            <option key={i} value={options[i].value}>{options[i].label}</option>
        )
    }

    return selectOptions;
}

export default DropDown;