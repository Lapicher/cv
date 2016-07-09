// SMOOTH SCROLL
var navbarItems = document.getElementsByClassName('lista-item');
// a cada uno de los items del menu se les agrega el evento de click.
for (var i = 0; i < navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(evt){

		deleteActiveClass();

		if (Modernizr.classList) {
			this.classList.add('active');
		} else {
			this.classList += ' active';
		}

		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');

		if(sectionToGo.length > 1) {
			evt.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll(name) {
	var elem;
	if (name == '') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}
	scrollToElement(elem);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * .1);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "35");

	} else {
		element.lastJump = null;
	}
}

// CHANGE ACTIVE ITEM
var cumulativeOffset = function(element) {
	//console.log(element.offsetParent);
	var top = 0;
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return top;
};

var offsetPerfil = cumulativeOffset(document.getElementById('profile'));
var offsetExperiencia = cumulativeOffset(document.getElementById('experiences'));
var offsetHabilidades = cumulativeOffset(document.getElementById('skills'));
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);


function changeMenuStyle(evt){
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < offsetPerfil) {
		if(!previous) {
			previous = 1;
		} else if (previous == 1) {
			return false;
		}

		deleteActiveClass();
		var a=document.querySelector('a[href="#profile"]');
		if (Modernizr.classList) {
				a.parentNode.classList.add("active");
		} else {
				a.parentNode.className += " active";
		}
		a.style.color='white';

	} else if (window.pageYOffset >= offsetPerfil && window.pageYOffset < offsetExperiencia){
		if(!previous) {
			previous = 2;
		} else if (previous == 2) {
			return false;
		}

		deleteActiveClass();
		var a=document.querySelector('a[href$="experiences"]');
		if (Modernizr.classList) {
				a.parentNode.classList.add("active");
		} else {
				a.parentNode.className += " active";
		}
		a.style.color='white';
	} else if (window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetHabilidades){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		deleteActiveClass();
		var a=document.querySelector('a[href$="skills"]');
		if (Modernizr.classList) {
				a.parentNode.classList.add("active");
		} else {
				a.parentNode.className += " active";
		}
		a.style.color='white';
	}
}

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){

		if (Modernizr.classList) {
			navbarItems[i].classList.remove('active');
			navbarItems[i].classList.remove('active-reverse');
		} else {
			navbarItems[i].className ='lista-item';
			if(navbarItems[i].children.length>0)
					navbarItems[i].children[0].style.color='#3e215d';
		}
	}
}
