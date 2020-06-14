let keys = document.querySelectorAll(".key");
let audios = document.querySelectorAll("audio");
let currentP = document.querySelector(".currentAttempt");
let keycodeSound = document.querySelector("#keycodeSound");
let playRecording = document.querySelector("#recording");
let stop = document.querySelector("#stop");

playRecording.addEventListener("click", function() {
	audios.forEach(audio => function() {
		audio.pause();
	})

	keycodeSound.currentTime = 0;
	keycodeSound.play();
})

let pauseState = true;

stop.addEventListener("click", function() {
	audios.forEach(audio => function() {
		audio.pause();
	})

	keycodeSound.pause();
})

// let audioList = [];

audios.forEach(audio => function() {
	audioList.append(audio);
})


let passcode = [6,9,4,8,8,1,3,2,3,9];
let attempt = [];

keys.forEach(key => {
	key.addEventListener("click", function() {
		let clicked = key.dataset.value;
		let sound = audios[Number(clicked) - 1];

		audios.forEach(audio => function() {
			audio.pause();
		})
		sound.currentTime = 0;
		sound.play();
		keycodeSound.pause();

		if (attempt.length < passcode.length) {
			attempt.push(clicked);
		}
		else {
			attempt.shift()
			attempt.push(clicked);
		}

		if (passcode.join(',') == attempt.join(',')) {
			alert("Passcode Correct, Door Opening, We're in!")
		}

		currentP.innerHTML = attempt.join(',');
	})
})