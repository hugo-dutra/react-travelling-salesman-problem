import { DataContext, points } from "./data/DataContext";
import MainScreen from "./screens/MainScreen";



const App = () => {
  return (
    <DataContext.Provider value={{ points }}>
      <MainScreen />
    </DataContext.Provider>
  );
}

export default App;
