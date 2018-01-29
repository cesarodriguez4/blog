import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'github-markdown-css/github-markdown.css';
import './style.css';

const muiTheme = createMuiTheme();

ReactDOM.render(
	<BrowserRouter>
	  <MuiThemeProvider theme={muiTheme}>
	    <App/>
	  </MuiThemeProvider>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
