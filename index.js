import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Item extends Component {
  render() {
    const { item } = this.props.store

    return (
      <div key={item.id}>
        <h1><a href={item.url}>{item.title}</a></h1>
        <h2>{item.score} - {item.by.id}</h2>
        <hr />
      </div>
    )
  }
}