import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import IceContainer from "./Components/IceContainer";
import store from "./Redux/store";
import Cake from "./Components/Cake";
import HttpReqWithRedux from "./Components/HttpReqWithRedux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        {/* <IceContainer />
        <Cake /> */}
        <hr />
        <HttpReqWithRedux />
      </div>
    </Provider>
  );
}

export default App;
