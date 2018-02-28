/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Toggles active class on the primary nav item
 * 1) Select all nav dropdown triggers and cycle through them
 * 2) On click, find the nav dropdown trigger parent
 * 3) If the nav dropdown trigger parent already has active class, remove it.
 * 4) If the nav dropdown trigger parent does not have an active class, add it.
 */
(function() {
	/**
	 * Toggles active class on the primary nav panel
	 * 1) Select all nav triggers and cycle through them
	 * 2) On click, find the nav panel within the header
	 * 3) If the navTarget already has active class, remove it on click.
	 * 4) If the navTarget does not have an active class, add it on click.
	 */
	if (document.querySelector(".js-nav-target")) {
		var navToggle = document.querySelector(".js-nav-trigger"); /* 1 */
		var navTarget = document.querySelector(".js-nav-target"); /* 2 */
		var navCloseTrigger = document.querySelector(".js-nav-close-trigger");

		navToggle.addEventListener("click", function(event) {
			/* 2 */
			event.preventDefault();

			if (navTarget.classList.contains("is-active")) {
				/* 3 */
				document.body.classList.remove("is-disabled");
				navTarget.classList.remove("is-active");
			} else {
				/* 4 */
				document.body.classList.add("is-disabled");
				navTarget.classList.add("is-active");
			}
		});

		navCloseTrigger.addEventListener("click", function(event) {
			event.preventDefault();
			document.body.classList.remove("is-disabled");
			navTarget.classList.remove("is-active");
		});
	}
})();

var navLink = document.querySelectorAll(
	".js-nav-dropdown-item > .c-primary-nav__link"
); /* 1 */

for (i = 0; i < navLink.length; i++) {
	/* 1 */

	if (navLink[i].nodeName != "BUTTON") {
		/* 2 */
		navLink[i].setAttribute("role", "button");
		navLink[i].setAttribute("tabindex", "0");

		navLink[i].addEventListener("keypress", function(event) {
			/* 3 */
			if (event.keyCode == 32) {
				event.preventDefault();
				this.click();
			}
		});
	}

	if (navLink[i].parentNode.classList.contains("is-active")) {
		/* 4 */
		navLink[i].setAttribute("aria-expanded", "true");
	} else {
		navLink[i].setAttribute("aria-expanded", "false");
	}

	navLink[i].addEventListener("click", function(event) {
		/* 5 */
		event.preventDefault();
		var navLinkParent = this.parentNode; /* 5 */
		var navItem = document.querySelectorAll(".js-nav-dropdown-item");

		if (navLinkParent.classList.contains("is-active")) {
			/* 6 */
			navLinkParent.classList.remove("is-active");
			this.setAttribute("aria-expanded", "false");
		} else {
			/* 7 */
			for (j = 0; j < navItem.length; j++) {
				navItem[j].classList.remove("is-active");
			}
			navLinkParent.classList.add("is-active");
			this.setAttribute("aria-expanded", "true");
		}
	});
}
