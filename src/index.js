import React from 'react';
import ReactDOM from 'react-dom';

const App = () => 'Hello Word';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
