import { BrowserRouter,Route,Switch} from "react-router-dom";   
import './app.css';
import Home from "./components/home/home";
// import Accesories from "./components/accesories/accesories";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/accesories" component={Accesories}/> */}
        
        <Route path="/" component={Home}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
