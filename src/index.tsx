import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateProvider } from './RootStateContext';

ReactDOM.render(
    <RootStateProvider>
    <App />
    </RootStateProvider>
,
  document.getElementById('root')
);

