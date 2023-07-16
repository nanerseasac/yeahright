const sim = () => {
	const divShow = document.getElementById("sh");
	divShow.style.display = 'flex'
};

const randomPlace = (t) => {
	const btn = t;
	btn.style.position = "absolute";
	btn.style.left = generateNum(20, 80);
	btn.style.top = generateNum(20, 80);
};

const generateNum = (min, max) => {
	return Math.random() * (max - min) + min + "%";
};
