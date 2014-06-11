describe('fieldset', function () {
	'use strict';

	var fixture = document.getElementById('fixture');

	afterEach(function () {
		fixture.innerHTML = '';
	});

	it('should return false if the radio element has no name', function () {
		fixture.innerHTML = '<input type="radio" id="target">Choice one</input>';
		var node = fixture.querySelector('#target');
		assert.isFalse(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return false if there is only one radio element with the same name', function () {
		fixture.innerHTML = '<input type="radio" id="target" name="uniqueradioname">Choice one</input><input type="radio" name="differentname">Choice 1a</input>';
		var node = fixture.querySelector('#target');
		assert.isFalse(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return false if there are two ungrouped radio elements with the same name', function () {
		fixture.innerHTML = '<input type="radio" id="target" name="uniqueradioname">Choice one</input><input type="radio" name="uniqueradioname">Choice 1a</input>';
		var node = fixture.querySelector('#target');
		assert.isFalse(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return false if the group has no legend element', function () {
		fixture.innerHTML = '<fieldset><input type="radio" id="target" name="uniqueradioname">Choice one</input><input type="radio" name="uniqueradioname">Choice 1a</input></fieldset>';
		var node = fixture.querySelector('#target');
		assert.isFalse(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return false if the group has no legend text', function () {
		fixture.innerHTML = '<fieldset><legend></legend><input type="radio" id="target" name="uniqueradioname">Choice one</input><input type="radio" name="uniqueradioname">Choice 1a</input></fieldset>';
		var node = fixture.querySelector('#target');
		assert.isFalse(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return false if the group contains extra elements', function () {
		fixture.innerHTML = '<fieldset><legend>Legendary</legend><input type="text" id="random"><input type="radio" id="target" name="uniqueradioname">Choice one</input><input type="radio" name="uniqueradioname">Choice 1a</input></fieldset>';
		var node = fixture.querySelector('#target');
		assert.isFalse(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return false if the group does not contain all elements', function () {
		fixture.innerHTML = '<input type="radio" id="target" name="uniqueradioname">Choice one</input><fieldset><legend>legendary</legend><input type="radio" name="uniqueradioname">Choice 1a</input></fieldset>';
		var node = fixture.querySelector('#target');
		assert.isFalse(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return true if the group contains only the right elements and has legend', function () {
		fixture.innerHTML = '<fieldset><legend>Legendary</legend><input type="radio" id="target" name="uniqueradioname">Choice one</input><input type="radio" name="uniqueradioname">Choice 1a</input></fieldset>';
		var node = fixture.querySelector('#target');
		assert.isTrue(checks['radio-fieldset'].evaluate(node, 'radio'));
	});

	it('should return true if an ARIA group contains only the right elements', function () {
		fixture.innerHTML = '<div role="group"><input type="radio" id="target" name="uniqueradioname">Choice one</input><input type="radio" name="uniqueradioname">Choice 1a</input></div>';
		var node = fixture.querySelector('#target');
		assert.isTrue(checks['radio-fieldset'].evaluate(node, 'radio'));
	});
});
