document.querySelectorAll('.works__filter-item').forEach((item)=>
	item.addEventListener('click',function(){
		const filter = this.getAttribute('data-filter');
		
		
		if(filter!='all'){
			document.querySelectorAll('.works__img').forEach(
				(child)=>child.classList.remove('active')
			);
		}else{
			document.querySelectorAll('.works__img').forEach(
				(child)=>child.classList.add('active')
			);
		}
		document.querySelectorAll('.works__filter-item').forEach(
			(child)=>child.classList.remove('active')
		);
		document.querySelectorAll('.works__filter-item').forEach(
			(child)=>child.classList.remove('active')
		);

		item.classList.add('active');
		
		document.querySelectorAll('.'+filter).forEach(
			(child)=>child.classList.add('active')
		);
	})
);