
var Accueil = document.getElementById('AccueilAudio'); // on récupère l'élément qui sera survolé pour jouer le son
var son = document.getElementById('sonAcc'); // on récupère l'élément <audio>

Accueil.onmouseover = function(){ // lorsque le div est survolé
	son.play(); // on joue le son
};

Accueil.onmouseout = function(){ // lorsque la souris quitte le div
	son.pause(); // on met en pause le son
	son.currentTime = 0;
};


var Viesco = document.getElementById('VieAudio'); 
var sonVie = document.getElementById('sonVie');

Viesco.onmouseover = function(){ 
	sonVie.play(); 
};

Viesco.onmouseout = function(){ 
	sonVie.pause(); 
	sonVie.currentTime = 0;
};


var eau = document.getElementById('EauAudio'); 
var sonEauEau= document.getElementById('sonEau');

eau.onmouseover = function(){ 
	sonEau.play(); 
};

eau.onmouseout = function(){ 
	sonEau.pause(); 
	sonEau.currentTime = 0;
};


var Emploi = document.getElementById('EmploiAudio'); 
var sonEmplEmpl = document.getElementById('sonEmpl');

Emploi.onmouseover = function(){ 
	sonEmpl.play(); 
};

Emploi.onmouseout = function(){ 
	sonEmpl.pause(); 
	sonEmpl.currentTime = 0;
};


var Amenagement = document.getElementById('AmenagementAudio'); 
var sonAm = document.getElementById('sonAm');

Amenagement.onmouseover = function(){ 
	sonAm.play(); 
};

Amenagement.onmouseout = function(){ 
	sonAm.pause(); 
	sonAm.currentTime = 0;
};


var Tourisme = document.getElementById('TourismeAudio'); 
var sonTour = document.getElementById('sonTour');

Tourisme.onmouseover = function(){ 
	sonTour.play(); 
};

Tourisme.onmouseout = function(){ 
	sonTour.pause(); 
	sonTour.currentTime = 0;
};


var Environ = document.getElementById('EnvironAudio'); 
var sonEnv = document.getElementById('sonEnv');

Environ.onmouseover = function(){ 
	sonEnv.play(); 
};

Environ.onmouseout = function(){ 
	sonEnv.pause(); 
	sonEnv.currentTime = 0;
};


var Intercom = document.getElementById('IntercomAudio'); 
var sonInter = document.getElementById('sonInter');

Intercom.onmouseover = function(){ 
	sonInter.play(); 
};

Intercom.onmouseout = function(){ 
	sonInter.pause(); 
	sonInter.currentTime = 0;
};