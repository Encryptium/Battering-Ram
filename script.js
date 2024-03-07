// Coming soon card
document.getElementById('launch-panel').innerHTML += 
	`
	<div class="launch-card">
		<img src="coming-soon.jpg">
		<h2>Coming Soon!<wbr><span class="water-gradient">Coming Soon!</span></h2>
	</div>
	`;

fetch("game-index.txt")
.then((res) => res.text())
.then((text) => {
	var games = text.split("\n");

	for (let i = 0; i < games.length; i++) {
		if (!games[i]) {
			continue;
		}

		if (games[i].split(":").length == 4 && games[i].split(":")[3] == "runtime") {
			document.getElementById('launch-panel').innerHTML += 
			`
			<div class="launch-card">
				<h2>${games[i].split(":")[0]}</h2>
				<p>${games[i].split(":")[2] || "Currently Available"}</p>
				<div class="options">
					<span class="add-module-btn" onclick="addModule(${i})">+</span>
					<a class="launch-button" href="${games[i].split(":")[1]}" target="_blank">Play</a>
				</div>
					<span class="launch-note" title="After clicking play, you may see an alert popup saying there is an error. Dismiss the message and the game will continue running."><span>⚠</span></span>
			</div>
			`;
			continue;
		}
		else if (games[i].split(":").length == 4 && games[i].split(":")[3] == "loadtime") {
			document.getElementById('launch-panel').innerHTML += 
			`
			<div class="launch-card">
				<h2>${games[i].split(":")[0]}</h2>
				<p>${games[i].split(":")[2] || "Currently Available"}</p>
				<div class="options">
					<span class="add-module-btn" onclick="addModule(${i})">+</span>
					<a class="launch-button" href="${games[i].split(":")[1]}" target="_blank">Play</a>
				</div>
				<span class="launch-note" title="May take up to a few minutes to load"><span>⧖</span></span>
			</div>
			`;
			continue;
		}
		else if (games[i].split(":").length == 4 && games[i].split(":")[3] == "beta") {
			document.getElementById('launch-panel').innerHTML += 
			`
			<div class="launch-card">
				<h2>${games[i].split(":")[0]}</h2>
				<p>${games[i].split(":")[2] || "Currently Available"}</p>
				<div class="options">
					<span class="add-module-btn" onclick="addModule(${i})">+</span>
					<a class="launch-button" href="${games[i].split(":")[1]}" target="_blank">Launch</a>
				</div>
				<span class="special beta">BETA</span>
			</div>
			`;
			continue;
		}
		// Special tagged cards
		else if (games[i].split(":").length == 4) {
			document.getElementById('launch-panel').innerHTML += 
			`
			<div class="launch-card">
				<h2>${games[i].split(":")[0]}</h2>
				<p>${games[i].split(":")[2] || "Currently Available"}</p>
				<div class="options">
					<span class="add-module-btn" onclick="addModule(${i})">+</span>
					<a class="launch-button" href="${games[i].split(":")[1]}" target="_blank">Play</a>
				</div>
				<span class="special">${games[i].split(":")[3]}</span>
			</div>
			`;
			continue;
		}

		// append game generic card
		document.getElementById('launch-panel').innerHTML += 
		`
		<div class="launch-card">
			<h2>${games[i].split(":")[0]}</h2>
			<p>${games[i].split(":")[2] || "Currently Available"}</p>
			<div class="options">
				<span class="add-module-btn" onclick="addModule(${i})">+</span>
				<a class="launch-button" href="${games[i].split(":")[1]}" target="_blank">Play</a>
			</div>
		</div>
		`;
	}

	document.getElementById('launch-panel').innerHTML += 
		`
		<div id="bottom" class="launch-card">
			<h2>BOTTOM</h2>
			<p>N/A</p>
		</div>
		`;
 }).then(() => {
	const launchCards = document.getElementsByClassName('launch-card');
	for (var i = 0; i < launchCards.length-1; i++) {
		launchCards[i].id = "card" + i;
	}
}).then(() => {initializeSheet();})
.catch((e) => console.error(e));




