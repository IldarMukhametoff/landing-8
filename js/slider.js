new Swiper('.feedback__slider',{
	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
	pagination:{
		el:'.swiper-pagination',
		clickable:true
	},
	slidesPerView:1,
	spaceBetween: 78,
	breakpoints:{
		828: {
			slidesPerView:2,
		}
	}
});