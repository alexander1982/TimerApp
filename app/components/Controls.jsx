var React = require('react');
var createClass = require('create-react-class');

let Controls = createClass({
	                           propTypes: {
		                           countdownStatus: React.PropTypes.string.isRequired,
		                           onStatusChange : React.PropTypes.func.isRequired
	                           },
	                           onStatusChange(newStatus) {
		                           return () => {
			                           this.props.onStatusChange(newStatus)
		                           }
	                           },
	                           componentWillReceiveProps(newProps) {
																	console.log('componentWillReceiveProps', newProps.countdownStatus);
	                           },
	                           render() {
		                           var { countdownStatus } = this.props;
		                           var renderStartStopButton = () => {
			                           if(countdownStatus === 'started'){
				                           return <button className="button secondary" onClick={this.onStatusChange('paused')}>
					                           pause</button>
			                           } else if(countdownStatus === 'paused'){
				                           return <button className="button primary" onClick={this.onStatusChange('started')}>
					                           Start</button>
			                           } else if(countdownStatus === 'stopped'){
				                           return <button className="button primary" onClick={this.onStatusChange('started')}>
					                           Start</button>
			                           }
		                           };

		                           return (
		                           <div className="controls">
			                           {renderStartStopButton()}
			                           <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>
				                           Clear
			                           </button>

		                           </div>
		                           )
	                           }
                           });
module.exports = Controls;