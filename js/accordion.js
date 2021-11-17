document.querySelectorAll('.accordion-price__trigger').forEach((item)=>
	item.addEventListener('click',function(e){
		document.querySelectorAll('.accordion-price__trigger').forEach(
			(child)=>child.classList.remove('active')
		);
		document.querySelectorAll('.accordion-price__trigger').forEach(
			(child)=>child.nextElementSibling.classList.remove('active')
		);
		

		item.classList.add('active');
		item.nextElementSibling.classList.add('active');
	})
);