import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Footer, Content } from "./components/layouts";
import { LandingPage, HomePage, Profile, Post, Settings } from "./components/pages";
import { getAuthState } from "./actions/authActions";
import PrivateRoute from "./PrivateRoute";
import fetchUserDetails from "./actions/userActions";

class App extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    console.log("Inside componentDidMount");
    this.props.getAuthState();
  }

  componentDidUpdate() {
    const { auth, user } = this.props;
    console.log("Inside ComponentDidUpdate");

    if (auth.authenticated && !user.loggedIn) {
      console.log("loggedin");
      this.props.fetchUserDetails(auth.token);
    }
  }

  render() {
    const { auth } = this.props;
    console.log("Inside render");
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

const mapStateToProps = (state) => ({ auth: state.auth, user: state.user });
const mapDispatchToProps = (dispatch) => ({
  getAuthState: () => dispatch(getAuthState()),
  fetchUserDetails: (accessToken) => dispatch(fetchUserDetails(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
