var React = require('react');
var createClass = require('create-react-class');
var Clock = require('Clock');
var Controls = require('Controls');

let Timer = createClass({
	                        getInitialState() {
		                        return {
			                        count          : 0,
			                        countdownStatus: 'paused'
		                        }
	                        },
	                        handleStartCountdown() {
		                        this.setState({
			                                      countdownStatus: 'started'
		                                      });
	                        },
	                        startTimer() {
		                        this.timer = setInterval(() => {
			                        var newCount = this.state.count + 1;
			                        this.setState({
				                                      count: newCount
			                                      });
		                        }, 1000);
	                        },
	                        handleStatusChange(newStatus) {
		                        this.setState({
			                                      countdownStatus: newStatus

		                                      });
	                        },
	                        componentDidUpdate(prevProps, prevState) {
		                        if(this.state.countdownStatus !== prevState.countdownStatus){
			                        switch(this.state.countdownStatus){
				                        case 'started':
					                        this.startTimer();
					                        break;
				                        case 'paused':
					                        clearInterval(this.timer);
					                        this.timer = undefined;
				                        case 'stopped':
					                        this.setState({count: 0});
					                        break;
			                        }
		                        }
	                        },
	                        componentWillUnmount() {
		                        clearInterval(this.timer);
	                        },
	                        render() {
		                        var { count, countdownStatus } = this.state;

		                        return (
		                        <div>
			                        <h1 className="page-header">Timer App</h1>
			                        <Clock totalSeconds={count}/>
			                        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
		                        </div>
		                        )
	                        }
                        });
module.exports = Timer;