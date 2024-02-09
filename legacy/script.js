const directLink = "//arrivedcanteen.com/jtc5qxai?key=cae7757dc0e24b2193099cdc557e8d6d";

fetch("game-index.txt")
.then((res) => res.text())
.then((text) => {
	var games = text.split("\n");

	for (let i = 0; i < games.length; i++) {
		if (games[i][0] + games[i][1] == "//") {
			continue;
		}

		// integrated native ad
		// if (i != 0 && i % 8 == 0) {
		// 	document.getElementById('launch-panel').innerHTML += 
		// 		`
		// 		<div class="launch-card ad-card">
		// 			<h2>Sponsored</h2>
		// 			<p>ADVERTISEMENT</p>
		// 			<a title="Ads by AdsTerra" class="adsterra" href="https://beta.publishers.adsterra.com/referral/L8FhFezA4m" target="_blank"><img alt="banner" src="logo_adsterra.webp" height="35" /></a>
		// 			<a class="launch-button" href=${directLink} target="_blank" title="If this advertisement leads to a suspicious page, please close it and come back. Report the incident to us from the contact page.">Visit</a>
		// 		</div>
		// 		`;
		// } 

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
})
.catch((e) => console.error(e));

fetch("quotes.txt")
.then((res) => res.text())
.then((text) => {
	var quotes = text.split("\n");

	document.getElementById("headline").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];


	var showAd = Math.floor(Math.random() * 5) + 1; // 20% chance for no ad
	// if (showAd == 1) { // 20% change for direct link ad
	// 	document.getElementById("headline").innerHTML = `<a id="sponsored-link" href=${directLink} target="_blank">Sponsored</a>`;
	// }
	if (spons && (showAd == 1 || showAd == 2 || showAd == 3 || showAd == 4)) { 
		// 80% chance for banner ad
		document.getElementById("headline").style.display = 'none';
		document.getElementById("banner-ad").style.display = 'block';
	}

 })
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
		document.getElementById("logo").classList.add("disappear");
		document.getElementById("slogan").classList.add("disappear-y");
		document.getElementById("headline").classList.add("disappear-y");
		if (spons) {
			document.getElementById("banner-ad").classList.add("disappear-y");
		}

		document.getElementById("logo").classList.remove("reappear");
		document.getElementById("slogan").classList.remove("reappear-y");
		document.getElementById("headline").classList.remove("reappear-y");
		if (spons) {
			document.getElementById("banner-ad").classList.remove("reappear-y");
		}

		launchPanel.style.height = '100%';//92% w/o nav
		document.getElementById("nav").style.display = 'block';
	} 
	else if (launchPanel.scrollTop < 10) {
		document.getElementById("logo").classList.add("reappear");
		document.getElementById("slogan").classList.add("reappear-y");
		document.getElementById("headline").classList.add("reappear-y");

		if (spons) {
			document.getElementById("banner-ad").classList.add("reappear-y");
		}


		launchPanel.style.height = '50%';

		document.getElementById("nav").style.display = 'none';
	}
});


