var React = require('react');
var createClass = require('create-react-class');

let Controls = createClass({
	                           propTypes() {
		                           countdownStatus: React.PropTypes.string.isRequired
	                           },
	                           render() {
		                           var { countdownStatus } = this.props;
		                           var renderStartStopButton = () => {
			                           if(countdownStatus === 'started'){
				                           return <button className="button secondary">Paused</button>
			                           } else if(countdownStatus === 'paused'){
				                           return <button className="button primary">Start</button>
			                           }
		                           };

		                           return (
		                           <div className="controls">
			                           {renderStartStopButton()}
		                           </div>
		                           )
	                           }
                           });
module.exports = Controls;