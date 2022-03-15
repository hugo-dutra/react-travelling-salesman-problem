import './MainPanel.css'
import React from 'react';
import { useState } from 'react';
import Canvas from './Canvas';

const circles = [];

const MainPanel = (props) => {

  return (
    <div className='MainPanel'>
      <Canvas />
    </div>
  )
}

export default MainPanel;
