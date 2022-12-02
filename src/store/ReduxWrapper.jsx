import * as React from 'react';
import { Provider } from 'react-redux';
import store from './ReduxStore';
import {ThemeProvider} from './../context/ThemeContext';

const ReduxWrapper = ({ element }) => (
    <ThemeProvider><Provider store={store}>{element}</Provider></ThemeProvider>
);

export default ReduxWrapper;