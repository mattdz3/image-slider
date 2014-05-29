
var photos = [
	'http://cdn.shopify.com/s/files/1/0322/1061/files/beer_explosion_f2a0aece-00e3-41db-9036-bd3a5221ea8e.jpg?42', 
	'http://cdn.smosh.com/sites/default/files/styles/300x200/public/ftpuploads/bloguploads/funny-emo-animals-emo-cow-th_26.jpg?itok=yoTomRcA',
	'http://i.imgur.com/OpkwKrA.jpg'
];

var options = {
	delay: 3000,
	target: $('.container'),
}

var imageCount = photos.length,
	counter = 1;

function Image () {
	photos.forEach(function (photo) {
		options.target.append("<img src=" + photo + "/>")
	});
}

Image();

function slideshow (array) {
	if 
		($.isArray(array)) {
		throw new error ('Not an array!');
	} else {
		($.isArray([])) 
		throw new error ('Array is empty!');
	}
}

// function Images(delay) {
// 	$('.container').attr(photos[0]);

// }