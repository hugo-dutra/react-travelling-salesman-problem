import { DataContext, data } from "./data/DataContext";
import MainScreen from "./screens/MainScreen";
import { useState } from 'react'




const App = () => {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{ state, setState }}>
      <MainScreen />
    </DataContext.Provider>
  );
}

export default App;
