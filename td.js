
var valeur = $('#put');
var button = $('#btn');

$(button).click(function() {
	if(valeur.val()) {
		var boite = $('ul');
		var croix = $('<input type="checkbox"></input>').addClass('box');
		var liste = $('<li></li>').text(valeur.val()).append(croix);
		boite.append(liste);

	} else {
		alert('FAUX')
	}
});
	



