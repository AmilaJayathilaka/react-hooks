import React from 'react';
import { ClassContext } from './ClassContext';
import ClassComponent from './ClassComponent';

export default class ClassProvider extends React.Component {
  state = {
    count: 0,
    increment: () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    },
  };

  render() {
    return (
      <ClassContext.Provider value={this.state}>
        <h3>Class</h3>
        <ClassComponent/>
      </ClassContext.Provider>
    );
  }
}