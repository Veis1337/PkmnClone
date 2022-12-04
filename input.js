// Handles keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    console.log(e);
	keysDown[e.key] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.key];
}, false);