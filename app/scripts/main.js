
var photos = [
	'http://cdn.shopify.com/s/files/1/0322/1061/files/beer_explosion_f2a0aece-00e3-41db-9036-bd3a5221ea8e.jpg?42', 
	'http://cdn.smosh.com/sites/default/files/styles/300x200/public/ftpuploads/bloguploads/funny-emo-animals-emo-cow-th_26.jpg?itok=yoTomRcA'
	];

var options = {
	delay: 3000,
	target: $('.container'),
	}

function imageslideshow () {
	photos.forEach(function (photo) {
		options.target.append("<img src=" + photo + "/>")
	});
}

(function() {
    function fade() {
        $('.container :first-child').fadeOut(2500).next('img').fadeIn(2500).end().appendTo('.container');
    }
    setTimeout(function() {
        fade();
        setInterval(fade, 3000);
    }, 9000);
});

imageslideshow();



