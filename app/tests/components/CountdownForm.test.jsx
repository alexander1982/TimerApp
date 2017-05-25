var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
	it('Should exist', () => {
		expect(CountdownForm).toExist();
	});
	
	it('Should call onSetCountdown if valid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		
		countdownForm.refs.seconds.value = '109';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(109);
	});

	it('Should not call onSetCountdown if invalid seconds are entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		
		countdownForm.refs.seconds.value = 'aaa';
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		expect(spy).toNotHaveBeenCalled();
	});

	it('Should not call onSetCountdown if negative seconds are entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = '-100';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});

	//it('Should not call onSetCountdown if negative seconds are entered', () => {
	//	var spy = expect.createSpy();
	//	var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
	//	var $el = $(ReactDOM.findDOMNode(countdownForm));
	//
	//	countdownForm.refs.seconds.value = '';
	//	TestUtils.Simulate.submit($el.find('form')[0]);
	//
	//	expect(spy).toNotHaveBeenCalled();
	//});
});