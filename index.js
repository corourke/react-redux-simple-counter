import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counter.reducer';

import Counter from './components/Counter';

const store = createStore(counterReducer, composeWithDevTools(
    applyMiddleware()
));

class App extends React.Component {
    displayName: 'App'

    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
};

render(<App />, document.getElementById('root'));
