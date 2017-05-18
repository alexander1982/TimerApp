var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, hashHistory, IndexRoute} = require('react-router');
var $ = require('jquery');
window.jQuery = $;
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Timer}/>
			<Route path="/countdown" component={Countdown}/>
		</Route>
	</Router>,
  document.getElementById('app')
);

