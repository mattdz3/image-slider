/* global describe, it */

(function () {
    'use strict';

    describe('image slider', function () {
        it('should inject the correct # of image tags', function () {

        	var total = $('.imageslideshow img').length;

        	expect(total).to.equal(2);
        });

       
    });
})();
