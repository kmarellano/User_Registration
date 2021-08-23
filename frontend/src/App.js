import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from './components/Body'
import Register from './components/Register'
import Users from './components/Users';
function App() {
  return (
    <div className="App">
      <Router>
        <div className = "container">
            <Switch>
              <Route path="/" exact component={Body} />
              <Route path="/users" exact component={Users} />
              <Route path="/register" exact component={Register} />
              <Route path="/editUser/:id" exact component={Body} />
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
