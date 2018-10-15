const React = require('react');
const ReactDom = require('react-dom');
const { HashRouter } = require('react-router-dom');

const App = require('./components/App.jsx');


ReactDom.render(<HashRouter><App /></HashRouter>, document.getElementById("root"));
