import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Routes from "./Routes";
const App = () => (
  <Router>
    <Routes />

    <GlobalStyle />
  </Router>
);

export default App;
