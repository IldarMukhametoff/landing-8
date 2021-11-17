document.querySelectorAll('.tab-trigger-services').forEach((item)=>
	item.addEventListener('click',function(e){
		e.preventDefault();
		const id = this.getAttribute('href').replace('#','');
		document.querySelectorAll('.tab-trigger-services').forEach(
			(child)=>child.classList.remove('active')
		);
		document.querySelectorAll('.services__slider').forEach(
			(child)=>child.classList.remove('active')
		);

		item.classList.add('active');
		document.getElementById(id).classList.add('active');
	})
);
document.querySelectorAll('.price__toggle').forEach((item)=>
	item.addEventListener('click',function(e){
		e.preventDefault();
		const id = this.getAttribute('href').replace('#','');
		document.querySelectorAll('.price__toggle').forEach(
			(child)=>child.classList.remove('active')
		);
		document.querySelectorAll('.price__row').forEach(
			(child)=>child.classList.remove('active')
		);
		

		item.classList.add('active');
		document.getElementById(id).classList.add('active');
	})
);
document.querySelectorAll('.price__tab-trigger').forEach((item)=>
	item.addEventListener('click',function(e){
		e.preventDefault();
		const id = this.getAttribute('href').replace('#','');
		document.querySelectorAll('.price__tab-trigger').forEach(
			(child)=>child.classList.remove('active')
		);
		document.querySelectorAll('.price__tab-item').forEach(
			(child)=>child.classList.remove('active')
		);

		item.classList.add('active');
		document.getElementById(id).classList.add('active');
	})
);