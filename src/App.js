import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import IceContainer from "./Components/IceContainer";
import store from "./Redux/store";

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
