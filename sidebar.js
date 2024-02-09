const sidebar = document.getElementById('sidebar');
const sidebarList = document.getElementById('sidebar-module-list');
const emptyDescription = document.getElementById('empty-description');

var savedModules = localStorage.getItem("savedmodules");
savedModules = savedModules ? JSON.parse(savedModules) : [];

function updateSidebar() {
	sidebarList.innerHTML = ''; // Clear existing list items
	for (var i = 0; i < savedModules.length; i++) {
			var module = savedModules[i];
			sidebarList.innerHTML += `
			<li draggable="true" ondragstart="dragStart(event)" ondragover="allowDrop(event)" ondrop="drop(event)" data-title="${module.title}">
					<div class="module-item">
							<a href="${module.path}" target="_blank">${module.title}</a>
							<button onclick="removeModule('${module.title}')" title="Remove from your library">x</button>
					</div>
			</li>`;
	}
	if (savedModules.length == 0) {
			emptyDescription.style.display = 'block';
	} else {
			emptyDescription.style.display = 'none';
	}

	document.querySelectorAll('#sidebar-module-list > li').forEach(li => {
		li.addEventListener('mouseenter', () => {
			li.classList.add('sidebar-li-hovered');
		});

		li.addEventListener('mouseleave', () => {
			li.classList.remove('sidebar-li-hovered');
		});

		// Add event listeners to each anchor tag
		li.querySelectorAll('a').forEach(a => {
			a.addEventListener('mouseenter', (e) => {
				// When entering the anchor, stop the event from bubbling up
				e.stopPropagation();
				li.classList.remove('sidebar-li-hovered');
			});

			a.addEventListener('mouseleave', (e) => {
				// When leaving the anchor, check if the related target is still within the li
				if (li.contains(e.relatedTarget)) {
					// If the mouse is still within the li, re-add the li-hovered class
					li.classList.add('sidebar-li-hovered');
				}
			});
		});
	});
}

updateSidebar();

function dragStart(event) {
		event.dataTransfer.setData("text", event.target.getAttribute('data-title'));
}

function allowDrop(event) {
		event.preventDefault();
}

function drop(event) {
		event.preventDefault();
		var droppedTitle = event.dataTransfer.getData("text");
		var targetTitle = event.target.closest('li').getAttribute('data-title');

		var droppedIndex = savedModules.findIndex(module => module.title === droppedTitle);
		var targetIndex = savedModules.findIndex(module => module.title === targetTitle);

		if (droppedIndex !== -1 && targetIndex !== -1) {
				// Reorder the modules in the savedModules array
				var [reorderedModule] = savedModules.splice(droppedIndex, 1);
				savedModules.splice(targetIndex, 0, reorderedModule);

				// Update the localStorage with the new array
				localStorage.setItem("savedmodules", JSON.stringify(savedModules));

				// Update the sidebar to reflect the new order
				updateSidebar();
		}
}

function addModule(num) {
		var targetModule = document.getElementById("card" + num);
		var moduleTitle = targetModule.querySelector('h2').innerHTML;
		var modulePath = targetModule.querySelector('a').getAttribute('href');

		// Check for duplicate module
		var isDuplicate = savedModules.some(module => module.title === moduleTitle || module.path === modulePath);
		if (!isDuplicate) {
				// Add the new module to the array
				savedModules.push({"title": moduleTitle, "path": modulePath});

				// Update the localStorage with the new array
				localStorage.setItem("savedmodules", JSON.stringify(savedModules));

				// Update the sidebar to reflect the new module
				updateSidebar();
		} else {
				console.log("Module already exists in the collection.");
		}
}


function removeModule(moduleTitle) {
		// Filter out the module with the given title
		savedModules = savedModules.filter(module => module.title !== moduleTitle);

		// Update the localStorage with the new array
		localStorage.setItem("savedmodules", JSON.stringify(savedModules));

		// Update the sidebar to reflect the removal
		updateSidebar();
}

function redirectToLegacyIfMobile() {
	var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
	if (isMobile) {
			window.location.href = 'legacy/';
	}
}

// Call the function when the script loads
redirectToLegacyIfMobile();
