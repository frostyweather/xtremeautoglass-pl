/*------------------------------------*\
    #FORM SLIDEOUT
\*------------------------------------*/
/**
 * Form that slides out when get quote button is clicked
 * 1)
 */
(function() {
	var quoteButton = document.querySelector(".js-get-quote");
	var formCloseTrigger = document.querySelector(".js-form-close-trigger");
	console.log(formCloseTrigger);
	quoteButton.addEventListener("click", function(event) {
		event.preventDefault();
		var formSlideout = document.querySelector(".js-form-slideout");
		if (formSlideout.classList.contains("is-active")) {
			formSlideout.classList.remove("is-active");
		} else {
			formSlideout.classList.add("is-active");
		}
	});

	formCloseTrigger.addEventListener("click", function(event) {
		event.preventDefault();
		document.body.classList.remove("is-disabled");
		console.log(this.parentNode.parentNode);
		this.parentNode.parentNode.classList.remove("is-active");
	});
})();
