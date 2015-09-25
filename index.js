import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Relay, {Route, RootContainer} from 'react-relay';

import Item from './components/Item';
import TopItems from './components/TopItems';

class HackerNewsRoute extends Route {
  static routeName = 'HackerNewsRoute';
  static queries = {
    store: (Component => {
      return Relay.QL`
        query root {
          hn { ${Component.getFragment('store')} },
        }
      `
    }),
  };
}

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://www.GraphQLHub.com/graphql')
);

ReactDOM.render(
  <RootContainer Component={TopItems} route={new HackerNewsRoute()} />,
  document.getElementById('container')
);
