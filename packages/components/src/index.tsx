import Header from './Header'
import React from 'react';
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <Header>
     <p>This is the storybook</p>
     </Header>
  </React.StrictMode>,
  document.getElementById("root")
);

export { Header }
