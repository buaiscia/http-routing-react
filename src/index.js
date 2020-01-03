import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request)
    // here possible to add anything to the reqs editing the config, like headers
    return request; // always return otherwise the req gets blocked
}, error => {
 console.log(error);
 return Promise.reject(error);   
});

axios.interceptors.response.use(response => {
    console.log(response)
    // here possible to add anything to the reqs editing the config, like headers
    return response; // always return otherwise the req gets blocked
}, error => {
 console.log(error);
 return Promise.reject(error);   
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
