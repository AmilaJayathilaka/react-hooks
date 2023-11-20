import React from "react";
import { ClassContext } from './ClassContext';


class ClassComponent extends React.Component {
    render() {
      return (
        <ClassContext.Consumer>
          {context => (
            <div>
              <p>Count: {context.count}</p>
              <button onClick={context.increment}>Increment</button>
            </div>
          )}
        </ClassContext.Consumer>
      );
    }
  }

export default ClassComponent;  