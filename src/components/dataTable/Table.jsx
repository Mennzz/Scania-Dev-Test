import React from "react";

function Table(props){

    return(
<table>
  <tr>
    {
        props.tableHeader.foreach(colHeader =>{
            <th>{colHeader}</th>
        }
        )
    }
  </tr>
  {
      props.tableData.map(col =>{
    <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
      })
  }
</table>
    )

}
export default Table;