import React, { useState } from 'react';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import DropDown from './components/dropDown/DropDown'
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
    </div>
  );
}

export default App;
