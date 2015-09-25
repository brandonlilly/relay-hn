import React, {Component} from 'react';
import Relay from 'react-relay';
import Item from './Item';

class TopItems extends Component {
  _onChange(e) {
    const storyType = e.target.value;
    this.setState({ storyType });
    this.props.relay.setVariables({ storyType });
  }

  render() {
    const { store, relay } = this.props;

    const items = store.stories.map(
      store => <Item store={store} />
    );

    const variables = relay.variables;
    const currentStoryType = (this.state && this.state.storyType) || variables.storyType;

    return (
      <div>
      <select onChange={(e) => this._onChange(e)} value={currentStoryType}>
        <option value="top">Top</option>
        <option value="new">New</option>
        <option value="ask">Ask HN</option>
        <option value="show">Show HN</option>
      </select>
        { items }
      </div>
    );
  }
}

TopItems = Relay.createContainer(TopItems, {
  initialVariables: {
    storyType: "top",
  },
  fragments: {
    store: () => Relay.QL`
      fragment on HackerNewsAPI {
        stories(storyType: $storyType) { ${Item.getFragment('store')} },
      }
    `,
  }
});

export default TopItems;
