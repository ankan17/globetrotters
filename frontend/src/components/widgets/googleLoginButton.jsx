import React from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { convertGoogleToken } from "../../actions/authActions";

import { GOOGLE_CLIENT_ID } from "../../config";

const GoogleLoginButton = (props) => {
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={(response) => props.convertGoogleToken(response.tc.access_token)}
      onFailure={(err) => console.error(err)}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  convertGoogleToken: (token) => dispatch(convertGoogleToken(token)),
});

export default connect(null, mapDispatchToProps)(GoogleLoginButton);
