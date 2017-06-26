import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import { initialState } from './App.config'
import App from './App';

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();