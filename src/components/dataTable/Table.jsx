import React from "react";
import "./table.css"
import {distanceFormat} from "./dataProcessing"

// enable dynamically create table from any one level dataset

function Table(props){

  var ignore_headers= ['id'];

  const getKeys = () =>{
    return Object.keys(props.data[0]);
  }

  const getHeader = () => {
    var keys = getKeys();
    return keys.map((key, index)=>
      ignore_headers.includes(key) ? null: <th className="table-box" key={key}>{key}</th>
      )
  }

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

  const getRowsData = () =>{   
    var items = props.data;
    var keys = getKeys();
    console.log(items);

    if(props.option.value !== "title")
    {
      if(props.option.value <= props.distanceOption)
      {
        items=items.filter(data =>
        {return data.Distance <= props.distanceOption;}
      )
        }
        else{
          items=items.filter(data =>
            {return data.Distance > props.distanceOption;}
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