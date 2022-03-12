import './MainScreen.css'
import React from 'react'
import Controls from '../components/Controls';
import MainPanel from '../components/MainPanel';

const MainScreen = () => {
  return (
    <div className='MainScreen'>
      <MainPanel />
      <Controls />
    </div>
  )
}

export default MainScreen;
