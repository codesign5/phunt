import React from 'react';
import Popup from '../NavBar/Popup';

class ProductPopup extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {
        id: 2,
        name: 'Code4Startup',
        link: 'http://apple.com',
        media: '/img/pro_banner2.jpg',
        upvote: 278,
        description: 'Envato Market Offer',
        maker: {
          name: 'Chandra',
          avatar: '/img/chandra.jpg'
        }
      },
      comments: [
        {
          name: 'Vishu',
          avatar: "/img/vishu.jpg",
          content: "I love this product"
        },
        {
          name: 'Doggo',
          avatar: "/img/dogo.jpg",
          content: "Me too"
        }
      ]
    }
  }

  renderUpVoteButton() {
    return (
      <a className="upvote-button" href="#">
        <span>
          <i className="fa fa-sort-asc"></i>
        </span>
        {this.state.product.upvote}
      </a>
    );
  }

  renderHeader() {
    return(
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpVoteButton()}
            <a href={this.state.product.link} target="_blank" className="getit-btn">GET IT</a>
          </section>
        </section>
      
      </header>
    );
  }

  renderBodyDiscussion() {
    return (
      <section className="discussion">
        <h2>Discussion</h2>
        <section className="post-comment">
          <img src="/img/chandra.jpg" className="medium-avatar"/>
          <input placeholder="What do you think of this product?" />
        </section>
        {this.renderComments()}
      </section>
    )
  }

  renderBody() {
    return(
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    )
  }

  renderComments() {
    return (
      <ul className="comment-list">
        {
          this.state.comments.map((comment,idx) => {
            return (
              <li key={idx}>
                <img src={comment.avatar} className="medium-avatar" />
                <section>
                  <strong>{comment.name}</strong>
                  <p>{comment.content}</p>
                </section>
              </li>
            );
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    )
  }
}

export default ProductPopup;
