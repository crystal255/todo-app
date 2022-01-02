import React from 'react';

// Function Component
// create the third component as a function component
// creating function component is easier than class component. you don't need to implement render()
// however, class component has a few additional features comparing to function component, one of them is "state"

// export default can be with component implementation or can be at end to be its own statement (best practice)
function ThirdComponent() {
    return(
      <div className="thirdComponent">
        ThirdComponent as function
      </div>
    );
  }

export default ThirdComponent