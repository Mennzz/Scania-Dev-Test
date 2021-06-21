import React, { useState } from 'react';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import DropDown from './components/dropDown/DropDown'
import Table from './components/dataTable/Table'
// select option data and table data
import {options, tableData} from './data'

function App() {

const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header headerTitle={"Fleet Portal"}  />
      <Intro introTitle={"Driver evaluation"}  />
      <DropDown 
      options={options} 
      selected={selected}
      onSelectedChange={setSelected}
      data-testid="dropdown"
      />
      <Table 
      data={tableData}
      option={selected} 
      //specify the divisor of select value
      optionDivisor={200000}
      //specify the select category
      selector={"Distance"}
      data-testid="table"
      />
    </div>
  );
}

export default App;
