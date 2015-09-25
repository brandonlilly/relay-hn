import React, {Component} from 'react';
import Relay from 'react-relay';
import Item from './Item';

class TopItems extends Component {
  render() {
    const { store: {topStories} } = this.props;
    const items = topStories.map(
      store => <Item store={store} />
    );

    return (
      <div>
        { items }
      </div>
    );
  }
}

TopItems = Relay.createContainer(TopItems, {
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        topStories { ${Item.getFragment('store')} },
      }
    `,
  }
});

export default TopItems;
