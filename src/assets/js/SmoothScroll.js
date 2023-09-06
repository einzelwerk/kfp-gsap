import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
const smoother = ScrollSmoother.create({
	smooth: 1,
	effects: true,
})

document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault()
		const tg = e.target.closest('a').getAttribute('href')
		smoother.scrollTo(tg, true, 'top top')
	})
})
