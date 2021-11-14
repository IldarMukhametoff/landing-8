document.querySelectorAll('.tabs-services__tab').forEach((item)=>
	item.addEventListener('click',function(e){
		e.preventDefault();
		const id = this.getAttribute('href').replace('#','');
		console.log(id);
		document.querySelectorAll('.tabs-services__tab').forEach(
			(child)=>child.classList.remove('active')
		);
		document.querySelectorAll('.services__tab-item').forEach(
			(child)=>child.classList.remove('active')
		);

		item.classList.add('active');
		document.getElementById(id).classList.add('active');
	})
);