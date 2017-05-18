var React = require('react');
var createClass = require('create-react-class');
var Clock = require('Clock');

let Countdown = createClass({
	                        render() {
		                        return (
		                        <div>
			                        <Clock totalSeconds={129}/>
		                        </div>
		                        )
	                        }
                        });
module.exports = Countdown;