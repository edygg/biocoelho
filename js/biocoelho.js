function addComment() {
	var name = document.getElementById("name");
	var comment = document.getElementById("comment");

	if (name.value == "" || name.value == null || comment.value == "" || comment.value == null) {
		var addError = document.getElementById("add-comment-form");
		var error = document.createElement("div");

		error.setAttribute("class", "alert alert-warning alert-dismissable");

		var closeButton = document.createElement("button");
		closeButton.setAttribute("type", "button");
		closeButton.setAttribute("class", "close");
		closeButton.setAttribute("data-dismiss", "alert");
		closeButton.setAttribute("aria-hidden", "true");
		closeButton.appendChild(document.createTextNode("x"));

		var errorText = document.createTextNode("Recuerde rellenar tanto el campo de nombre y su comentario");
		error.appendChild(closeButton);
		error.appendChild(errorText);
		addError.appendChild(error);
	} else {
		var panel = document.createElement("article");
		panel.setAttribute("class", "panel panel-primary");

		var panelHead = document.createElement("div");
		panelHead.setAttribute("class", "panel-heading")
		panelHead.appendChild(document.createTextNode(name.value + " dijo:"));

		var panelBody = document.createElement("div");
		panelBody.setAttribute("class", "panel-body")
		panelBody.appendChild(document.createTextNode(comment.value));

		panel.appendChild(panelHead);
		panel.appendChild(panelBody);

		document.getElementById("comments").appendChild(panel);

		name.value = '';
		comment.value = '';
	}
}