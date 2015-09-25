import React, {Component} from 'react';
import Relay from 'react-relay';

class Item extends Component {
  render() {
    const { store: item } = this.props;

    return (
      <div key={item.id}>
        <h1><a href={item.url}>{item.title}</a></h1>
        <h2>{item.score} - {item.by.id}</h2>
        <hr />
      </div>
    )
  }
}

Item = Relay.createContainer(Item, {
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsItem {
        id
        title,
        score,
        url
        by { id }
      }
    `,
  },
});

export default Item;
