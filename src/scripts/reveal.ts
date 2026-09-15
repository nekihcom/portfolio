const reducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)',
).matches;

if (!reducedMotion) {
	const observer = new IntersectionObserver(
		(entries, obs) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					obs.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
	);

	document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
