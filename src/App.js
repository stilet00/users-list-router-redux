import StartPage from "./components/StartPage/StartPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Form from "./components/Form/Form";
import React from "react";
import UserPage from "./components/UsersList/UserPage/UserPage";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/form" component={Form} />
          <Route path="/users" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
