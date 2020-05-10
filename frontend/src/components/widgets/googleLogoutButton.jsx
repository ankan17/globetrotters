import React from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { GOOGLE_CLIENT_ID } from "../../config";
import { handleGoogleLogout } from "../../actions/authActions";

const GoogleLogoutButton = (props) => (
  <GoogleLogout
    clientId={GOOGLE_CLIENT_ID}
    buttonText="Logout"
    onLogoutSuccess={() => props.handleGoogleLogout()()}
    onLogoutFailure={(err) => console.log(err)}
  />
);

const mapDispatchToProps = (dispatch) => ({
  handleGoogleLogout: (token) => dispatch(handleGoogleLogout(token)),
});

export default connect(null, mapDispatchToProps)(GoogleLogoutButton);
