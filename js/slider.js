new Swiper('.intro__slider',{
	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
});
new Swiper('.testimonials__slider',{
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
});
new Swiper('.brands__slider',{
	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
	breakpoints:{
		1024:{
			slidesPerView:6,
		},
		767:{
			slidesPerView:4,
		},
		480:{
			slidesPerView:2,
		},
		320:{
			slidesPerView:1,
		}
	}
});