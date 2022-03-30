const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalkinderen();
	let invalid = document.getElementsByClassName('invalid')
	if(invalid.length === 0)
	{
		alert('proficiat!')
	}
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
}

const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtfamilienaam");
	let errFamilienaam = document.getElementById("errfamilienaam");
	let Familienaam = txtFamilienaam.value.trim();
	if (Familienaam.length > 50) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "max. 50 karakters";
	}
	else if (Familienaam.length === 0) {
		txtFamilienaam.className = "invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "verplicht veld";
	}else {
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilienaam.innerHTML = "";
	}

}

const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById("txtgeboortedatum");
	let errGeboortedatum = document.getElementById("errgeboortedatum");
	if (txtGeboortedatum.value === '') {
		txtGeboortedatum.className="invalid"; // invalid class instellen
		errGeboortedatum.innerHTML = "dit is een verplicht veld";
	} else {
		txtGeboortedatum.className=""; // alle classes verwijderen
		errGeboortedatum.innerHTML = "";
	}
}

const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let Email = txtEmail.value.trim();
	if (Email.length === 0) {
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "dit is een verplicht veld";
	}
	else if (Email.indexOf('@') === -1) {
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "geen geldig email adres";
	}
	else if (Email[Email.indexOf('@')-1] == null) {
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "geen geldig email adres";
	}
	else if (Email[Email.indexOf('@')+1] == null) {
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "geen geldig email adres";
	}
	else {
		txtEmail.className=""; // alle classes verwijderen
		errEmail.innerHTML = "";
	}
}

const valideerAantalkinderen = () => {
	let txtAantalkinderen = document.getElementById("txtAantalKinderen");
	let errAantalkinderen = document.getElementById("errAantalKinderen");

	let Aantalkinderen = Number(txtAantalkinderen.value);

	if (txtAantalkinderen.value > 99) {
		txtAantalkinderen.className="invalid"; // invalid class instellen
		errAantalkinderen.innerHTML = "is te vruchtbaar";
	}
	else if (txtAantalkinderen.value < 0) {
		txtAantalkinderen.className="invalid"; // invalid class instellen
		errAantalkinderen.innerHTML = "is geen positief getal";
	}
	else if (isNaN(txtAantalkinderen.value)) {
		txtAantalkinderen.className="invalid"; // invalid class instellen
		errAantalkinderen.innerHTML = "is geen getal";
	}
	else {
		txtAantalkinderen.className=""; // alle classes verwijderen
		errAantalkinderen.innerHTML = "";
	}
}

window.addEventListener("load", setup);