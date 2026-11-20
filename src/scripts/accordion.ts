// details の開閉は CSS だけでは高さを動かせない（対応ブラウザが限られる）ため、
// 開閉のたびに details の高さを Web Animations API で動かす
const reducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)',
).matches;

const DURATION = 250;
const EASING = 'ease-out';

const setupAccordion = (details: HTMLDetailsElement) => {
	const summary = details.querySelector('summary');
	const content = details.querySelector<HTMLElement>('.project__content');
	if (!summary || !content) return;

	let animation: Animation | null = null;
	let closing = false;

	// box-sizing: border-box のため、高さには上下の枠線の分を含める
	const borderHeight = () => details.offsetHeight - details.clientHeight;

	const finish = (open: boolean) => {
		details.open = open;
		details.classList.remove('is-closing');
		details.style.height = '';
		details.style.overflow = '';
		animation = null;
		closing = false;
	};

	const run = (from: number, to: number, open: boolean) => {
		animation?.cancel();
		details.style.overflow = 'hidden';
		animation = details.animate(
			{ height: [`${from}px`, `${to}px`] },
			{ duration: DURATION, easing: EASING },
		);
		animation.onfinish = () => finish(open);
	};

	const close = () => {
		closing = true;
		// 閉じ終わるまで open のままなので、矢印の向きはクラスで先に戻す
		details.classList.add('is-closing');
		run(details.offsetHeight, summary.offsetHeight + borderHeight(), false);
	};

	const open = () => {
		const from = details.offsetHeight;
		closing = false;
		details.classList.remove('is-closing');
		details.open = true;
		run(
			from,
			summary.offsetHeight + content.offsetHeight + borderHeight(),
			true,
		);
	};

	// Enter / Space での開閉も click として届く
	summary.addEventListener('click', (event) => {
		event.preventDefault();
		if (closing || !details.open) {
			open();
		} else {
			close();
		}
	});
};

if (!reducedMotion) {
	document
		.querySelectorAll<HTMLDetailsElement>('details.project')
		.forEach(setupAccordion);
}

// import / export がないと reveal.ts と同じグローバルスコープ扱いになり、reducedMotion が重複するためモジュールにする
export {};
