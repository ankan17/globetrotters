import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Footer, Content } from "./components/layouts";
import { LandingPage, HomePage, Profile, Post, Settings } from "./components/pages";
import { getAuthState } from "./actions/authActions";
import PrivateRoute from "./PrivateRoute";

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthState();
  }

  render() {
    const { auth } = this.props;
    return (
      <>
        <Router>
          <Header />
          <Content>
            <Switch>
              <Route
                path="/"
                exact
                component={auth && auth.authenticated ? HomePage : LandingPage}
              />
              <PrivateRoute path="/user" exact component={Profile} />
              <PrivateRoute path="/post" exact component={Post} />
              <PrivateRoute path="/settings" exact component={Settings} />
            </Switch>
          </Content>
          <Footer />
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) => ({
  getAuthState: () => dispatch(getAuthState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
