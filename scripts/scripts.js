document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const tabs = document.querySelectorAll('.tab__target')
	const pages = document.querySelectorAll('.tab__info')
	const up = document.querySelector('.up')
	const menuItem = document.querySelectorAll('.menu__item')

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', toggleMenu)
	document.addEventListener('click', clickOutsideMenu)

	// if (burger) {
	// 	menuItem.forEach(item => {
	// 		item.addEventListener('click', () => {
	// 			burger.classList.toggle('active')
	// 			menu.classList.remove('active')
	// 			body.classList.remove('no-scroll')
	// 		})
	// 	})
	// }

	document.addEventListener('click', function (event) {
		const language = document.querySelector('.language')

		if (!language.contains(event.target)) {
			language.classList.remove('language--active')
		} else {
			language.classList.toggle('language--active')
		}
	})

	function handleTabClick(
		tabs,
		pages,
		activeTabClass,
		activePageClass,
		opacityPageClass
	) {
		tabs.forEach((tab, idx) => {
			tab.addEventListener('click', () => {
				tabs.forEach(tab => tab.classList.remove(activeTabClass))
				pages.forEach(page => {
					page.classList.remove(activePageClass)
					page.classList.remove(opacityPageClass)
				})

				tab.classList.add(activeTabClass)
				pages[idx].classList.add(activePageClass)

				setTimeout(() => {
					pages[idx].classList.add(opacityPageClass)
				}, 380)
			})
		})
	}

	handleTabClick(
		tabs,
		pages,
		'tab__target--active',
		'tab__info--active',
		'tab__info--opacity'
	)

	up?.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}

	Fancybox.bind('[data-fancybox]', {})

	var promoSwiper = new Swiper('.promo__swiper', {
		loop: true,
		pagination: {
			el: '.promo__swiper-pagination',
			// clickable: true,
		},
	})

	var tasksSwiper = new Swiper('.tasks__swiper', {
		slidesPerView: 2,
		initialSlide: 1,
		spaceBetween: 5,
		navigation: {
			nextEl: '.tasks__arrow-next',
			prevEl: '.tasks__arrow-prev',
		},
		breakpoints: {
			577: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
		},
	})

	var teamSwiper = new Swiper('.team__swiper', {
		spaceBetween: 5,
		navigation: {
			nextEl: '.team__arrow-next',
			prevEl: '.team__arrow-prev',
		},
		pagination: {
			el: '.team__swiper-pagination',
			// clickable: true,
		},
	})
})
