import {Container} from "react-bootstrap"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./coponents/Header"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />
      </Container>
    </Router>
  );
}

export default App;
