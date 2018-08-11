import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SetupApollo from './setup/SetupApollo';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <SetupApollo />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
