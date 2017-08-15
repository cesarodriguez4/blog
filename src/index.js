import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

ReactDOM.render(
	<BrowserRouter>
	  <MuiThemeProvider>
	    <App/>
	  </MuiThemeProvider>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
