import './App.css'
import { DataContext, data } from "./data/DataContext";
import MainScreen from "./screens/MainScreen";
import { useState } from 'react'

const App = () => {
  const [dataState, setDataState] = useState(data);

  return (
    <DataContext.Provider value={{ dataState, setDataState }}>
      <MainScreen />
    </DataContext.Provider>
  );
}

export default App;
