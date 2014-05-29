/* global describe, it */

/* what are you trying to do?
how do you want it to behave?
What are the args and returns?
is it too broad or too granular? */



'use strict';


(function() {
	describe('Image constructor', function() {
		it('should loop through image array', function() {

			function Images(loop) {
				this.loop = loop;	
			}

			stuff = new Images('image');

			expect(stuff).to.be.an.instanceof(Images);
		})
	})
})();




(function () {

  describe('Image function', function () {
    it('should inject the correct # of image tags', function () {

      var total = $('.container img').length;

      expect(total).to.equal(3);
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
/*	describe('slide function', function() {

		it('should show an image for 2 sec before toggling to another', function() {

			var slide = function(){
				$('.container').setTimeout(2000)
					$('.container').slideToggle("slow");
			}
			expect(slide).to.
		})
	})*/














