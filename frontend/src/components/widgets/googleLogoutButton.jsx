import React from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { GOOGLE_CLIENT_ID } from "../../config";
import { handleGoogleLogout } from "../../actions/authActions";

const GoogleLogoutButton = (props) => {
  return (
    <GoogleLogout
      clientId={GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
          {props.children}
        </div>
      )}
      onLogoutSuccess={(token) => props.handleGoogleLogout(token)}
      onLogoutFailure={(err) => console.log(err)}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleGoogleLogout: (token) => dispatch(handleGoogleLogout(token)),
});

export default connect(null, mapDispatchToProps)(GoogleLogoutButton);
