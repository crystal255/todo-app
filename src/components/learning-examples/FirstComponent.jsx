// again using JSX need to import React
// for default export, you can import directly
// for any other export (non-default), you need to put in {} in order to import
import React, { Component } from 'react';

//Class Component
// below are child components

// once define a new module, for other js file to use it, need to do "export default"
class FirstComponent extends Component{
    render() {
      return(
        <div className="firstComponent">
          FirstComponent
        </div>
      );
    }
  }

export default FirstComponent
