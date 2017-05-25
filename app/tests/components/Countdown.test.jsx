var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown', () => {
	it('Should check if component exist', () => {
		expect(Countdown).toExist();
	})
});

describe('setCountdown', () => {
	it('Should setState to started and countdown', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(10);
		expect(countdown.state.count).toBe(10);
		expect(countdown.state.countdownStatus).toBe('started');
		
		setTimeout(() => {
			expect(countdown.state.count).toBe(9);
			done();
		}, 1001);
	});

	it('Should never be negative seconds', (done) => {
		var countdown = TestUtils.renderIntoDocument(<Countdown />);
		countdown.handleSetCountdown(3);

		setTimeout(() => {
			expect(countdown.state.count).toBe(0);
			done();
		}, 3001);
	});
});