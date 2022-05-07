import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import store from "./Redux/store";
import IceContainer from "./Components/IceContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceContainer />
      </div>
    </Provider>
  );
}

export default App;
