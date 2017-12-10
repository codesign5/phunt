import React, { Component } from 'react';
import ProductList from '../Product/ProductList';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      productList: [
      {
        id: 1,
        name: 'Codecademy',
        link: 'http://google.com',
        media: '/img/pro_banner1.png',
        upvote: 169,
        description: 'Stylish Apple Watch',
        maker: {
          name: 'Vishu',
          avatar: '/img/vishu.jpg'
        }
      },
      {
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
      }
      ]
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/banner2.jpg" width="100%" />
        </header>

        <section>
          <section className="container">
          {
            this.state.productList ? <ProductList productList={this.state.productList} /> : null
            // If this.state.PL has value than show productList otherwise nothing
          }
          </section>
        </section>
      </section>
    ); 
  }
}

export default HomePage;
