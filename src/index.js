import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@material-ui/core'; // I am currently using both @material-ui & @mui deps. I need to update to only use one.
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

//Redux store
const store = createStore(reducer);

//Application theme
const theme = createTheme({
    typography: {
        fontFamily: 'Avenir Next, Avenir Next Ultra Light',
        body1: {
            fontSize: 12,
        }
    },
    palette: {
        primary: {
            main: '#1a1818'
        },
        secondary: {
            main: '#fafafa'
        }
    },
});

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