function search() {
	var launchList = document.querySelectorAll('.launch-card');
	var search = document.getElementById('search').value.toLowerCase();
	for (let i = 0; i < launchList.length; i++) {
		if (!launchList[i].textContent.toLowerCase().includes(search)) {
				launchList[i].style.display = 'none';
		} else {
				launchList[i].style.display = 'block';
		}
	}
}



const launchPanel = document.getElementById('launch-panel');

launchPanel.addEventListener("scroll", e => {
	if (launchPanel.scrollHeight - launchPanel.scrollTop - launchPanel.clientHeight < 1) {
		document.getElementById("scroll-down").style.display = 'none';
	} else {
		document.getElementById("scroll-down").style.display = 'block';
	}
}, { passive: true });

launchPanel.addEventListener("scroll", e => {
	if (launchPanel.scrollTop > 225) {
		document.getElementById("featured-section").classList.add("disappear-y");
		document.getElementById("featured-section").classList.remove("reappear-y");


		launchPanel.style.height = '100%';//92% w/o nav
		document.getElementById("nav").style.display = 'block';
	} 
	else if (launchPanel.scrollTop < 5) { // used to 10
		document.getElementById("featured-section").classList.add("reappear-y");


		launchPanel.style.height = '47%';
		document.getElementById("nav").style.display = 'none';
	}
});




// sheet
function initializeSheet() {
		document.querySelector('.launch-card:first-child img').addEventListener('click', function() {
				const overlay = document.createElement('div');
				overlay.setAttribute('id', 'pageOverlay');
				overlay.classList.add('overlay');
				document.body.appendChild(overlay);

				// Apply blur to specific elements rather than the body
				applyBlurToBackground(true);

				document.getElementById('popupSheet').classList.add('active');
				// Ensure sheet is interactable
				document.getElementById('popupSheet').style.pointerEvents = 'auto';

				// Close sheet when overlay is clicked
				overlay.addEventListener('click', closeSheet);
		});

		// temporary, only for special messages
		document.querySelector('#lm-link').addEventListener('click', function() {
				const overlay = document.createElement('div');
				overlay.setAttribute('id', 'pageOverlay');
				overlay.classList.add('overlay');
				document.body.appendChild(overlay);
	
				// Apply blur to specific elements rather than the body
				applyBlurToBackground(true);
	
				document.getElementById('popupSheet').classList.add('active');
				// Ensure sheet is interactable
				document.getElementById('popupSheet').style.pointerEvents = 'auto';
	
				// Close sheet when overlay is clicked
				overlay.addEventListener('click', closeSheet);
		});
}

function closeSheet() {
		const overlay = document.getElementById('pageOverlay');
		if (overlay) {
				document.body.removeChild(overlay);
		}
		// Remove blur from background elements
		applyBlurToBackground(false);
		document.getElementById('popupSheet').classList.remove('active');
}

function applyBlurToBackground(shouldBlur) {
		const elementsToBlur = document.querySelectorAll('body > *:not(.sheet):not(.overlay)');
		elementsToBlur.forEach(el => {
				if (shouldBlur) {
						el.classList.add('blur-and-darken');
				} else {
						el.classList.remove('blur-and-darken');
				}
		});
}


// Make the #launch-panel the default scroll element
// by capturing scroll arrow keys
document.addEventListener('keydown', function(event) {
    const scrollableDiv = document.querySelector('#launch-panel');
    if (!scrollableDiv) return;

    switch (event.keyCode) {
        case 38: // Arrow Up
            scrollableDiv.scrollTop -= 100; // Adjust the pixel value as needed
            break;
        case 40: // Arrow Down
            scrollableDiv.scrollTop += 100; // Adjust the pixel value as needed
            break;
    }
});