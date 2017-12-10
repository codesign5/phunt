import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';
import ProfileMenu from './ProfileMenu';

class NavBar extends React.Component {
  constructor(){
    super();
    this.state = {
      popupStatus: false
    }
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }

  showPopup () {
    this.setState({ popupStatus: true });
  };

  hidePopup () {
    this.setState({ popupStatus: false });
  };

  renderProductSearch() {
    return (
      <section className="left-side">
        <input className="product-search" placeholder="SEARCH" />
      </section>
    );
  }

  renderLogo() {
    return (
      <a href="#"><img src="/img/logo.png" /></a>
    )
  }

  renderUser() {
    return (
      <section className="right-side">
      {
        this.props.user ? 
        <section>
          <span>
            <a href="#" onClick={this.showPopup} className="login-btn">POST</a>
            <ProfileMenu />
          </span>
          <PostPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
        </section> : // if not
        <section>
          <a href="#" onClick={this.showPopup} className="login-btn">LOGIN</a>
          <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>            
        </section>
      }
      </section>
    );
  }

  render() {
    return (
      <section>
        <section className="navbar">
          {this.renderProductSearch()}
          {this.renderLogo()}
          {this.renderUser()}
        </section>
      </section>
    );
  }
}

export default NavBar;
