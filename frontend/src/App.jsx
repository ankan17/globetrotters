import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Header, Footer, Content } from "./components/layouts";
import { LandingPage, HomePage, Profile, Post, Settings } from "./components/pages";
import { getAuthState } from "./actions/authActions";
import { fetchUserDetails } from "./actions/userActions";
import PrivateRoute from "./PrivateRoute";

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthState();
  }

  componentDidUpdate() {
    const { auth, user } = this.props;
    if (auth.authenticated && !user.loggedIn) {
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

App.propTypes = {
  getAuthState: PropTypes.func.isRequired,
  fetchUserDetails: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth, user: state.user });
const mapDispatchToProps = (dispatch) => ({
  getAuthState: () => dispatch(getAuthState()),
  fetchUserDetails: (accessToken) => dispatch(fetchUserDetails(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
