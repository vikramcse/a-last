var expect = require('chai').expect;
var last = require('./index.js');

describe('tests for getting last n elements from array', function() {
	it('should return last element 5 in absence of argument n', function () {
		expect(last([1, 2, 3, 4, 5])).to.be.equal(5);
	});

	it('should return last 3 elements as n is 3', function () {
		expect(last([1, 2, 3, 4, 5], 3)).to.be.eql([3, 4, 5]);
	});

	it('should return last all elements as n is 5', function () {
		expect(last([1, 2, 3, 4, 5], 5)).to.be.eql([1, 2, 3, 4, 5]);
	});
});