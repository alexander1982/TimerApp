var React = require('react');
var createClass = require('create-react-class');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

let Countdown = createClass({
	                            getInitialState() {
		                            return {
			                            count          : 0,
			                            countdownStatus: 'stopped'
		                            }
	                            },
	                            //Fired after props state changes args: previous props and state
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
					                            this.setState({ count: 0 });
					                            break;
			                            }
		                            }
	                            },
	                            //Fired before props state changes args: next props and state
	                            componentWillUpdate(nextProps, nextState) {

	                            },
	                            //Fired when component first appear no data will be able
	                            componentWillMount() {
		                            console.log('componentWillMount');
	                            },
	                            //Fired after everything is rendered all data is able
	                            componentDidMount() {
		                            console.log('componentDidMount');
	                            },
	                            //Fired when component removed from the dom
	                            componentWillUnmount() {
		                            console.log('componentWillUnmount');
		                            clearInterval(this.timer);
		                            this.timer = 'undefined';

	                            },
	                            handleSetCountdown(seconds) {
		                            this.setState({
			                                          count          : seconds,
			                                          countdownStatus: 'started'
		                                          });
	                            },
	                            startTimer() {
		                            this.timer = setInterval(() => {
			                            var newCount = this.state.count - 1;
			                            this.setState({
				                                          count: newCount >= 0? newCount : 0
			                                          });
			                            
			                            if(newCount === 0){
				                            this.setState({
					                                          countdownStatus: 'stopped'
				                                          });
			                            }
		                            }, 1000)
	                            },
	                            handleStatusChange(newStatus) {
		                            this.setState({ countdownStatus: newStatus });
	                            },
	                            render() {
		                            var { count, countdownStatus } = this.state;
		                            var renderControlArea = () => {
			                            if(countdownStatus !== 'stopped'){
				                            return <Controls countdownStatus={countdownStatus}
				                                             onStatusChange={this.handleStatusChange}/>
			                            } else {
				                            return <CountdownForm onStatusChange={this.handleStatusChange}
				                                                  onSetCountdown={this.handleSetCountdown}/>
			                            }
		                            };
		                            return (
		                            <div>
			                            <h1 className="page-header">Countdown App</h1>
			                            <Clock totalSeconds={count}/>
			                            {renderControlArea()}
		                            </div>
		                            )
	                            }
                            });
module.exports = Countdown;