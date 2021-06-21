import React from "react";
import "./table.css"
import {distanceFormat} from "./dataProcessing"

// enable dynamically create table from any one level dataset

function Table(props){

  //ignore the possible id attribute in the table data
  var ignore_headers= ['id'];

  // return the list of headings that should be displayed on top of the table
  const getKeys = () =>{
    return Object.keys(props.data[0]);
  }

  //return the header (component) part of the table
  const getHeader = () => {
    var keys = getKeys();
    return keys.map((key, index)=>
      ignore_headers.includes(key) ? null: <th className="table-box" key={key}>{key}</th>
      )
  }

  //return the columns of the selected rows
  //distanceFormat is to format the distance data, distance is number in the source for easy selection
  const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
      var selectedData=props.data;
      if(!ignore_headers.includes(key))
      {
        var value = selectedData[key];
        if(key ==="Distance")
        {
           value = distanceFormat(selectedData[key]);
        }
        return <td className="table-box" key={selectedData[key]}>{value}</td>
      }
      else
      return null;
    }
    )
  }

  //return the selected rows basing on the selector and the divisor value
  const getRowsData = () =>{   
    var items = props.data;
    var keys = getKeys();

    if(props.option.value !== "title")
    {
      if(props.option.value <= props.optionDivisor)
      {
        items=items.filter(data =>
        {return data[props.selector] <= props.optionDivisor;}
      )
        }
        else{
          items=items.filter(data =>
            {return data[props.selector] > props.optionDivisor;}
          )
        }
    }

    return items.map((row, index)=>{
     return <tr key={index} className="table-row"><RenderRow key={index} data={row} keys={keys}/></tr>
      
 })
  }

    return(

      <div>
      <table className="table-container">
      <thead>
      <tr className="table-header">{getHeader()}</tr>
      </thead>
      <tbody>
      {getRowsData()}
      </tbody>
      </table>
      </div>

    )

}


export default Table;