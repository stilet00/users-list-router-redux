import StartPage from "./components/StartPage/StartPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import UsersList from "./components/UsersList/UsersList/UsersList";
import Form from "./components/Form/Form";
import React from "react";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route path="/" exact component={StartPage} />
                  <Route path="/users" component={UsersList} />
                  <Route path="/form" component={Form} />
              </Switch>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
