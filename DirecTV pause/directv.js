var state = true;
play();
play();

function play() {
	var address = localStorage["address"];
	var req = new XMLHttpRequest();
	req.open(
		"GET",
		"http://"+address+":8080/remote/processKey?key=play",
		false);
	req.onload = showPause;
	req.send(null);
}
function pause() {
	var address = localStorage["address"];
	var req = new XMLHttpRequest();
	req.open(
		"GET",
		"http://"+address+":8080/remote/processKey?key=pause",
		false);
	req.onload = showPlay;
	req.send(null);
	chrome.browserAction.setIcon({path:"play.png"});
}
function showPause() {
	state = true;
	chrome.browserAction.setIcon({path:"pause.png"});
}
function showPlay() {
	state = false;
	chrome.browserAction.setIcon({path:"play.png"});
}

function toggle() {
	if (state) {
		pause();
	} else {
		play();
		play();
	}
}

chrome.browserAction.onClicked.addListener(toggle);
