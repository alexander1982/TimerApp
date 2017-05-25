var React = require('react');
var createClass = require('create-react-class');

let CountdownForm = createClass({
	                                onSubmit(e){
		                                e.preventDefault();
		                                if(this.refs.seconds.value < 0) {
			                                return;
		                                }

		                                var strSeconds = this.refs.seconds.value;
		                                
		                                if(strSeconds.match(/^[0-9]*$/)) {
			                                this.refs.seconds.value = '';
			                                this.props.onSetCountdown(parseInt(strSeconds, 10));
		                                }
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