import React from 'react';
import PrivateRoute from "./Components/PrivateRoute";
import Todos from "./Routes/Todos";
import SignIn from "./Routes/SignIn";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>Redux Todos App</h1>
      <Switch>
        <PrivateRoute path = "/todos">
          <Todos />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;