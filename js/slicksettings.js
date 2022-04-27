$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	mobilefirst: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 786,
			settings: { slidesToShow: 1 },
            slidesToScroll: 1,
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 2 },
            slidesToScroll: 1,
		},

		{
			breakpoint: 1024,
			settings: { slidesToShow: 3 },
            slidesToScroll: 3,
		},
	],
});
