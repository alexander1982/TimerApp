var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
	it('Should exist', () => {
		expect(Clock).toExist();
	});
	
		it('Should format Seconds', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var Seconds = 615;
			var expected = '10:15';
			var actual = clock.formatSeconds(Seconds);
			
			expect(actual).toBe(expected);
		});

		it('Should format Seconds if number less than 10', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var Seconds = 61;
			var expected = '01:01';
			var actual = clock.formatSeconds(Seconds);
	
			expect(actual).toBe(expected);
		});
	
	describe('render', () => {
		it('Should render clock to output', () => {
			var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
			var $el = $(ReactDOM.findDOMNode(clock));
			var actualText = $el.find('.clock-text').text();
			
			expect(actualText).toBe('01:02');
		});
	});
});