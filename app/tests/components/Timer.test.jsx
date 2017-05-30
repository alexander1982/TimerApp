var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var Timer = require('Timer');

describe('Timer component', () => {

		it('Should check if the component exist', () => {
			expect(Timer).toExist();
		});
	
		it('Should setState started and start the timer', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.handleStartCountdown();
			expect(timer.state.countdownStatus).toBe('started');
			setTimeout(() => {
				expect(timer.state.count).toBe(1);
				done();
			},1001);
		});

	
		it('Should change the countdownStatus', () => {
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.handleStatusChange('paused');
			expect(timer.state.countdownStatus).toBe('paused');
		});

	it('Should pause the timer', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);
		timer.handleStartCountdown();
		setTimeout(() => {
			timer.handleStatusChange('paused');
			expect(timer.state.countdownStatus).toBe('paused');
			expect(timer.state.count).toBe(1);
			done();
		},1001);
	});

	it('Should reset the timer', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer />);
		timer.handleStartCountdown();
		setTimeout(() => {
			timer.handleStatusChange('stopped');
			expect(timer.state.countdownStatus).toBe('stopped');
			expect(timer.state.count).toBe(0);
			done();
		},2001);
	});

});