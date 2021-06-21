import React, { useState } from 'react';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import DropDown from './components/dropDown/DropDown'
import Table from './components/dataTable/Table'

import {options, tableData} from './data'

function App() {

const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Intro />
      <DropDown 
      options={options} 
      selected={selected}
      onSelectedChange={setSelected}
      />
      <Table 
      data={tableData}
      option={selected} 
      distanceOption={options[1].value}
      />
    </div>
  );
}

export default App;
