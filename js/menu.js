const iconMenu = document.querySelector('.header__burger');
if(iconMenu){
	const headerMenu = document.querySelector('.header__menu');
	const headerHead = document.querySelector('.header__head');
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		headerMenu.classList.toggle('active');
		headerHead.classList.toggle('active');
	});
}

const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if(menuLinks.length>0){
	menuLinks.forEach(menuLink=>{
		menuLink.addEventListener("click",onMenuLinkClick);
	});
	function onMenuLinkClick(e){
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset-document.querySelector('header').offsetHeight;
		
			window.scrollTo({
				top:gotoBlockValue,
				behavior:"smooth"
			});
			e.preventDefault();
		}
	}
}