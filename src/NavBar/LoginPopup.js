import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
  render() {
    return (
      // shortcode of status={this.props.status} hidePopup={this.props.hidePopup}
      <Popup {...this.props} style="login-popup">
        <img src="/img/logo-popup.png" />
        <h1>Login to Join The Community</h1>
        <p>CodeHunt is a community to share and geek out above the latest code, podcast and news. Join us</p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We'll never post to facebook without your permission.</p>
        </Popup>
    )
  }
}

export default LoginPopup;
