/*------------------------------------*\
    #FORM SLIDEOUT
\*------------------------------------*/
/**
 * Form that slides out when get quote button is clicked
 * 1)
 */
(function() {
	if (document.querySelector(".js-get-quote")) {
		var quoteButton = document.querySelector(".js-get-quote");
		var formCloseTrigger = document.querySelector(".js-form-close-trigger");

		quoteButton.addEventListener("click", function(event) {
			event.preventDefault();
			var formSlideout = document.querySelector(".js-form-slideout");
			if (formSlideout.classList.contains("is-active")) {
				formSlideout.classList.remove("is-active");
				document.body.classList.remove("is-disabled");
			} else {
				formSlideout.classList.add("is-active");
				document.body.classList.add("is-disabled");
			}
		});

		formCloseTrigger.addEventListener("click", function(event) {
			event.preventDefault();
			document.body.classList.remove("is-disabled");

			this.parentNode.parentNode.classList.remove("is-active");
		});
	}

	var radioTrigger = document.querySelectorAll(".js-form-dropdown .js-radio-trigger");
	for (i=0; i<radioTrigger.length; i++) {
		radioTrigger[i].addEventListener("click", function(event) {
			if(this.nextElementSibling.innerText == "Yes") {
				document.querySelector(".js-dropdown-form-target").classList.remove("u-is-hidden");
			}
			else {
				document.querySelector(".js-dropdown-form-target").classList.add("u-is-hidden");
			}
		});
	}
})();
