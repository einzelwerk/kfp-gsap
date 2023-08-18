import Swiper, { Scrollbar, Thumbs, EffectFade } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/thumbs'
import 'swiper/scss/effect-fade'
import breakpoints from './MatchMedia'

function sliders() {
	const portfolioSlider = document.querySelector('.portfolio-slider')
	if (portfolioSlider) {
		const portfolioInstance = new Swiper(portfolioSlider, {
			modules: [Scrollbar],
			slidesPerView: 1,
			spaceBetween: 30,
			scrollbar: {
				el: portfolioSlider.querySelector('.slider-scrollbar'),
				draggable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
			},
		})
		portfolioInstance.init()
	}
	const projectsSlider = document.querySelector('.other-projects')
	if (projectsSlider) {
		const projectsInstance = new Swiper(projectsSlider, {
			modules: [Scrollbar],
			slidesPerView: 1,
			spaceBetween: 30,
			scrollbar: {
				el: projectsSlider.querySelector('.slider-scrollbar'),
				draggable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1440: {
					slidesPerView: 3,
				},
			},
		})
		projectsInstance.init()
	}

	const careerSlider = document.querySelector('.js-career-slider')
	if (careerSlider) {
		const careerSliderInstance = new Swiper(careerSlider, {
			modules: [Scrollbar],
			slidesPerView: 1,
			init: false,
			scrollbar: {
				el: careerSlider.querySelector('.slider-scrollbar'),
				draggable: true,
			},
		})
		if (window.matchMedia(breakpoints.isMobile).matches) {
			careerSliderInstance.init()
		}
	}

	const aboutSlider = document.querySelector('.js-about-slider')
	if (aboutSlider) {
		const aboutSliderInstanceText = new Swiper('.js-about-slider-text', {
			modules: [EffectFade],
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
		})
		const aboutSliderInstance = new Swiper(aboutSlider, {
			modules: [Thumbs, Scrollbar],
			slidesPerView: 1.2,
			scrollbar: {
				el: aboutSlider.querySelector('.slider-scrollbar'),
				draggable: true,
			},
			thumbs: {
				swiper: aboutSliderInstanceText,
			},
			breakpoints: {
				768: {
					slidesPerView: 2.2,
				},
			},
		})
		aboutSliderInstance.init()
	}

	const aboutGallery = document.querySelector('.js-about-gallery')
	if (aboutGallery) {
		const aboutGalleryInstance = new Swiper(aboutGallery, {
			modules: [Scrollbar],
			slidesPerView: 1,
			init: false,
			scrollbar: {
				el: aboutGallery.querySelector('.slider-scrollbar'),
				draggable: true,
			},
		})
		if (window.matchMedia(breakpoints.isMobile).matches) {
			aboutGalleryInstance.init()
		}
	}

	const reviewsSlider = document.querySelector('.js-reviews-slider')
	if (reviewsSlider) {
		const reviewSliderInstance = new Swiper(reviewsSlider, {
			modules: [Scrollbar],
			slidesPerView: 1,
			scrollbar: {
				el: reviewsSlider.querySelector('.slider-scrollbar'),
				draggable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 90,
				},
			},
		})
		reviewSliderInstance.init()
	}
	const newsSlider = document.querySelector('.js-news-slider')
	if (newsSlider) {
		const newsSliderInstance = new Swiper(newsSlider, {
			modules: [Scrollbar],
			slidesPerView: 1,
			scrollbar: {
				el: newsSlider.querySelector('.slider-scrollbar'),
				draggable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		})
		newsSliderInstance.init()
	}
}

sliders()

window.addEventListener('resize', sliders)
