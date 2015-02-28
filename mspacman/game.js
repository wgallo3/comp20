function init() {

	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	mspacman = new Image();
	mspacman.src = 'pacman10-hp-sprite.png';

	mspacman.onload = function() {
		ctx.drawImage(mspacman, 322, 2, 461, 136, 0, 0, 461, 136);
		ctx.drawImage(mspacman, 82, 22, 14, 14, 36, 30, 14, 14);
	};

};