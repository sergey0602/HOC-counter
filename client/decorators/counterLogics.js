import React, { Component, Fragment } from 'react';

export default OriginalComponent => class WrappedComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <Fragment>
        <button type='button' onClick={this.increment.bind(this)}>Increment</button>
        <button type='button' onClick={this.decrement.bind(this)}>Decrement</button>
        <OriginalComponent {...this.props} count={this.state.count} />
      </Fragment>
    )
  }
}
