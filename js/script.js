const colorPairs = [
	{ background: '#1e3a8a', text: '#ffffff' },
	{ background: '#fef3c7', text: '#7c2d12' },
	{ background: '#14532d', text: '#dcfce7' },
	{ background: '#fce7f3', text: '#831843' },
	{ background: '#312e81', text: '#e0e7ff' },
	{ background: '#ffedd5', text: '#7c2d12' },
	{ background: '#0f172a', text: '#f8fafc' },
	{ background: '#f1f5f9', text: '#1e293b' },
	{ background: '#7f1d1d', text: '#fee2e2' },
	{ background: '#ecfccb', text: '#365314' },
	{ background: '#164e63', text: '#cffafe' },
	{ background: '#f5f3ff', text: '#5b21b6' },
	{ background: '#3f1d38', text: '#fce7f3' },
	{ background: '#fef9c3', text: '#713f12' },
	{ background: '#064e3b', text: '#d1fae5' },
	{ background: '#e0f2fe', text: '#0c4a6e' },
	{ background: '#4c1d95', text: '#ede9fe' },
	{ background: '#fff7ed', text: '#9a3412' },
	{ background: '#1f2937', text: '#f9fafb' },
	{ background: '#fce7f3', text: '#831843' },
	{ background: '#713f12', text: '#fef3c7' },
	{ background: '#ccfbf1', text: '#134e4a' },
	{ background: '#831843', text: '#fdf2f8' },
	{ background: '#dbeafe', text: '#1e3a8a' },
	{ background: '#365314', text: '#ecfccb' },
	{ background: '#312e81', text: '#eef2ff' },
	{ background: '#fef2f2', text: '#7f1d1d' },
	{ background: '#134e4a', text: '#ccfbf1' },
	{ background: '#fffbeb', text: '#78350f' },
	{ background: '#1e1b4b', text: '#e0e7ff' },
	{ background: '#f0fdf4', text: '#14532d' },
	{ background: '#701a75', text: '#fae8ff' },
	{ background: '#e6fffb', text: '#115e59' },
	{ background: '#422006', text: '#fef3c7' },
	{ background: '#e2e8f0', text: '#0f172a' },
	{ background: '#052e16', text: '#bbf7d0' },
	{ background: '#fff1f2', text: '#881337' },
	{ background: '#1e40af', text: '#dbeafe' },
	{ background: '#f3e8ff', text: '#581c87' },
	{ background: '#0c4a6e', text: '#e0f2fe' },
	{ background: '#f7fee7', text: '#3f6212' },
	{ background: '#581c87', text: '#f3e8ff' },
	{ background: '#ecfeff', text: '#164e63' },
	{ background: '#78350f', text: '#fef3c7' },
	{ background: '#1c1917', text: '#fafaf9' },
	{ background: '#d1fae5', text: '#064e3b' },
	{ background: '#9f1239', text: '#ffe4e6' },
	{ background: '#eff6ff', text: '#1e3a8a' },
	{ background: '#0e7490', text: '#cffafe' },
	{ background: '#f5f5f4', text: '#292524' },
	{ background: '#4a044e', text: '#fae8ff' },
	{ background: '#d9f99d', text: '#365314' },
	{ background: '#172554', text: '#bfdbfe' },
	{ background: '#fdf4ff', text: '#701a75' },
	{ background: '#052e2b', text: '#99f6e4' },
	{ background: '#7c2d12', text: '#ffedd5' },
];

let lastColorIndex = -1;

document.addEventListener('click', () => {
	let colorIndex;
	do {
		colorIndex = Math.floor(Math.random() * colorPairs.length);
	} while (colorIndex === lastColorIndex);

	lastColorIndex = colorIndex;
	const { background, text } = colorPairs[colorIndex];
	document.body.style.backgroundColor = background;
	document.body.style.color = text;
});
