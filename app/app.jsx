var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, hashHistory, IndexRoute} = require('react-router');
var $ = require('jquery');
var Main = require('Main');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
  document.getElementById('app')
);

