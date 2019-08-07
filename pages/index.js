import React, { PureComponent } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    axios.get('https://freckbeauty.com/wp-json/wp/v2/product?_embed')
      .then(products => {
        this.setState({
          products: products.data
        });
      })
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <div>
        {this.state.products.map(product => (
          <div>
            <img src={product._embedded['wp:featuredmedia'][0].link} />
            <h3>{product.title.rendered}</h3>
          </div>
        ))}
        <style jsx>{`
          img {
            width: 250px;
          }
        `}</style>
      </div>
    );
  }
}