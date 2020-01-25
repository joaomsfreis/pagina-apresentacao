import React, { useState } from 'react';
import Presentation from './components/Presentation';
import Formation from './components/Formation';
import Projects from './components/Projects';
import './App.css';
import Menu from './components/Menu';

function App() {
  const [selected, setSelected] = useState(['selected', 'none', 'none', 'none'])


  function newSelection(id) {
    let menu = ['none', 'none', 'none', 'none']
    menu[id] = 'selected'
    setSelected(menu)
  }

  return (
    <div id="#app" onwheel="return false;">
      <Menu isSelected={newSelection} selected={selected}/>
      <Presentation isHere={newSelection}/>
      <Formation isHere={newSelection} />
      <Projects isHere={newSelection} />
    </div>
  );
}

export default App;
