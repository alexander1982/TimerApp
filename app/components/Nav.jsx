var React = require('react');
var createClass = require('create-react-class');
var { Link, IndexLink } = require('react-router');

let Nav = () => {
	return (
	<div>
		<nav className="top-bar">
			<section className="top-bar-left">
				<ul className="menu left">
					<li className="menu-text">
						React Timer App
					</li>
					<li>
						<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
					</li>
					<li>
						<Link to="/countdown"  activeClassName="active-link">Countdown</Link>
					</li>
				</ul>
			</section>

			<section className="top-bar-right">
				<ul className="menu right">
					<li className="menu-text">
						Created by
					</li>
					<li>
						<Link to="/" activeClassName="active">Alexander</Link>
					</li>
				</ul>
			</section>
		</nav>
	</div>
	)
};
module.exports = Nav;