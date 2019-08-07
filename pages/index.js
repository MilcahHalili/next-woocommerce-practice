import React, { PureComponent } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    axios.get('https://freckbeauty.com/wp-json/wp/v2/product?_embed')
      .then(posts => {
        this.setState({
          posts: posts.data
        });
      })
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <div>
        <p>Sup, World?</p>
      </div>
    );
  }
}