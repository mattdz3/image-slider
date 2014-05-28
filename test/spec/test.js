/* global describe, it */

/* what are you trying to do?
how do you want it to behave?
What are the args and returns?
is it too broad or too granular? */



(function () {
    'use strict';

    describe('imageSlideshow function', function () {
        it('should inject the correct # of image tags', function () {

        	var total = $('.container img').length;

        	expect(total).to.equal(2);
        });
    });
})();


(function () {

	describe('slideshow function', function() {

		it('should throw an error if arg is not an array', function() {

			var badSlideshow = function() {
				slideshow("string");
			}

			expect(badSlideshow).to.throw(Error);
		})

		it('should throw an error if array is empty', function() {

			var badSlideshow = function() {
				slideshow([]);
			}

			expect(badSlideshow).to.throw(Error);

		});
	});
})();