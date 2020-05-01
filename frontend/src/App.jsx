import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer, Content } from "./components/layouts";
import { Homepage, Profile, Post } from "./components/pages";

const App = () => (
  <>
    <Router>
      <Header />
      <Content>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/user" exact>
            <Profile />
          </Route>
          <Route path="/post" exact>
            <Post />
          </Route>
        </Switch>
      </Content>
      <Footer />
    </Router>
  </>
);

export default App;
