import React from 'react';
import ProductPopup from './ProductPopup';

class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductPopupStatus : false
    }
    this.showProductPopup = this.showProductPopup.bind(this);
    this.hideProductPopup = this.hideProductPopup.bind(this);
  }

  showProductPopup() {
    this.setState({ProductPopupStatus: true})
  }

  hideProductPopup() {
    this.setState({ProductPopupStatus: false})
  }

  renderUpVoteButton() {
    return (
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.props.upvote}
      </a>
    );
  }

  renderNewWindowIcon() {
    return (
      <a href={this.props.link} className="product-item-link">
      <span>
        <i className="fa fa-external-link"></i>
      </span>
      </a>
    )
  }

  renderInfoSession() {
    return (
      <section className="product-item-info">
        <a href="#" onClick={this.showProductPopup}>
          <h2>{this.props.name}</h2>
        </a>
        <p>{this.props.description}</p>
        <a href="#">
          <img className="small-avatar" src={this.props.maker.avatar} />
        </a>
      </section>
    )
  }

  render() {
    return (
      <li className="product-item">
        {this.renderUpVoteButton()}
          <img className="product-item-media" src={this.props.media} />
        {this.renderInfoSession()}
        {this.renderNewWindowIcon()}
        <ProductPopup status={this.state.ProductPopupStatus} hidePopup={this.hideProductPopup} />
    </li>
    )
  }
}

export default ProductItem;
