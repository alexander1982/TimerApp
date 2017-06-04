var React = require('react');
var createClass = require('create-react-class');

let CountdownForm = createClass({
	                                onSubmit(e){
		                                e.preventDefault();
		                                var strSeconds = this.refs.seconds.value;
		                                
		                                if(strSeconds.match(/^[0-9]*$/) && strSeconds) {
			                                this.refs.seconds.value = '';
			                                this.props.onSetCountdown(parseInt(strSeconds, 10));
		                                }
		                                console.log(strSeconds.length);
	                                },
	                        render() {
		                        return (
			                        <div>
																<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
																	<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
																	<button className="button expanded">Start</button>
																</form>
			                        </div>
		                        )
	                        }
                        });
module.exports = CountdownForm;